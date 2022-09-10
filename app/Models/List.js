import { appState } from '../AppState.js';
import { ListsController } from '../Controllers/ListsController.js';
import { listsService } from '../Services/ListsService.js';
import { generateId } from '../Utils/generateId.js';
import { Task } from './Task.js';

export class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;

    this.color = data.color;
    this.completed = data.completed || false;
  }

  get ListTemplate() {
    return /*html */ `
    
    <div class="col-md-4 mt-5 mx-2 " >
    <div class=" p-2 rounded-top"  style="background-color:${this.color};"></div>
    <div class="bgCustom1 rounded-bottom" id="accordionExample" >
    <div class="accordion-item rounded">
      
     <div class="p-1 ms-3 d-flex justify-content-between">
  
     <i class="fs-4 mdi mdi-tab-remove rounded text-danger selectable" onclick="app.listsController.removeList('${this.id}')"></i>
     <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">HI</button>
     <span class="d-flex align-items-center">
     ${this.name}
     </span>
     <button class=" bg-dark  text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}" aria-expanded="true" aria-controls="collapseOne"><i class="mdi mdi-arrow-collapse"></i></button>
     
     </div>
     <div class="d-flex justify-content-center my-1"><span class="">${this.CheckedTasks.length}</span>/${this.Tasks.length}</div>
      
    
      <div id="collapse${this.id}" class="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body bg-dark rounded-bottom" >
         ${this.TaskTemplate}
          <div class="d-flex justify-content-center rounded">

<form onsubmit="app.tasksController.createTask('${this.id}')" >
<div class="d-flex  ">
  <div class="p-1 d-flex mb-2  ">
    <input class="form-control-plaintext text-light " type="text" required minlength="2" name="name" placeholder="Add Task..."/>
    <label for="name" class="visually-hidden">Name</label>
    <button type="submit" class="btn btn-light text-dark " title="Add Item">+</button>
  </div>
  </div>
  </form>
  
  
  </div>
  
        </div>
      </div>
    </div>
   
  
  </div>
  </div>

    `;
  }

  get TaskTemplate() {
    let template = '';
    this.Tasks.forEach((task) => (template += task.TaskTemplate));
    return template;
  }

  get Tasks() {
    let tasks = appState.tasks.filter((task) => task.listId == this.id);
    return tasks;
  }
  get CheckedTasks(){
let checked = appState.tasks.filter(task => task.checked == true)
return checked
  }


  get ListCompleted(){

    if (this.Tasks.length == this.CheckedTasks.length) {
      this.completed = true
      console.log(this.completed);
    }
    return
  }
}

/**
 * 
 *    ${this.ListCompleted ? '': '<i class="mdi mdi-picture-in-picture-top-right fs-1"></i>'}
 */