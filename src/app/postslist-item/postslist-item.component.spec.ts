import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostslistItemComponent } from './postslist-item.component';

describe('PostslistItemComponent', () => {
  let component: PostslistItemComponent;
  let fixture: ComponentFixture<PostslistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostslistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostslistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
