import {createUserWithEmailAndPassword, signInWithEmailAndPassword,  UserCredential, User} from "firebase/auth";

import { getFirestore, setDoc, doc, Timestamp } from "firebase/firestore";

import {auth,} from "../../firebaseconfig" 

import { AppDispatch } from "../store";


export const SET_USER = "SET_USER"
export const SET_ERROR = "SET_ERROR"
export const SET_SUCCESS = "SET_SUCCESS"
export const SET_LOADING = "SET_LOADING"

const db = getFirestore()

type formData = {
    email: string,
    password: string
}

const setError = (error: string | null) => {

    return {
        type: SET_ERROR,
        error
    }

}

const setSuccess = (success: string | null) => {

    return {
        type: SET_SUCCESS,
        success
    }

}

const setLoading = (loading: string | null) => {

    return {
        type: SET_LOADING,
        loading
    }

}

const setUser = (user: User) => {

    return {
        type: SET_USER,
        user
    }

}

export const signUp = (data: formData ) => {
    return  (dispatch: AppDispatch) => {
      
        dispatch(setLoading("Se esta creando al usuario"))

        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential : UserCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            try {
                await setDoc(doc(db, `users`, user.uid), {
                    created_at: Timestamp.now()
                });
                
            } catch (e) {
                console.error("Error adding document: ", e);
                dispatch(setError(`Error adding document`))
            }
            
            dispatch(setLoading(null))
            dispatch(setSuccess("Se ha creado al usuario con Exito!"))
            dispatch(setUser(user))

            setTimeout(() => {
                dispatch(setSuccess(null))
            }, 3000 )
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
            dispatch(setError(`code: ${errorCode} | message: ${errorMessage}`))

            setTimeout(() => {
                dispatch(setError(null))
            }, 3000 )
          
        });
    }

}


export const login = (data: formData) => {
    return (dispatch: AppDispatch) => {

        dispatch(setLoading("Iniciando Sesion"))

        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
               
            dispatch(setLoading(null))
            dispatch(setSuccess("Se ha iniciado sesion Exito!"))
            dispatch(setUser(user))

            setTimeout(() => {
                dispatch(setSuccess(null))
            }, 3000 )

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch(setError(`code: ${errorCode} | message: ${errorMessage}`))

            setTimeout(() => {
                dispatch(setError(null))
            }, 3000 )
        });
    }

}