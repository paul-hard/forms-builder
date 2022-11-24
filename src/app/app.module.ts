import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'; // Angular CLI environment

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { CustomizerComponent } from './customizer/customizer/customizer.component';
import { FormStyleComponent } from './customizer/form-style/form-style.component';
import { FieldStyleComponent } from './customizer/field-style/field-style.component';
import { HeaderComponent } from './header/header/header.component';
import { FormComponent } from './main-form/form/form.component';
import { FormElementsComponent } from './main-form/form-elements/form-elements.component'

import { reducers } from './reducers'


@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    CustomizerComponent,
    FormStyleComponent,
    FieldStyleComponent,
    HeaderComponent,
    FormComponent,
    FormElementsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkAccordionModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//{ fieldId: sendIdReducer }
// { customFormStyle: customizeFormReducer }