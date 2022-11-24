import { Component, } from '@angular/core';

import { IElements } from '../interfaces/global.interfaces';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent {

  public elements: Array<IElements> = [
    {
      element: 'Input',
      id: 1
    },
    {
      element: 'Textarea',
      id: 100
    },
    {
      element: 'Button',
      id: 200
    },
    {
      element: 'Checkbox',
      id: 300
    },
    {
      element: 'Select',
      id: 400
    },
  ];


  constructor() { }

}
