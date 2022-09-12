import { TasksController } from '../Controllers/TasksController.js';
import { tasksService } from '../Services/TasksService.js';
import { generateId } from '../Utils/generateId.js';
import { Pop } from "../Utils/Pop.js";

export class Task {
  constructor(data) {
    // I DIDN't HAVE the data.id || and whenever i refreshed the page it generated a new Id and when i retrieved it from local storage it changed the listId
    this.id = data.id || generateId();
    this.listId = data.listId;
    this.name = data.name;
    this.checked = data.checked || false;



  
  }

  // ADD A COOL EFFECT FOR WHEN A NEW TASK IS ADDED AND REMOVED
  get TaskTemplate() {
    return /*html*/ `
    <li
    class="group-list-item p-1  d-flex  text-light selectable justify-content-between align-items-center  " 
    style="background-color: ${this.checked? '#0a111596': ''};">
  <input onchange="app.tasksController.toggleChecked('${this.id}')" class="ms-2 cursor largerCheckbox " type="checkbox" ${
    this.checked ? 'checked' : ''
  }>
    <span class="mt-3 ${this.checked? 'text-success': ''}"><p>${this.checked? '<del>' : ''}${this.name}</del></p></span>
    <p ></p>
    <i class="mdi  ${this.checked? 'mdi-thumb-up': 'mdi-trash-can'} me-3 fs-4 cursor  redhover" onclick="app.tasksController.removeTask('${
      this.id
    }')" title="Remove"></i>
   
    
  </li>
  
    
    `;
  }
}

/**
 *   <input type="checkbox" class="" ${this.checked? 'checked' : ''} />
 */
