import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderListComponent } from './render-list.component';

describe('RenderListComponent', () => {
  let component: RenderListComponent;
  let fixture: ComponentFixture<RenderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
