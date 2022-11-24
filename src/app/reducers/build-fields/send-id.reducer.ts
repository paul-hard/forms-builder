import { createReducer, on } from '@ngrx/store';

import { sendCredentials } from '../build-fields/send-id.action';
import { IElementCredential } from '../../interfaces/global.interfaces'

const initialState: IElementCredential = {
    id: 0,
    name: ""
}

export const sendIdReducer = createReducer(
    initialState,
    on(sendCredentials, (state, action) => {
        return {
            ...state,
            id: action.id,
            name: action.name
        }
    })
)