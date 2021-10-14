import React from "react"
import { connect, ConnectedProps } from 'react-redux'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {closeModal} from "../../redux/actions/modal"

interface Props extends PropsFromRedux  {
    type: string
}

interface RootState  {
   
}

const Login : React.FC<Props> = ({type, handleClose}) => {

    return (
        <>
            <DialogTitle>{type}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {type === "Login" ? "Login to your account" : "Create a new Account"}
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </>
    )

}
function mapStateToProps(state : RootState) {
    return  {
    }
}

function mapDispatchToProps(dispatch : any ) {
    return  {
        handleClose: () => dispatch(closeModal())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
