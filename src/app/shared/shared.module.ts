import {NgModule} from '@angular/core';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent] //to make the CardComponent available by all the Components that using it
})
export class SharedModule {}
