import { User } from "firebase/auth";

import { SET_ERROR, SET_USER, SET_SUCCESS, SET_LOADING } from "../actions/auth"

type Action = {
    type: string,
    user?: User,
    error?: string,
    success?: boolean,
    loading?: boolean
}

export type AuthState = {
    user: User | null | undefined,
    error: string | null,
    success: string | null,
    loading: string | null
}


const initialState: AuthState = {
    user: undefined,
    error: null,
    success: null,
    loading: null
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
        case SET_SUCCESS:
            return {
                ...state,
                success: action.success
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }

        default:
            return state
    }
}


export default auth