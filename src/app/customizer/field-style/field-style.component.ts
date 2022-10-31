import { Component } from '@angular/core';

interface ICastomizeField {
  heading: string,
  fieldStyle: {
    element: {
    }
  }
}

@Component({
  selector: 'app-field-style',
  templateUrl: './field-style.component.html',
  styleUrls: ['./field-style.component.scss']
})

export class FieldStyleComponent {

  public fieldStyle: Array<ICastomizeField> = [
    {
      heading: 'Field Style',
      fieldStyle: {
        element: ""
      }
    }
  ]

  constructor() { }

}
