import React from 'react'
import APIController from "./APIController";


export function searchTracks(token,nameTrack,pageNumber){
    return async function getTracks(dispatch,state){
        const listTracks = await APIController().getTracks(token,nameTrack,pageNumber)
        dispatch({type:"GET_TRACKS",payload:listTracks})
    }
}

export default function listTracksReducer(state = [], action) {
    switch (action.type){
        case "GET_TRACKS":
        return action.payload;
        default : return state
    }        
}
