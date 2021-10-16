import {useEffect} from "react"

import { AlertColor } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showSnackbar, closeSnackbar } from "../redux/actions/snackbar"
import { RootState } from "../redux/store";

type Value = {
    severity: AlertColor,
    value: string | null
}

const useSnackbarMessages = (values : Value[]) => {

    const dispatch = useDispatch()
    const open = useSelector((state : RootState) => state.snackbar.open)

    useEffect(() => {

        let nullCount : number = 0

        values.forEach((item : Value) => {

            if(item.value){

                dispatch(showSnackbar(item.value, item.severity))
            } else {

                nullCount++
            }

        })

        if( nullCount === values.length && open) dispatch(closeSnackbar())
    

       
    }, [dispatch, values, open ])

}

export default useSnackbarMessages