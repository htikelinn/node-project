import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { TodoService } from '../service/todo-service';
import { Todo } from '../../model/Todo';
import { CommonModule } from '@angular/common';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TodoDetails } from "../todo-details/todo-details";

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, RouterModule, TodoDetails],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList implements OnInit {

  todos: Todo[] = [];
  
  subscription!: Subscription;

  destroy$: Subject<void> = new Subject<void>();
  
  // constructor(private todoservice: todoservice) { }

  todoService = inject(TodoService);

  todos$:Observable<Todo[]> = this.todoService.todos$;

  ngOnInit(): void {
    // this.subscription = this.todoservice.getalltodos()
    //   .pipe(
    //     takeuntil(this.destroy$)
    //   )
    //   .subscribe({
    //     next: todos => this.todos = todos,
    //     error: err => console.log(err),
    //     complete: () => console.log('done')
    //   })
  }
  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

}
