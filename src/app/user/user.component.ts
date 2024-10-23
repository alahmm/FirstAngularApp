import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import {User} from './user.model';
import {CardComponent} from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [
    CardComponent
  ],
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
