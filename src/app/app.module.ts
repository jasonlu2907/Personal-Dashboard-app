import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ADDITIONAL COMPONENTS
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { CheckListComponent } from './check-list/check-list.component';
import { BookmarksTitleComponent } from './bookmarks/bookmarks-title/bookmarks-title.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    CheckListComponent,
    BookmarksTitleComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
