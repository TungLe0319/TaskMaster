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
    
    <div class="col-md-3 mt-5 mx-2 wow unfocusedCard" >
    <div class=" p-2 rounded-top"  style="background-color:${this.color};"></div>
    <div class="bgCustom1 rounded-bottom"  >
    <div class="accordion-item rounded">
      
     <div class="p-1 ms-3 d-flex justify-content-between">
  
     <i class="fs-4 mdi mdi-card-remove rounded  cursor redhover " onclick="app.listsController.removeList('${this.id}')" title="Delete List"></i>
     
     <span class="d-flex align-items-center fs-5 fw-bold  border-bottom border-3 p-1" >
     ${this.name}
     </span>
     <button class=" bg-dark rounded text-light invert" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}" aria-expanded="true" aria-controls="collapseOne" title="collapse"><i class="mdi mdi-arrow-collapse"></i></button>
     
     </div>
     <div class="d-flex justify-content-center mt-1 mb-2"><span class="">
     <small class="elevation-2 p-1 rounded bgCustom2 text-light">
     ${this.CheckedTasks.length}<span class="mx-1">/</span>${this.Tasks.length}
     </small></span></div>
     
  
 </div>
    
      <div id="collapse${this.id}" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
        <div class="accordion-body bgCustom2 rounded-bottom" >
         ${this.TaskTemplate}
          <div class="d-flex justify-content-center rounded">

<form onsubmit="app.tasksController.createTask('${this.id}')" >
<div class="d-flex rounded my-1 ">
  <div class="d-flex mb-2 align-items-end">
    <input class=" form-control-plaintext text-light ms-3 border-bottom h-50 " type="text" required minlength="3" name="name" placeholder="Add task"/>
    <label for="name" class="visually-hidden">Name</label>
    <button type="submit" class="btn border-0 mt-1 " title="Add Item"><i class="mdi mdi-plus-box fs-2 invert text-light cursor" ></i></button>
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

  get List() {
    let list = appState.lists.find((list) => list.id == this.id);
    return list;
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
  get CheckedTasks() {
    let checked = appState.tasks.filter((task) => task.checked == true);
    let listCheck = checked.filter((task) => task.listId == this.id);
    return listCheck;
  }

  get ListCompleted() {
    if (this.Tasks.length == this.CheckedTasks.length) {
      this.completed = true;
      console.log(this.completed);
    }
    return;
  }
}

/**
 *
 *    ${this.ListCompleted ? '': '<i class="mdi mdi-picture-in-picture-top-right fs-1"></i>'}
 */
