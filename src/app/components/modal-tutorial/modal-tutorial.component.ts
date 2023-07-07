import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-tutorial',
  templateUrl: './modal-tutorial.component.html',
  styleUrls: ['./modal-tutorial.component.scss']
})
export class ModalTutorialComponent {
  constructor(public modalRef: MdbModalRef<ModalTutorialComponent>) { }


  step: number = 0;
  steps() {
    return this.step;
  }

  nextStep() {
    this.step++;
    if(this.step === 3)
    {
      this.close();
    }
  }

  close(): void {
    const closeMessage = 'Modal closed';
    console.log(closeMessage)
    this.modalRef.close('closed')
  }

  
}
