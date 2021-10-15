import { combineReducers } from 'redux'

import modal from './modal'
import auth from './auth'

const reducer = combineReducers({
    modal,
    auth
})

export default reducer