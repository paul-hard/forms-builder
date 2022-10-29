import { createAction, props } from "@ngrx/store";


export const customizeForm = createAction('addNewFormStyle', props<{
    formLabel: string,
    textColor: string,
    bgColor: string,
    selectBorder: string,
    borderColor: string
}>()
);