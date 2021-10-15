
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"

import reducer from '../reducers';

import {composeWithDevTools} from "redux-devtools-extension"

export const store = compose(
    applyMiddleware(thunk),
    composeWithDevTools(),
)(createStore)(reducer);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch