import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './form/form.component';
import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
