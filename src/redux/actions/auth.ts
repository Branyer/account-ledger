import {createUserWithEmailAndPassword, signInWithEmailAndPassword,  UserCredential, User} from "firebase/auth";

import { getFirestore, setDoc, doc, Timestamp } from "firebase/firestore";

import {auth,} from "../../firebaseconfig" 

import { AppDispatch } from "../store";


export const SET_USER = "SET_USER"
export const SET_ERROR = "SET_ERROR"

const db = getFirestore()

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
    return  (dispatch: AppDispatch) => {
      
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
            }

            dispatch(setUser(user))
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
            dispatch(setError(`code: ${errorCode} | message: ${errorMessage}`))

            setTimeout(() => {
                dispatch(setError(""))
            }, 3000 )
          
        });
    }

}


export const login = (data: formData) => {
    return (dispatch: AppDispatch) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch(setUser(user))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch(setError(`code: ${errorCode} | message: ${errorMessage}`))

            setTimeout(() => {
                dispatch(setError(""))
            }, 3000 )
        });
    }

}