import {Component, EventEmitter, Input, Output} from '@angular/core';

import {type Task} from './task.model'
import {take} from 'rxjs';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();//create communication with tasks, string type like the id i am emitting
  @Output() add = new EventEmitter<string>();//create communication with tasks, string type like the id i am emitting
  onCompleteTask() {
    this.complete.emit(this.task.id);//the property should emit a new value and share the id with the parent component
  }
  // onAddTask() {
  //   this.add.emit(this.task.userId);//the property should emit a new value and share the id with the parent component
  // }
}
