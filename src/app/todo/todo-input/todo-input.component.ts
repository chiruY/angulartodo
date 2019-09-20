import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
  //encapsulation: ViewEncapsulation.None,
})
export class TodoInputComponent implements OnInit {

  ngOnInit() {
  }
//constructor(private _snackBar: MatSnackBar) {}
constructor(private todo: TodoService) { }

  //openSnackBar(message:string) {
    //this._snackBar.open(message+" Inserted Successfully","Close", {
      //duration: 4000,
    //});
  //}
  addItem(item){
    if(item === '') {
      return
    }
    this.todo.addItem(item)
  }
}