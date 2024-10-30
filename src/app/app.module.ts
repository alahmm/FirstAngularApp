import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TasksComponent} from './tasks/tasks.component';
import {BrowserModule} from '@angular/platform-browser';
import {CardComponent} from './shared/card/card.component';
import {TaskComponent} from './tasks/task/task.component';
import {NewTaskComponent} from './tasks/new-task/new-task.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TasksComponent, TaskComponent, NewTaskComponent],//register all the components that needs to work together
  bootstrap: [AppComponent],//this is the root component with which i wanna start the application
  imports: [BrowserModule, FormsModule]//if u want to still keep these components as standalone component, , DatePipe is already included in browsermodule
})
export class AppModule {
}
