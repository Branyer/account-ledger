import React from "react"

import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal"

type Action = {
    type: string,
    content?: React.ReactNode,
    open?: boolean
}

type ModalState = {
    content: React.ReactNode | null,
    open: boolean
}


const initialState : ModalState = {
    content: null,
    open: false
}


const modal = (state : ModalState = initialState, action : Action) => {

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