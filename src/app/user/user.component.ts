import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;//creating a type for user
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();//you can explicitly specify the type through <string>
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
