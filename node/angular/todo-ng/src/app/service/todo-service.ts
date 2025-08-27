import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delayWhen, Observable, retryWhen, shareReplay, tap, timer } from 'rxjs';
import { Todo } from '../../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosBehaviourSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosBehaviourSubject$.asObservable();

  http:HttpClient = inject(HttpClient);
  constructor() { 
    this.getAllTodos()
    .pipe(
      tap(todos => this.todosBehaviourSubject$.next(todos)),
      shareReplay(),
      retryWhen(errors =>{ // retrying the http request
        return errors.pipe(
          delayWhen(() => timer(5000)), // every 5s retry the http request
          tap(() => console.log('Retrying the Http Request'))
        )
      })
    )
    .subscribe();
  }

  backEnd_URL = 'http://localhost:8080/api/todos';

  private getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.backEnd_URL);
  }

  public deleteTodo(id: number) {
    return this.http.delete<void>(`${this.backEnd_URL}/${id}`)
    .pipe(
      tap(() => {
        const currentValue = this.todosBehaviourSubject$.value;
        const updateValue = currentValue.filter(todo => todo.id !== id);
        this.todosBehaviourSubject$.next(updateValue);
      })
    )
  }
  public completeTodo(id: number) {
    return this.http.put<Todo>(`${this.backEnd_URL}/${id}/complete`, {})
    .pipe(
      tap(() => {
        const currentValue = this.todosBehaviourSubject$.value;
        const updateValue = currentValue.map(todo => {
          if (todo.id === id) {
            todo.done = true;
          }
          return todo;
        });
        this.todosBehaviourSubject$.next(updateValue);
      })
    )
  }
  public uncompleteTodo(id: number) {
    return this.http.put<Todo>(`${this.backEnd_URL}/${id}/uncomplete`, {})
    .pipe(
      tap(() => {
        const currentValue = this.todosBehaviourSubject$.value;
        const updateValue = currentValue.map(todo => {
          if (todo.id === id) {
            todo.done = false;
          }
          return todo;
        });
        this.todosBehaviourSubject$.next(updateValue);
      })
    )
  }
}
