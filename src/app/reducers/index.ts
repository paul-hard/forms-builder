import { ActionReducerMap } from "@ngrx/store";

import { customizeFormReducer } from '../reducers/customize-form/customize-form.reducer';
import { sendIdReducer } from '../reducers/build-fields/send-id.reducer';
import { customizeFieldReducer } from '../reducers/customize-fields/customize-fields.reducer'

import { IElementCredential, IFormStyle, IFieldStyle } from '../interfaces/global.interfaces';




interface AppState {
    customFormStyle: IFormStyle,
    fieldId: IElementCredential,
    customFieldStyle: IFieldStyle,
}

export const reducers: ActionReducerMap<AppState> = {
    customFormStyle: customizeFormReducer,
    fieldId: sendIdReducer,
    customFieldStyle: customizeFieldReducer,
};
