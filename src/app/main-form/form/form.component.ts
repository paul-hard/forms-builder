import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

import { IFormStyle, IElements } from '../../interfaces/global.interfaces'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  public formGeneralStyles: IFormStyle = {
    formLabel: "",
    textColor: "",
    bgColor: "",
    borderType: "",
    borderColor: ""
  };

  public recivedElements: IElements[] = [];

  constructor(private store: Store<{ customFormStyle: IFormStyle }>) { }

  ngOnInit(): void {
    this.store.select('customFormStyle').subscribe(data => {
      this.formGeneralStyles = {
        ...data,
        formLabel: data.formLabel,
        textColor: data.textColor,
        bgColor: data.bgColor,
        borderType: data.borderType,
        borderColor: data.borderColor
      }
    })
  }

  drop(event: CdkDragDrop<IElements[]>): void {

    if (event.previousContainer === event.container) {
      return moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    copyArrayItem(
      event.previousContainer.data,
      this.recivedElements = event.container.data.map(item => {
        return { ...item, id: item.id++ }
      }),
      event.previousIndex,
      event.currentIndex,
    )
  }

}

//item.id++
//Math.random().toString(16).slice(2)

