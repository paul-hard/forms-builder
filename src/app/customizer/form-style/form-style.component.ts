import { Component, OnInit } from '@angular/core';

interface ICastomizeForm {
  heading: string,
  formStyle: {
    label: string,
    textColor: string,
    bgColor: string,
    borderType: string[],
    borderColor: string,

  }
}
interface IFormStyle {
  formLabel: string,
  textColor: string,
  bgColor: string,
  selectBorder: string,
  borderColor: string
}

@Component({
  selector: 'app-form-style',
  templateUrl: './form-style.component.html',
  styleUrls: ['./form-style.component.scss']
})
export class FormStyleComponent implements OnInit {

  formGeneralStyles: Array<ICastomizeForm> = []
  formStyle: Array<ICastomizeForm> = [
    {
      heading: 'Form Style',
      formStyle: {
        label: "",
        textColor: "",
        bgColor: "",
        borderType: ['none', 'solid', 'dotted', 'dashed', 'double'],
        borderColor: ""
      }
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(event: IFormStyle) {
    this.formGeneralStyles = this.formStyle.map(item => {
      return {
        ...item, formStyle: {
          label: event.formLabel,
          textColor: event.textColor,
          bgColor: event.bgColor,
          borderType: ['solid', 'dotted', 'dashed'],
          borderColor: event.borderColor
        }
      }
    })
    console.log(event);
  }

}
