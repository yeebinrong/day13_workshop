import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() addNewTask = new EventEmitter<Object>();

  todoForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      description: this.fb.control('', [Validators.required]),
      priority: this.fb.control(null, [Validators.required]),
      date: this.fb.control(null, [Validators.required])
    });
  }

  processForm (form) {
    const todayDate = new Date ()
    if (this.todoForm.value.date > todayDate) {
      console.info(todayDate);
      console.info(this.todoForm.value);
      this.addNewTask.next(this.todoForm.value);
      form.reset();
    } else {
      alert("You cannot add a task with a due date that is in the past!")
      form.reset();
    }
  }
}
