import { Todo } from '../Todo.model';

export class TodoService {
  public todos: Todo[] = [];
  public newTodo: string = '';

  saveTodo(): void {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.id = new Date().getTime().toString();
      todo.isComplated = true;
      this.todos.push(todo);
      this.newTodo = '';
      console.log('todo', todo);
    } else {
      alert('Please enter a new Todo');
    }
  }
}
