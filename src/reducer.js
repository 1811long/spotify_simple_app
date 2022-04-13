import { combineReducers } from "redux"
import APIController from "./APIController";

const initialState = {
    searchedTrack:'',
    nowPlayingTrack: '',
    currentPage: 1,
    token_info:{
        access_token: '',
        refresh_token: '',
        expires_in: null
    },
    tracks_info:{
        listTracksCurrentPage:[],
        totalTracksCount:0,
        urlNextPage:'',
        urlPreviousPage: ''
    }
}

export function searchTracks(nameTrack,pageNumber){
    return async function searchTracksThunk(dispatch,getState){
        const access_token = getState().app.token_info.access_token
        APIController().getTracks(access_token,nameTrack,pageNumber)
            .then((tracks_info) => {
                dispatch({type:"GET_TRACKS",payload:{searchedTrack: nameTrack, tracks_info, pageNumber: 1}})
            })
    }
}

export function changePageListTracks(pageNumber){
    return async function changePageListTracksThunk(dispatch, getState){
        const access_token = getState().app.token_info.access_token
        const nameTrack = getState().app.searchedTrack
        APIController().getTracks(access_token,nameTrack,pageNumber)
            .then((tracks_info) => {
                dispatch({type:"GET_TRACKS",payload:{searchedTrack: nameTrack, tracks_info, pageNumber}})
        })
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
                currentPage: action.payload.pageNumber,
                searchedTrack:  action.payload.searchedTrack,
                tracks_info: action.payload.tracks_info
            }
        case "PLAY_TRACK":
            return{
                ...state,
                nowPlayingTrack: action.payload
            }
        default : return state
    }        
}

export default combineReducers({
    app: appReducer
})