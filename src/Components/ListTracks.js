import React from 'react'
import { useSelector } from 'react-redux'
import TrackItem from './TrackItem'
import List from '@mui/material/List';
import PaginationListTrack from './PaginationListTrack';
import Player from './Player';
import Loader from './Loader';

function CurrentPageTracks({currentListTracks}){
  const showLoader = useSelector(state => state.app.showLoader)

  return (
    <div style={{textAlign:'center'}}>
      {!showLoader ?
      <List sx={{ width: '100%', bgcolor: 'background.paper'}}>
        {currentListTracks.filter((track) => track != null).map((track) => (
            <TrackItem key={track.id} track={track}/>
        ))}
      </List>
      : 
          <Loader />
      }
    </div>
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
