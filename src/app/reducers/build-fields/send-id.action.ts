import { createAction, props } from "@ngrx/store";


export const sendCredentials = createAction('[FieldStyle] click', props<{
    id: number,
    name: string
}>()
);
