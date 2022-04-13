import React from 'react'
import { ListItemButton } from '@mui/material'
import { ListItemAvatar } from '@mui/material'
import { ListItemText } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';

export default function TrackItem({ track }) {
  const dispatch = useDispatch()
  return (
    <ListItemButton
      style={{ width: '550px' }}
      onClick={() => {
        if (!track.preview_url) {
          alert("this track dont have any preview")
          return
        }
        dispatch({type:"PLAY_TRACK", payload: track.preview_url})
      }}
    >
      <ListItemAvatar>
        <Avatar alt="" src={track.album.images.length ? track.album.images[0].url : ""} />
      </ListItemAvatar>
      <ListItemText
        primary={track.name}
        secondary={track.artists.map((artist) => artist.name).join(" - ")}
      >
      </ListItemText>
    </ListItemButton>
  )
}
