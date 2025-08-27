import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../model/Todo';
import { TodoService } from '../service/todo-service';


@Component({
  selector: 'app-todo-details',
  imports: [CommonModule],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.scss'
})
export class TodoDetails {

  @Input()
  todos$!: Observable<Todo[]>;

  todoService = inject(TodoService);

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
    .subscribe({
      error: err => console.log(err),
      complete: () => console.log('Successfully Deleted!')
    })
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id)
    .subscribe({
      next: todo => console.log('Sucessfulley from Server',todo),
      error: err => console.log(err),
      complete: () => console.log('Successfully Completed!')
    })
  }

  uncompleteDo(id: number) {
    this.todoService.uncompleteTodo(id)
    .subscribe({
      error: err => console.log(err),
      complete: () => console.log('Successfully Uncompleted!')
    })
  }

}
