
import {createStore, applyMiddleware, compose} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

import reducer from '../reducers';

import {ModalState} from "../reducers/modal"
import {AuthState} from "../reducers/auth"
import {SnackbarState} from "../reducers/snackbar";

export const store = compose(
    applyMiddleware(thunk),
    composeWithDevTools(),
)(createStore)(reducer);

export type RootState = {
    modal: ModalState,
    auth: AuthState,
    snackbar: SnackbarState
}

export type AppDispatch = typeof store.dispatch