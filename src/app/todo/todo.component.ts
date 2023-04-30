import { Component } from '@angular/core';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = "";


  saveTodo(): void {
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo
      todo.id = new Date().getTime().toString()
      todo.isComplated = true
      this.todos.push(todo)
      this.newTodo = ""
      console.log('todo', todo)
    } else {
      alert("Please enter a new Todo")
    }
  }

  done(id:number) {
    this.todos[id].isComplated = !this.todos[id].isComplated
  }

  remove(id: number) {
    console.log('id', id)
    this.todos = this.todos.filter((todo, index) => id !== index) ;
  }

}
