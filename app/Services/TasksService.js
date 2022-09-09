import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js";

class TasksService{
  constructor(){

  }


  createTask(newTask){
let task = new Task(newTask)
appState.tasks= [task,...appState.tasks]
// console.log(task);
// console.log('[CREATE_TASK TASK SERVICE]', appState.tasks);
saveState('tasks',appState.tasks)
console.log(task.amount);
  }




  removeTask(id){
    let leftovers= appState.tasks.filter(task => task.id !== id)
    appState.tasks = leftovers
    saveState('tasks', appState.tasks)
  }
}
export const tasksService =  new TasksService()