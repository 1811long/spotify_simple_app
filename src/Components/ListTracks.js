import React from 'react'
import { useSelector } from 'react-redux'
import TrackItem from './TrackItem'
import List from '@mui/material/List';
import PaginationListTrack from './PaginationListTrack';
import Player from './Player';
function CurrentPageTracks({currentListTracks}){
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {currentListTracks.map((track) => (
          <TrackItem key={track.id} track={track}/>
      ))}
    </List>
  )
}

export default function ListTracks() {
  const currentListTracks = useSelector(state => state.app.tracks_info.listTracksCurrentPage)
  return (
    <>
      <CurrentPageTracks currentListTracks={currentListTracks}/>
      <hr></hr>
      {currentListTracks.length ? <PaginationListTrack /> : ''}
    </>
  )
}
