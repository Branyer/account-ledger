import React, { useState } from "react"
import { connect, ConnectedProps } from 'react-redux'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { makeStyles } from "@mui/styles";

import { closeModal } from "../../redux/actions/modal"

import { RootState, AppDispatch } from "../../redux/store"

interface Props extends PropsFromRedux {
    type: string
}

const useStyles: Function = makeStyles({
    container: {
        padding: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    formControl: {
        marginTop: 30
    },
    title: {
        textAlign: "center"
    }
})

const Login: React.FC<Props> = ({ type, handleClose }) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [values, setValues] = useState({ email: "", password: "", confirmed_password: "" })

    const classes = useStyles()


    const handleChangeValues = (name: string, value: string) => {
        
        setValues(v => ({
            ...v,
            [name]: value
        }))

    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        //TODO send values to firebase
        console.log(values)

    }

    return (
        <>
            <Box className={classes.container}>
                <DialogTitle>{type}</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText className={classes.title}>
                            {type === "Login" ? "Login to your account" : "Create a new Account"}
                        </DialogContentText>
                        <FormGroup className={classes.formControl}>
                            <InputLabel >Email Address</InputLabel>
                            <TextField
                                value={values.email}
                                className={classes.input}
                                margin="dense"
                                id="name"
                                type="email"
                                fullWidth
                                variant="filled"
                                required
                                onChange={e => handleChangeValues("email", e.target.value)}
                                inputProps={{
                                    autoComplete: "off",
                                }}
                            />


                        </FormGroup>

                        <FormGroup className={classes.formControl}>
                            <InputLabel >Password</InputLabel>
                            <FilledInput
                                value={values.password}
                                onChange={e => handleChangeValues("password", e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(show => !show)}
                                            onMouseDown={() => setShowPassword(show => !show)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormGroup>


                        <FormGroup className={classes.formControl}>
                            <InputLabel >Confirm Password</InputLabel>
                            <FilledInput
                                value={values.confirmed_password}
                                onChange={e => handleChangeValues("confirmed_password", e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(show => !show)}
                                            onMouseDown={() => setShowPassword(show => !show)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormGroup>
                    </DialogContent>
                    <DialogActions className={classes.formControl}>
                        <Button type="submit" color="primary" variant="contained">Create an Account</Button>
                        <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
                    </DialogActions>
                </form>
            </Box>
        </>
    )

}

function mapStateToProps(state: RootState) {
    return {}
}

function mapDispatchToProps(dispatch: AppDispatch) {
    return {
        handleClose: () => dispatch(closeModal())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
