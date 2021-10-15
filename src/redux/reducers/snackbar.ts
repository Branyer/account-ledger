import { AlertColor } from "@mui/material";

import {SHOW_SNACKBAR, CLOSE_SNACKBAR} from "../actions/snackbar"

type Action = {
    type: string,
    message?: string,
    severity?: AlertColor | undefined
}

export type SnackbarState = {

    message: string,
    severity: AlertColor | undefined,
    open: boolean

}

const initialState = {

    message: "",
    severity: undefined,
    open: false

}

const snackbar = (state : SnackbarState = initialState, action : Action) => {

    switch(action.type) {
        case SHOW_SNACKBAR : 
            return {
                ...state,
                message: action.message,
                severity: action.severity,
                open: true
            }
        case CLOSE_SNACKBAR :
            return  {
                ...state,
                message: "",
                severity: undefined,
                open: false
            }
        default:
            return state

    }

}

export default snackbar