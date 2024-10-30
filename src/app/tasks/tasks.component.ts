import {Component, Input} from '@angular/core';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;//? to say that might not be set or we can use | undefined
  isAddingTask = false;
  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;

  }

  onCloseTask() {
    this.isAddingTask = false;
  }
}
