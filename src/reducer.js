import { combineReducers } from "redux"
import APIController from "./APIController";

const initialState = []

export function searchTracks(token,nameTrack,pageNumber){
    return async function getTracks(dispatch,state){
        const listTracks = await APIController().getTracks(token,nameTrack,pageNumber)
        dispatch({type:"GET_TRACKS",payload:listTracks})
    }
}

function listTracksReducer(state = initialState, action) {
    switch (action.type){
        case "GET_TRACKS":
        return action.payload;
        default : return state
    }        
}

export default combineReducers({
    listTracks: listTracksReducer
})