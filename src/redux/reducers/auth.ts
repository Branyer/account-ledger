import { User } from "firebase/auth";

import { SET_ERROR, SET_USER } from "../actions/auth"

type Action = {
    type: string,
    user?: User,
    error?: string,
}

export type AuthState = {
    user: User | null,
    error: string | null
}


const initialState: AuthState = {
    user: null,
    error: null
}

const auth = (state: AuthState = initialState, action: Action) => {

    switch (action.type) {

        case SET_USER:
            return {
                ...state,
                user: action.user
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state
    }
}


export default auth