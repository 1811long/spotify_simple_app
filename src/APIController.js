import React from 'react'

const client_id = "26f5207f4a50402bb2d27a29b96c70c1"
const client_secret = "ab7fce60834945b4a26955c97bfdb2ac"
const redirect_uri = "http://localhost:3000"

export default function APIController() {
    async function _getToken(code){
        
        const url = "https://accounts.spotify.com/api/token?"+"grant_type=authorization_code&code="+code+"&redirect_uri="+redirect_uri

        const response = await fetch(url,{
            method:'POST',
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Authorization":"Basic " + btoa(client_id + ":" + client_secret)
            },
            // body:"grant_type=authorization_code&code="+code+"&redirect_uri"+redirect_uri
        })

        const data = await response.json()

        return data
    }

    async function _getRefreshToken(refToken){
        const url = "https://accounts.spotify.com/api/token?"+"grant_type=refresh_token&"+"refresh_token="+refToken
        const response = await fetch(url,{
            method:'POST',
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Authorization":"Basic " + btoa(client_id + ":" + client_secret)
            }
        })
        const data = response.json()
        return data
    }

    async function _getTracks(token, nameTrack, pageNumber){
        
        const indexStart = (pageNumber - 1) * 10

        const url = "https://api.spotify.com/v1/search?q="+encodeURIComponent("track:"+nameTrack)+"&type="+encodeURIComponent("track")+"&limit=10&offset="+indexStart
       
        const response = await fetch(url,
            {
                method: 'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' +  token
                }
            }
        )

        const data = await response.json()

        return data.tracks.items
    }

    return{
        getToken(code){
            return _getToken(code)
        },
        getRefreshToken(refToken){
            return _getRefreshToken(refToken)
        },
        getTracks(token,nameTrack,pageNumber){
            return _getTracks(token,nameTrack,pageNumber)
        }
    }
}
