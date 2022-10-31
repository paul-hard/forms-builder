import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customizeForm } from 'src/app/reducers/customize-form.actions';

export interface IFormStyle {
  formLabel: string,
  textColor: string,
  bgColor: string,
  borderType: string,
  borderColor: string
}

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {



  constructor(private store: Store<{ customFormStyle: { customFormStyle: IFormStyle } }>) { }


  ngOnInit(): void {


  }

  takeCustomFormStyle(event: IFormStyle) {
    this.store.dispatch(customizeForm({
      formLabel: event.formLabel,
      textColor: event.textColor,
      bgColor: event.bgColor,
      selectBorder: event.borderType,
      borderColor: event.borderColor,
    }))
  }



}
