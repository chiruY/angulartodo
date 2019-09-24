import { Injectable } from '@angular/core';
import { Todo } from  "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  todolist:Todo[]=[

  ];

  addItem(newItem){
    const newTodo:Todo={
      id:0,
      todo:newItem,
      completed:false,
      //count:0
    }
    this.todolist.push(newTodo)
    //this.todolist.count=this.todolist.;
  }
  todoCompleted(index) {
    this.todolist[index].completed = !this.todolist[index].completed
  }

  deleteItem(index) {
    this.todolist = this.todolist.filter( item => item.id !== index)
  }
  
}
