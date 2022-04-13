import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import ListTracks from './ListTracks'
import APIController from '../APIController'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function MainPage({code}) {

  const access_token = useSelector(state => state.app.token_info.access_token)
  const refresh_token = useSelector(state => state.app.token_info.refresh_token)
  const expires_in = useSelector(state => state.app.token_info.expires_in)

  const dispatch = useDispatch()

  useEffect(() => {
    window.history.replaceState(null,null,'http://localhost:3000')
    APIController().getToken(code).then((response) => {
      dispatch({type: "GET_TOKEN", payload:{
        access_token: response.access_token,
        refresh_token: response.refresh_token,
        expires_in: response.expires_in
      }})
    })
  },[])

  useEffect(() => {
    if (!access_token || !expires_in) return 
    setTimeout(() => {
      APIController().getRefreshToken(refresh_token).then((response) => {
        dispatch({type:"REFRESH_TOKEN", payload:{
          access_token: response.access_token,
          expires_in: response.expires_in
        }})
      })
    },3000)
  },[access_token,expires_in])

  return (
    <div>
        <h1>Main page</h1>
        <SearchForm />
        <ListTracks />
    </div>
  )
}
