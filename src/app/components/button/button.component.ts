import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label: string = ''
  @Input() style: any = null
  @Input() type:  'primary' | 'secondary' = 'primary'
  click: EventEmitter<any> = new EventEmitter();

  onClick(event: any){
    this.click.emit(event);
  }

}
