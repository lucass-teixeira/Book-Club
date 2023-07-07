import { Component, Inject, Input } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-know-word',
  templateUrl: './modal-know-word.component.html',
  styleUrls: ['./modal-know-word.component.scss']
})
export class ModalKnowWordComponent {

  option: SaveIdontKnow  | undefined;
  data: any = 'siblings';
  constructor(public modalRef: MdbModalRef<ModalKnowWordComponent>,  private modalService: MdbModalService){
    console.log('data', this.data)
  }

  optionTxt = ''


  setOption(option: string)
  {
    if(option === 'idk')
    this.optionTxt = 'idk';
    else
    this.optionTxt = 'save';

    console.log(option);

  }

  close(): void {
    this.modalRef.close('closed')
  }
}

enum SaveIdontKnow{
  save = 'save',
  idontknow = 'idk'
}
