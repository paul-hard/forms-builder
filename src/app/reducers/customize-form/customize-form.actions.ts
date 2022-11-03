import { createAction, props } from "@ngrx/store";


export const customizeForm = createAction('[Customizer] takeCustomFormStyle ', props<{
    formLabel: string,
    textColor: string,
    bgColor: string,
    borderType: string,
    borderColor: string
}>()
);

