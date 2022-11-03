import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customizeField } from 'src/app/reducers/customize-fields/customize-fields.action';

import { customizeForm } from 'src/app/reducers/customize-form/customize-form.actions';
import { IFormStyle, IFieldStyle } from '../../interfaces/global.interfaces'


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent {

  constructor(
    private store: Store<{ customFormStyle: IFormStyle, customFieldStyle: IFieldStyle }>,
  ) { }

  takeCustomFormStyle(event: IFormStyle) {
    this.store.dispatch(customizeForm({
      formLabel: event.formLabel,
      textColor: event.textColor,
      bgColor: event.bgColor,
      borderType: event.borderType,
      borderColor: event.borderColor,
    }))
  }

  takeCustomFieldStyle(event: IFieldStyle) {
    console.log(event.color)
    this.store.dispatch(customizeField({
      label: event.label,
      placeholder: event.placeholder,
      width: event.width,
      height: event.height,
      fz: event.fz,
      fw: event.fw,
      color: event.color,
      borderStyle: event.borderStyle,
      option: event.option,
      id: event.id
    }))
  }
}
