import { AlertColor } from "@mui/material"

export const SHOW_SNACKBAR = "SHOW_SNACKBAR"
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR"

export const openSnackbar = (message : string , severity : AlertColor) => {
    return {
        type: SHOW_SNACKBAR,
        message,
        severity
    }
}

export const closeSnackbar = () => {
    return {
        type: SHOW_SNACKBAR,
    }
}