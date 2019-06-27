import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMainComponent } from './seccion-main.component';

describe('SeccionMainComponent', () => {
  let component: SeccionMainComponent;
  let fixture: ComponentFixture<SeccionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionMainComponent ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
