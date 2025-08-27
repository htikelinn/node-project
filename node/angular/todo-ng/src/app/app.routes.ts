import { Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { TodoDetails } from './todo-details/todo-details';
import { ErrorPage } from './error-page/error-page';

export const routes: Routes = [
    {
        path: '',
        component: TodoList
    },
    {
        path: 'todo-list',
        component: TodoList
    },
    {
        path: 'todo-details',
        component: TodoDetails
    },
    {
        path: '**',
        component: ErrorPage
    }
];
