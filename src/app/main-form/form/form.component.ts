import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IFormStyle, IElements } from '../../interfaces/global.interfaces'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  public formElements: Array<IElements> = [];

  public formGeneralStyles: IFormStyle = {
    formLabel: "",
    textColor: "",
    bgColor: "",
    borderType: "",
    borderColor: ""
  };

  constructor(private store: Store<{ customFormStyle: IFormStyle }>) { }

  ngOnInit(): void {
    this.store.select('customFormStyle').subscribe(data => {
      console.log(data)
      this.formGeneralStyles = {
        ...data,
        formLabel: data.formLabel,
        textColor: data.textColor,
        bgColor: data.bgColor,
        borderType: data.borderType,
        borderColor: data.borderColor
      }
    })
  }

}
