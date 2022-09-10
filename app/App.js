

import { ListsController } from "./Controllers/ListsController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { Pop } from "./Utils/Pop.js";

class App {
listsController = new ListsController()
tasksController = new TasksController()
pop = new Pop()



}

window["app"] = new App();
