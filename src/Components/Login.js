import { Button } from '@mui/material'
import React from 'react'

const authEndpoint = "https://accounts.spotify.com/authorize"
const redirect_uri = "http://localhost:3000"
const scopes = [
    'user-read-private',
    'user-read-email'
]
const client_id = "26f5207f4a50402bb2d27a29b96c70c1"
const client_secret = "ab7fce60834945b4a26955c97bfdb2ac"
const loginUrl = `${authEndpoint}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join('%20')}&show_dialog=true`


export default function Login() {
  return (
    <div>
        <Button href={loginUrl}>
            Click to login to spotify
        </Button>
    </div>
  )
}
