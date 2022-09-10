import { appState } from '../AppState.js';
import { ListsController } from "../Controllers/ListsController.js";
import { listsService } from "../Services/ListsService.js";
import { generateId } from '../Utils/generateId.js';
import { Task } from './Task.js';

export class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.type = data.type;
    this.color =data.color 
    this.completed = data.completed || false;
  }

  get ListTemplate() {
    return /*html */ `
    
    <div class="col-md-4 mt-5 mx-2 " >
    <div class="accordion " id="accordionExample">
    <div class="accordion-item">
      
     <div class="p-1 ms-3 d-flex justify-content-between">
     <i class="fs-4 mdi mdi-tab-remove rounded text-danger selectable" onclick="app.listsController.removeList('${this.id}')"></i>
     <span class="d-flex align-items-center">
     ${this.name}
     </span>
     <button class="accordion-button w-25 " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}" aria-expanded="true" aria-controls="collapseOne"></button>
     
     </div>
      
    
      <div id="collapse${this.id}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body bg-dark text-light rounded">
         ${this.TaskTemplate}
          <div class="d-flex justify-content-center cardlights rounded-bottom">

<form onsubmit="app.tasksController.createTask('${this.id}')" >
<div class="d-flex ">
  <div class="p-1 d-flex mb-2 ">
    <input class="form-control-plaintext text-light" type="text" required minlength="2" name="name" placeholder="Add Task..."/>
    <label for="name" class="visually-hidden">Name</label>
    <button type="submit" class="btn btn-primary" title="Add Item">+</button>
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
  
}


/**
 * 
  <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
               ${this.TaskTemplate}
                <div class="d-flex justify-content-center cardlights rounded-bottom">
      
      <form onsubmit="app.tasksController.createTask('${this.id}')" >
      <div class="d-flex ">
        <div class="p-1 d-flex mb-2 ">
          <input class="form-control-plaintext text-light" type="text" required minlength="2" name="name" placeholder="Add Task..."/>
          <label for="name" class="visually-hidden">Name</label>
          <button type="submit" class="btn btn-primary" title="Add Item">+</button>
        </div>
       
      </div>
    </form>


      </div>
              </div>
            </div>
          </div>
         
        
        </div>
 */




/**
 * 
 *  <div class="card bgCustom1 elevation-1">
    <div class = "mt-1 ms-2">
    <i class="fs-4 mdi mdi-tab-remove m-2 p-1 rounded selectable text-danger " onclick="app.listsController.removeList('${this.id}')"></i>
    </div>
      <div class="text-center  rounded">
        <h6 class="">${this.type} </h6>
        <h6 class="">${this.name} </h6>
        <p>/${this.Tasks.length}</p>
        <div class="text-center rounded">
         
        </div>
      </div>
    </div>
    <div class="bg-dark text-light rounded elevation-1">
      <ul class="group-list bg-dark p-1 cardlights">
  ${this.TaskTemplate}
      </ul>
      <div class="d-flex justify-content-center cardlights rounded-bottom">
      
      <form onsubmit="app.tasksController.createTask('${this.id}')" >
      <div class="d-flex ">
        <div class="p-1 d-flex mb-2 ">
          <input class="form-control-plaintext text-light" type="text" required minlength="2" name="name" placeholder="Add Task..."/>
          <label for="name" class="visually-hidden">Name</label>
          <button type="submit" class="btn btn-primary" title="Add Item">+</button>
        </div>
       
      </div>
    </form>


      </div>
    </div>
 */