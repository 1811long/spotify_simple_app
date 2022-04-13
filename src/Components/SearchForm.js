import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchTracks } from '../reducer'

export default function SearchForm() {
  
  const dispatch = useDispatch()
  const [inputSong, setInputSong] = useState('') 
  
  function handleInputSongChange(event){
      setInputSong(event.target.value)
      dispatch(searchTracks(event.target.value,1))
  }
  
  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { width: '70ch' },
        }} 
    >
        <div>
            <TextField
                label="Search a song, an artist, or an album here"  
                value={inputSong}
                onChange={(event) => handleInputSongChange(event)}
            />
        </div>
    </Box>
  )
}
