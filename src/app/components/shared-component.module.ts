import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { ModalTutorialComponent } from './modal-tutorial/modal-tutorial.component';
import { ModalKnowWordComponent } from './modal-know-word/modal-know-word.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ButtonComponent, ModalTutorialComponent, ModalKnowWordComponent],
    exports: [ButtonComponent],
  })
  export class SharedComponentModule { }