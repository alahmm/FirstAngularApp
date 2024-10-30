import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TasksComponent} from './tasks/tasks.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],//register all the components that needs to work together
  bootstrap: [AppComponent],//this is the root component with which i wanna start the application
  imports: [HeaderComponent, UserComponent, TasksComponent, BrowserModule]//if u want to still keep these components as standalone component
})
export class AppModule {}
