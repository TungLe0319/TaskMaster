



import { appState } from '../AppState.js';
import { tasksService } from '../Services/TasksService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from "../Utils/Pop.js";
import { saveState } from '../Utils/Store.js';
import { setHTML } from '../Utils/Writer.js';

export class TasksController {
  constructor() {}

  toggleChecked(id){
 
tasksService.toggleChecked(id)
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

  async removeTask(id) {
    if ( await Pop.confirm('Are you finished or are you procrastinating?','','Procrastinate','question')) {
      tasksService.removeTask(id);
    }
  }
}
