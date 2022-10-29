import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

interface IFormStyle {
  formLabel: string,
  textColor: string,
  bgColor: string,
  borderType: string,
  borderColor: string
}

interface IElements {
  element: string,
  html?: string,
  placeholder?: string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formLabel: string = "Form Label"
  formElements: Array<IElements> = []
  formGeneralStyles: Array<IFormStyle> = []; //have to recive data
  tempData: any; // temporary for testing porps

  constructor(private store: Store<{ customFormStyle: { customFormStyle: IFormStyle } }>) { }

  ngOnInit(): void {
    this.store.select('customFormStyle').subscribe(data => {
      console.log(data.customFormStyle) //recive undefined
      this.tempData = data;
    })
  }

}
