import { Component } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(public todoService: TodoService) {}
  newTodo: string = this.todoService.newTodo;
  saveTodo = this.todoService.saveTodo;
  todos: Todo[] = this.todoService.todos;
}
