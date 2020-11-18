import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day13workshop';
  
  todoList = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addTodo (values) {

    this.todoList.push(values);
    console.log("todogroup " + this.todoList[0]);
  }
}
