import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { customizeForm } from 'src/app/reducers/customize-form.actions';
import { IFormStyle } from '../../interfaces/global.interfaces'


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent {

  constructor(private store: Store<{ customFormStyle: { customFormStyle: IFormStyle } }>) { }

  takeCustomFormStyle(event: IFormStyle) {
    this.store.dispatch(customizeForm({
      formLabel: event.formLabel,
      textColor: event.textColor,
      bgColor: event.bgColor,
      borderType: event.borderType,
      borderColor: event.borderColor,
    }))
  }

}
