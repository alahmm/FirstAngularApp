import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {TasksModule} from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],//register all the components that needs to work together
  bootstrap: [AppComponent],//this is the root component with which i wanna start the application
  imports: [BrowserModule, SharedModule, TasksModule]//if u want to still keep these components as standalone component, , DatePipe is already included in browsermodule
//in imports we are defining modules that will be used by components in declarations
})
export class AppModule {
}
