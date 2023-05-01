import { Component } from '@angular/core';
import { Todo } from '../Todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(public todoService: TodoService) {}

  todos: Todo[] = this.todoService.todos;

  saveTodo = this.todoService.saveTodo;

  done(id: number) {
    this.todos[id].isComplated = !this.todos[id].isComplated;
  }

  remove(id: number) {
    console.log('id', id);
    this.todos = this.todos.filter((todo, index) => id !== index);
  }
}
