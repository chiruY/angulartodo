import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from "../todo.model"
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor(private todoList: TodoService) { }
 i=0;
 count=0;
  ngOnInit() {
    this.todoListItems = this.todoList.todolist
    for(this.i=0;this.i<this.todoListItems.length;this.i++){
        this.count++;
    }
  }
  todoListItems: Todo[] = []
 
  
  
  
}
