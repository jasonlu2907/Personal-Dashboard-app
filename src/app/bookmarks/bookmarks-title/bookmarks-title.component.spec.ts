import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksTitleComponent } from './bookmarks-title.component';

describe('BookmarksTitleComponent', () => {
  let component: BookmarksTitleComponent;
  let fixture: ComponentFixture<BookmarksTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
