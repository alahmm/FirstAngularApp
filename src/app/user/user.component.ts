import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avatar!: string;  //mark this property as settable from outside, ! for seeing to typescript that this field gonna be initialized from outside
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {}

}
