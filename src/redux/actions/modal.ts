import React from "react"

export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export const openModal = (content: React.ReactNode) => {

    return {
        type: OPEN_MODAL,
        content
    }

}

export const closeModal = () => {

    return {
        type: CLOSE_MODAL,
    }
}

