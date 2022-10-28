import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CustomizerComponent } from './customizer/customizer/customizer.component';
import { FormStyleComponent } from './customizer/form-style/form-style.component';
import { FieldStyleComponent } from './customizer/field-style/field-style.component';
import { HeaderComponent } from './header/header/header.component';
import { FormComponent } from './main-form/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    CustomizerComponent,
    FormStyleComponent,
    FieldStyleComponent,
    HeaderComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
