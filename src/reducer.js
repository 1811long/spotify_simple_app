import { combineReducers } from "redux"
import APIController from "./APIController";

const initialState = {
    token_info:{
        access_token: '',
        refresh_token: '',
        expires_in: null
    },
    listTracks:[]
}

export function searchTracks(token,nameTrack,pageNumber){
    return async function getTracks(dispatch,state){
        const listTracks = await APIController().getTracks(token,nameTrack,pageNumber)
        dispatch({type:"GET_TRACKS",payload:listTracks})
    }
}

function appReducer(state = initialState, action) {
    switch (action.type){
        case "GET_TOKEN":
            return{
                ...state,
                token_info: action.payload
            }
        case "REFRESH_TOKEN":
            return {
                ...state,
                token_info:{
                    ...state.token_info,
                    access_token: action.payload.access_token,
                    expires_in: action.payload.expires_in
                }
            }
        case "GET_TRACKS":
            return {
                ...state,
                listTracks: action.payload
            }
        default : return state
    }        
}

export default combineReducers({
    app: appReducer
})