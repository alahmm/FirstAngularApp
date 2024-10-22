import {Component, computed, EventEmitter, Input, input, Output} from '@angular/core';//Input is a decorator and input is a special function for signals

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;  //mark this property as settable from outside, ! for seeing to typescript that this field gonna be initialized from outside
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }

}
