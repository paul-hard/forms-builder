import { Component, } from '@angular/core';

interface IElements {
  element: string,
  html?: string,
  placeholder?: string,
}

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent {

  public elements: Array<IElements> = [
    {
      element: 'Input',
      html: '<input>'
    },
    {
      element: 'Textarea',
      html: '<textarea></texarea>'
    },
    {
      element: 'Button',
      html: '<button></button>'
    },
    {
      element: 'Checkbox',
      html: '<input>'
    },
    {
      element: 'Select',
      html: '<select></select>'
    },
  ];


  constructor() { }

}
