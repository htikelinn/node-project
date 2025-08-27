import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./todo-list/todo-list";
import { catchError, from, map, of, retry, throwError } from 'rxjs';
import { Home } from "./home/home";
import { HeaderComponent } from "./header-component/header-component";

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('todo-ng');
  /*
  1. replace error with catch error
  2. rethrow error
  3. retry error
  */

  ngOnOinit(): void {
    const stream$ = from(['5','10','6','Hello','2']);
    stream$.pipe(
     map(value =>{
      if (isNaN(value as any)){
        throw new Error('Not a number');
      }
      return parseInt(value);
     }), catchError(err => {
      retry(2);
      console.log('Catch error',err);
      // return of();
      return throwError(() => err);
     })
    )
    .subscribe({
      next: value => console.log('Value Emitted', value),
      error: err => console.log('Error occured',err),
      complete: () => console.log('Stream completed')
    })
  }
}
