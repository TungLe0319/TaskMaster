import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { Task } from "./Task.js";

export class List{
  constructor(data){
this.id = generateId()
this.name = data.name
this.type = data.type
this.completed = data.completed || false
  }





  get ListTemplate(){
    return /*html */`
    
    <div class="col-md-4 mt-5 mx-2">
    <div class="card bg-light elevation-1">
      
      <div class="text-center  rounded">
        <h6 class="">${this.type} </h6>
        <h6 class="">${this.name} </h6>
        <p>${this.Tasks.length}</p>
        <div class="text-center rounded">
         
        </div>
      </div>
    </div>
    <div class="bg-dark text-light rounded elevation-1">
      <ul class="group-list bg-dark p-1">
  ${this.TaskTemplate}
      </ul>
      <div class="d-flex justify-content-center">
        <form onsubmit="app.tasksController.createTask('${this.id}')">

          <div class="col-auto mb-2 rounded d-flex">
          <input type="text" name="name" class="form-control-plaintext text-light p-2 opacity-50"  placeholder="Add Task.." >
          <label for="name" class="visually-hidden">AddTask</label>
         
           
            <button class="btn btn-secondary ms-3 elevation-3 " type="submit">
                  add
                  </button>
          </div>

        </form>
      </div>
    </div>
  </div>

    `
  }

get TaskTemplate(){
  let template = ''
  this.Tasks.forEach(task => template += task.TaskTemplate)
  return template
}

get Tasks(){
  let tasks = appState.tasks.filter(task => task.listId == this.id)
  return tasks
}
// get TaskCount(){
//   let total=0
//   this.Tasks.forEach(task => total += task.amount)
//   return total
// }

/**
 * 
 * <div>
      ${this.completed ?'<i class="fs-4 mdi mdi-tab-remove m-2 p-1 rounded selectable" onclick=""></i>': 'not completed'}
      </div>
 */
}