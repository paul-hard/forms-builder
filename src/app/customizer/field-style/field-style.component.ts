import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { customizeField } from 'src/app/reducers/customize-fields/customize-fields.action';

import { IElementCredential, IFieldStyle } from '../../interfaces/global.interfaces';

interface ICastomizeField {
  heading: string,
  fieldStyle: {
    label: string,
    placeholder: string,
    width: string,
    height: string,
    fz: string,
    fw: number[],
    color: string,
    borderStyle: string[],
    id?: number
  }
}

@Component({
  selector: 'app-field-style',
  templateUrl: './field-style.component.html',
  styleUrls: ['./field-style.component.scss']
})

export class FieldStyleComponent implements OnInit {

  public fieldStyle: Array<ICastomizeField> = [
    {
      heading: 'Field Style',
      fieldStyle: {
        label: "",
        placeholder: "",
        width: "",
        height: "",
        fz: "",
        fw: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        color: "",
        borderStyle: ['none', 'solid', 'dotted', 'dashed', 'double'],
        id: 0
      }
    }
  ]

  public fieldCredentials: IElementCredential = {
    id: 0,
    name: ""
  }

  @Output() customizeField: EventEmitter<IFieldStyle> = new EventEmitter();

  constructor(private store: Store<{ fieldId: IElementCredential }>) {
  }

  ngOnInit(): void {
    this.store.select('fieldId').subscribe(data => {
      this.fieldCredentials = {
        ...data,
        id: data.id,
        name: data.name
      }

    })
  }

  fieldSubmit(event: IFieldStyle) {
    console.log(event.color)
    this.customizeField.emit({
      label: event.label,
      placeholder: event.placeholder,
      width: event.width,
      height: event.height,
      fz: event.fz,
      fw: event.fw,
      color: event.color,
      borderStyle: event.borderStyle,
      option: event.option,
      id: this.fieldCredentials.id
    })

  }

  delete() {
    console.log("delete element")
  }

  addOption(event: any) {
    console.log(event);
    console.log("push userInput to array");
  }

}
