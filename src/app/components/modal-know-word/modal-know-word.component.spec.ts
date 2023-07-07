import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKnowWordComponent } from './modal-know-word.component';

describe('ModalKnowWordComponent', () => {
  let component: ModalKnowWordComponent;
  let fixture: ComponentFixture<ModalKnowWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalKnowWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalKnowWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
