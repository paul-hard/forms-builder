import { createReducer, on } from "@ngrx/store";
import { customizeForm } from "./customize-form.actions";
import { IFormStyle } from "../interfaces";



export const initialState: Array<IFormStyle> = [{
    formLabel: "",
    textColor: "",
    bgColor: "",
    selectBorder: "",
    borderColor: "",

}]

export const customizeFormReducer = createReducer(
    initialState,
    on(customizeForm, (state, action) => {
        console.log(action);
        return {
            ...state,
            formLabel: action.formLabel,
            textColor: action.textColor,
            bgColor: action.bgColor,
            selectBorder: action.selectBorder,
            borderColor: action.borderColor,

        }

    })
)
