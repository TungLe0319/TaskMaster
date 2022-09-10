import { appState } from '../AppState.js';
import { tasksService } from '../Services/TasksService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { saveState } from '../Utils/Store.js';
import { setHTML } from '../Utils/Writer.js';

export class TasksController {
  constructor() {}

  toggleTaskCompleted() {
    let task = appState.tasks.find((task) => task.id == id);
    if (!task) {
      throw new Error('Bad ID');
    }

    task.checked = !task.checked;
    appState.emit('tasks');
    saveState('tasks', appState.tasks);
  }

  createTask(listId) {
    try {
      window.event.preventDefault();
      let form = window.event.target;
      let newTask = getFormData(form);
      newTask.listId = listId;
      // console.log('okay?', newTask);
      tasksService.createTask(newTask);
      form.reset();
    } catch (error) {
      console.error('[CREATE_TASK]', error);
    }
  }

  removeTask(id) {
    if (window.confirm('Have you completed this or are you being lazy?..')) {
      tasksService.removeTask(id);
    }
  }
}
