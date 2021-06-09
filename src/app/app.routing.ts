import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CheckListComponent } from './check-list/check-list.component';
import { TodosComponent } from './todos/todos.component';

const appRoutes: Routes = [
    { path: 'bookmarks', component: BookmarksComponent},
    { path: 'todos', component: TodosComponent},
    { path: 'checked', component: CheckListComponent},
    { path: '', pathMatch: 'full', redirectTo: 'all'}
];
export const routing = RouterModule.forRoot(appRoutes);