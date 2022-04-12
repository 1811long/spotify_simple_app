import React from 'react'

const initialPageNumber = 1

export default function paginationReducer(state=initialPageNumber, action) {
    switch (action.type){
        case "GO_NEXT_PAGE":
            return state
        case "GO_PREVIOUS_PAGE":
            return state
        case "GO_FIRST_PAGE":
            return state
        case "GO_LAST_PAGE":
            return state
        default: return state
    }
}
