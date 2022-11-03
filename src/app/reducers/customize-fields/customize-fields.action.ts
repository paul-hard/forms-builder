import { createAction, props } from "@ngrx/store";


export const customizeField = createAction('[Customizer] takeCustomFieldStyle ', props<{
    label: string,
    placeholder: string,
    width: string,
    height: string,
    fz: string,
    fw: string,
    color: string,
    borderStyle: string,
    id?: number,
    option?: string[]
}>()
);