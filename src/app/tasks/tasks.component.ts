import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';

interface enteredTask{title: string, summary: string, dueDate: string}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;//? to say that might not be set or we can use | undefined
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTask() {
    return this.tasks.filter(task => task.userId == this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;

  }

  onCancelTask() {
    this.isAddingTask = false;
  }
  nextId = this.tasks.length + 1;

  onSubmitTask(enteredTask: enteredTask) {
    this.tasks.push(//or use unshift method to add the task at the beginning of the array
      {
        id: 'u' + this.nextId,
        userId: this.userId,
        title: enteredTask.title,
        summary: enteredTask.summary,
        dueDate: enteredTask.dueDate
      }
    )
    this.isAddingTask = false;
  }
}
