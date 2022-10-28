import { Component, OnInit } from '@angular/core';

interface IElements {
  element: string,
  html?: string,
  placeholder?: string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formLabel: string = "Form Label"
  formElements: Array<IElements> = []

  constructor() { }

  ngOnInit(): void {
  }

}
