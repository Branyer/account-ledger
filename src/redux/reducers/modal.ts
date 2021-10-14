import React from "react"

import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal"

type modalAction = {
    type: string,
    content?: React.ReactNode,
    open?: boolean
}


const initialState = {
    content: null,
    open: false
}


const modal = (state = initialState, action : modalAction) => {

    switch (action.type) {
        case OPEN_MODAL:
          return {
              ...state,
              content: action.content,
              open: true
          }
        case CLOSE_MODAL:
          return {
              ...state,
              content: null,
              open: false
          }
        default:
          return state
      }

}

export default modal