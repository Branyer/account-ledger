import {createUserWithEmailAndPassword, signInWithEmailAndPassword,  UserCredential, User} from "firebase/auth";
import {auth} from "../../firebaseconfig" 

import { AppDispatch } from "../store";

export const SIGN_UP = "SIGN_UP"
export const LOGIN = "LOGIN"
export const SET_USER = "SET_USER"
export const SET_ERROR = "SET_ERROR"

type formData = {
    email: string,
    password: string
}

const setError = (error: string) => {

    return {
        type: SET_ERROR,
        error
    }

}

const setUser = (user: User) => {

    return {
        type: SET_USER,
        user
    }

}

export const signUp = (data: formData ) => {
    return (dispatch: AppDispatch) => {
      
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential : UserCredential) => {
            // Signed in 
            const user = userCredential.user;

            //TODO create firestore user

            dispatch(setUser(user))
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
            dispatch(setError(`code: ${errorCode} | message: ${errorMessage}`))
          
        });
    }

}


export const Login = (data: formData) => {
    return (dispatch: AppDispatch) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user", user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

}