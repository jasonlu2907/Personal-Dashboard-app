import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksTitleComponent } from './bookmarks/bookmarks-title/bookmarks-title.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    NotesComponent,
    TodosComponent,
    TabsComponent,
    BookmarksTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
