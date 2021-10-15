import { combineReducers } from 'redux'

import modal from './modal'
import auth from './auth'
import snackbar from './snackbar'

const reducer = combineReducers({
    modal,
    auth,
    snackbar
})

export default reducer