import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
//removed ----------------------------------------------------
interface IElements {
  element: string,
  html?: string,
  placeholder?: string,
}
//removed -end------------------------------------------------

//removed ----------------------------------------------------
// interface ICastomizeForm {
//   heading: string,
//   formStyle: {
//     label: string,
//     textColor: string,
//     bgColor: string,
//     borderType: string[],
//     borderColor: string,
//   }
// }
//removed -end------------------------------------------------

//removed ----------------------------------------------------
// interface ICastomizeField {
//   heading: string,
//   fieldStyle: {
//     element: {
//     }
//   }
// }
//removed -end------------------------------------------------
@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {
  //removed ----------------------------------------------------
  // formGeneralStyles: Array<ICastomizeForm> = []
  //removed -end------------------------------------------------

  //drag and drop section ---------------------------------------------------------------
  //removed ----------------------------------------------------
  formElements: Array<IElements> = []
  //removed -end------------------------------------------------

  elements: Array<IElements> = [
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

  //Accordion section ---------------------------------------------------------------
  //removed ----------------------------------------------------
  // formStyle: Array<ICastomizeForm> = [
  //   {
  //     heading: 'Form Style',
  //     formStyle: {
  //       label: "",
  //       textColor: "",
  //       bgColor: "",
  //       borderType: ['solid', 'dotted', 'dashed'],
  //       borderColor: ""
  //     }
  //   }
  // ]
  //removed -end------------------------------------------------

  //removed ----------------------------------------------------
  // fieldStyle: Array<ICastomizeField> = [
  //   {
  //     heading: 'Field Style',
  //     fieldStyle: {
  //       element: ""
  //     }
  //   }
  // ]
  //removed -end------------------------------------------------

  constructor() { }

  ngOnInit(): void {
  }

  //darag and drop method
  drop(event: CdkDragDrop<Array<IElements>>): void {
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    // this.formElements.sort() try to make custom order
    console.log(event)
  }

  //castomizer

  //removed ----------------------------------------------------
  // formSubmit(event: any) {
  //   this.formGeneralStyles = this.formStyle.map(item => {
  //     return {
  //       ...item, formStyle: {
  //         label: event.value.formLabel,
  //         textColor: event.value.textColor,
  //         bgColor: event.value.bgColor,
  //         borderType: ['solid', 'dotted', 'dashed'],
  //         borderColor: event.value.borderColor
  //       }
  //     }
  //   })
  //   console.log(event.value);
  // }
  //removed -end------------------------------------------------
}
