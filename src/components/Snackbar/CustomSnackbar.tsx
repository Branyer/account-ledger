import React from "react"
import { connect, ConnectedProps } from 'react-redux'
import { RootState, AppDispatch } from "../../redux/store";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

import { closeSnackbar } from "../../redux/actions/snackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar : React.FC<PropsFromRedux> = ({open, message, severity, closeSnackbar}) => {
 
    return (
        <> 
            <Snackbar
                // autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                onClose={() => closeSnackbar()}
            >
                <Alert onClose={() => closeSnackbar()} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )

}

function mapStateToProps(state : RootState) {

    return  {
        open: state.snackbar.open,
        message: state.snackbar.message,
        severity: state.snackbar.severity
    }
}

function mapDispatchToProps(dispatch : AppDispatch ) {
    return  {
        closeSnackbar: () => dispatch(closeSnackbar())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(React.memo(CustomSnackbar))
