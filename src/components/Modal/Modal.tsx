import React from "react"

import { connect, ConnectedProps } from 'react-redux'

import Dialog from '@mui/material/Dialog';
import {closeModal} from "../../redux/actions/modal"

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {RootState, AppDispatch} from "../../redux/store"



const Modal: React.FC<PropsFromRedux> = ({open, content, handleClose}) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog 
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}>
                {content}
        </Dialog>
    )

}

function mapStateToProps(state : RootState) {
    
    return  {
        open: state.modal.open,
        content: state.modal.content
    }
}

function mapDispatchToProps(dispatch : AppDispatch ) {
    return  {
        handleClose: () => dispatch(closeModal())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Modal)