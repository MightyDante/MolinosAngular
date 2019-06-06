import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNoPassingComponent } from './modal-no-passing.component';

describe('ModalNoPassingComponent', () => {
  let component: ModalNoPassingComponent;
  let fixture: ComponentFixture<ModalNoPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNoPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNoPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
