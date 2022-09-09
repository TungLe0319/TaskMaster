import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(data){
this.id = generateId()
this.listId = data.listId
this.name = data.name
this.amount = data.amount
  }


  createTask(){
    this.amount++
  }

// ADD A COOL EFFECT FOR WHEN A NEW TASK IS ADDED AND REMOVED
  get TaskTemplate(){
    return /*html*/ `
    <li
    class="group-list-item p-1 ms-3 d-flex justify-content-between align-items-center"
  >
    <input type="checkbox" class="" />
    <p >${this.name}</p>
   
    <i class="mdi mdi-trash-can me-3 fs-4 selectable" onclick="app.tasksController.removeTask('${this.id}')" title="Remove Task"></i>
  </li>
  
    
    `
  }
}