import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TasksService)
  onCloseTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    },
      this.userId)
    this.close.emit();
  }
}
