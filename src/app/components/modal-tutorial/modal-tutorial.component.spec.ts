import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTutorialComponent } from './modal-tutorial.component';

describe('ModalTutorialComponent', () => {
  let component: ModalTutorialComponent;
  let fixture: ComponentFixture<ModalTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
