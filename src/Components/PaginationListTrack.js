import React from 'react'
import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import APIController from '../APIController'
import { searchTracks, changePageListTracks} from '../reducer'

export default function PaginationListTrack() {
  
  const dispatch = useDispatch()
  
  const pageCount = useSelector(state => {
    return Math.min(100,Math.ceil(state.app.tracks_info.totalTracksCount/10))
  })

  const currentPage = useSelector(state => {
    return state.app.currentPage
  })

  function handlePageChange(event,page){
    dispatch(changePageListTracks(page))
  }

  return (
    <Pagination 
      count={pageCount} 
      page={currentPage}
      showFirstButton 
      showLastButton 
      onChange={(event,page) => handlePageChange(event,page)}
    />
  )
}
