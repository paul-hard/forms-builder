import { createReducer, on } from '@ngrx/store';
import { customizeForm } from './customize-form.actions';

import { IFormStyle } from '../interfaces/global.interfaces'

const initialState: IFormStyle = {
    formLabel: "",
    textColor: "",
    bgColor: "",
    borderType: "",
    borderColor: "",
}

export const customizeFormReducer = createReducer(
    initialState,
    on(customizeForm, (state, action) => {
        console.log(state);
        console.log(action);
        return {
            ...state,
            formLabel: action.formLabel,
            textColor: action.textColor,
            bgColor: action.bgColor,
            borderType: action.borderType,
            borderColor: action.borderColor,
        }
    })
)
