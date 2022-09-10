import { appState } from '../AppState.js';
import { Task } from '../Models/Task.js';
import { Pop } from "../Utils/Pop.js";
import { saveState } from '../Utils/Store.js';

class TasksService {
  constructor() {}

  createTask(newTask) {
    let task = new Task(newTask);
    appState.tasks = [task, ...appState.tasks];
    // console.log(task);
    // console.log('[CREATE_TASK TASK SERVICE]', appState.tasks);
    saveState('tasks', appState.tasks);
  }

  removeTask(id) {
    let leftovers = appState.tasks.filter((task) => task.id !== id);
    appState.tasks = leftovers;
    saveState('tasks', appState.tasks);
  }


  toggleChecked(id){
let task = appState.tasks.find(task =>task.id == id)
if (!task) {
  throw new Error('Bad ID')
}

task.checked = !task.checked
Pop.toast('Good Job! 👍 ', "success", "top-end", 1000)
appState.emit('tasks')
saveState('tasks', appState.tasks)
  }
}
export const tasksService = new TasksService();
