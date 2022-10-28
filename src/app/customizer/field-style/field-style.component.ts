import { Component, OnInit } from '@angular/core';

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
export class FieldStyleComponent implements OnInit {

  fieldStyle: Array<ICastomizeField> = [
    {
      heading: 'Field Style',
      fieldStyle: {
        element: ""
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
