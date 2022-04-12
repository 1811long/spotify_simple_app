import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchTracks } from '../reducer'


export default function SearchForm({token}) {
  
  const dispatch = useDispatch()

  const [inputSong, setInputSong] = useState('') 
  
  function handleInputSongChange(event){
      setInputSong(event.target.value)
  }

  function handleSubmit(event){
      dispatch(searchTracks(token,inputSong,1))
      setInputSong('')
  }

  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { width: '50ch' },
        }}
    >
        <div>
            <TextField
                label="Search a song, an artist, or an album here"  
                value={inputSong}
                onChange={(event) => handleInputSongChange(event)}
            />
            <Button 
                variant="contained"
                style={{marginTop:'10px',marginLeft:'10px'}}
                onClick ={(event) => handleSubmit(event)}
            >
                Submit
            </Button>
        </div>
    </Box>
  )
}
