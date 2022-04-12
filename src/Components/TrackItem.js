import React from 'react'
import { ListItem } from '@mui/material'
import { ListItemAvatar } from '@mui/material'
import { ListItemText } from '@mui/material'
import Avatar from '@mui/material/Avatar';

export default function TrackItem({track}) {
  return (
    <ListItem>
        <ListItemAvatar>
          <Avatar alt="" src={track.album.images[0].url} />
        </ListItemAvatar>
        <ListItemText
            primary={track.name}
            secondary={track.artists.map((artist) => artist.name).join(" - ")}
        >
        </ListItemText>
    </ListItem>
  )
}
