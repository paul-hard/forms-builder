import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { sendCredentials } from '../../reducers/build-fields/send-id.action';
import { IElements, IElementCredential, IFieldStyle } from '../../interfaces/global.interfaces'



@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  @Input() elements: Array<IElements> = []

  public fieldStyles: IFieldStyle = {
    label: "",
    placeholder: "",
    width: "",
    height: "",
    fz: "",
    fw: "",
    color: "",
    borderStyle: "",
    id: 0,
    option: []
  }



  constructor(private store: Store<{ fieldCredentials: IElementCredential, customFieldStyle: IFieldStyle }>) { }


  ngOnInit(): void {
    this.store.select('customFieldStyle').subscribe(data => {
      console.log(data.id);
      this.fieldStyles = {
        ...data,
        label: data.label,
        placeholder: data.placeholder,
        width: data.width,
        height: data.height,
        fz: data.fz,
        fw: data.fw,
        color: data.color,
        borderStyle: data.borderStyle,
        id: data.id,
        option: []
      }
    })
    console.log(this.fieldStyles.id);
  }

  onClick(event: any) {
    console.log(event);

    this.store.dispatch(sendCredentials({
      id: event.id,
      name: event.name
    }))
  }

}

