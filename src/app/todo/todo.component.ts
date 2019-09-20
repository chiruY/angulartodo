import { Component, OnInit } from '@angular/core';
import { Todo } from  "/home/bipalbika/Bipal/TODO/src/app/todo/todo.model";
import { TodoService } from './todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private todo: TodoService) { }
  

  ngOnInit() {
    this.todoList = this.todo.todolist
  }

  todoList: Todo[] = []


}
