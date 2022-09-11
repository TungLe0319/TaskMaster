import { appState } from '../AppState.js';
import { listsService } from '../Services/ListsService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from "../Utils/Pop.js";
import { setHTML } from '../Utils/Writer.js';

function _drawLists() {
  let template = '';
  appState.lists.forEach((list) => (template += list.ListTemplate));
  setHTML('lists', template);
}

export class ListsController {
  constructor() {
    // draw List on start
    //any Change to List.js redraws it
    appState.on('lists', _drawLists);
    appState.on('tasks', _drawLists);
    _drawLists();
  }

  createList() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let newList = getFormData(form);
      listsService.createList(newList);
      // console.log('newList form Data',newList);
      form.reset();
    } catch (error) {
      console.error('[CREATE_LIST', error);
    }
  }

  toggleCompleted(id) {
 
    listsService.toggleCompleted(id);
  }

  removeList(id){
 
if (window.confirm('Are you sure?')) {
  
  listsService.removeList(id)
}

  }
}
