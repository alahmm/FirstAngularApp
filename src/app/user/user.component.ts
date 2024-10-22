import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';//Input is a decorator and input is a special function for signals

type User = {
  id: string,
  avatar: string,
  name: string
};
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;//creating a type for user
  @Output() select = new EventEmitter();//you can explicitly specify the type through <string>
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
