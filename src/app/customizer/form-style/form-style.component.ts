import { Component, Output, EventEmitter } from '@angular/core';

import { IFormStyle } from '../../interfaces/global.interfaces'

interface ICastomizeForm {
  heading: string,
  formStyle: {
    label: string,
    textColor: string,
    bgColor: string,
    borderTypes: string[],
    borderColor: string,
  }
}

@Component({
  selector: 'app-form-style',
  templateUrl: './form-style.component.html',
  styleUrls: ['./form-style.component.scss']
})
export class FormStyleComponent {

  public formStyle: Array<ICastomizeForm> = [
    {
      heading: 'Form Style',
      formStyle: {
        label: "",
        textColor: "",
        bgColor: "",
        borderTypes: ['none', 'solid', 'dotted', 'dashed', 'double'],
        borderColor: ""
      }
    }
  ]

  constructor() { }

  @Output() customizeForm: EventEmitter<IFormStyle> = new EventEmitter();

  formSubmit(event: IFormStyle) {
    this.customizeForm.emit({
      formLabel: event.formLabel,
      textColor: event.textColor,
      bgColor: event.bgColor,
      borderType: event.borderType,
      borderColor: event.borderColor
    })
  }


}


// formSubmit(event: IFormStyle) {
//   this.formGeneralStyles = this.formStyle.map(item => {
//     return {
//       ...item, formStyle: {
//         label: event.formLabel,
//         textColor: event.textColor,
//         bgColor: event.bgColor,
//         borderType: ['solid', 'dotted', 'dashed'],
//         borderColor: event.borderColor
//       }
//     }
//   })
//   console.log(event);
// }