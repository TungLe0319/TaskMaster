import { appState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/Store.js";

class ListsService{

 

  createList(newList){
let list = new List(newList)
appState.lists = [list, ...appState.lists]
// console.log('createList, List Service',appState.lists);
saveState('lists', appState.lists)
  }



//   toggleCompleted(id){
// let list = appState.lists.find(list => list.id == id)

// if (!list) {
//   throw new Error('Bad ID')
// }

// list.completed = !list.completed
// appState.emit('lists')
// saveState('lists', appState.lists)


//   }
}


export  const listsService = new ListsService()