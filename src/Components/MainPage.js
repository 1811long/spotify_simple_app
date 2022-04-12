import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import ListTracks from './ListTracks'
import APIController from '../APIController'
import { useState } from 'react'

export default function MainPage({code}) {

  const [token,setToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [expiresIn, setExpiresIn] = useState(0)

  useEffect(() => {
    window.history.replaceState(null,null,'http://localhost:3000')
    APIController().getToken(code).then((response) => {
      setToken(response.access_token)
      setRefreshToken(response.refresh_token)
      setExpiresIn(response.expires_in)
    })
  },[])
  
  useEffect(() => {
    if (!expiresIn) return
    setTimeout(() => {
      APIController().getRefreshToken(refreshToken).then((response) =>{
          setToken(response.access_token)
          setExpiresIn(expiresIn)
      })
    },(expiresIn-60)*1000)
  },[expiresIn,token])
  
  return (
    <div>
        <h1>Main page</h1>
        <SearchForm token={token}/>
        <ListTracks />
    </div>
  )
}
