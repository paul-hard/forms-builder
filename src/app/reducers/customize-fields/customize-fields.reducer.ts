import { createReducer, on } from '@ngrx/store';
import { customizeField } from './customize-fields.action';

import { IFieldStyle } from '../../interfaces/global.interfaces'

const initialState: IFieldStyle = {
    label: "",
    placeholder: "",
    width: "",
    height: "",
    fz: "",
    fw: "",
    color: "",
    borderStyle: "",
    option: [],
    id: 0

}

export const customizeFieldReducer = createReducer(
    initialState,
    on(customizeField, (state, action) => {
        console.log(state);
        console.log(action);
        return {
            ...state,
            label: action.label,
            placeholder: action.placeholder,
            width: action.width,
            height: action.height,
            fz: action.fz,
            fw: action.fw,
            color: action.color,
            borderStyle: action.borderStyle,
            option: action.option,
            id: action.id
        }
    })
)
