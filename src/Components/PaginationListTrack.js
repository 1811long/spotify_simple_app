import React from 'react'
import { Pagination } from '@mui/material'
import { useDispatch } from 'react-redux'


import {searchTracks} from '../reducer'

export default function PaginationListTrack({pageCount,token}) {
 
  const dispatch = useDispatch()

  function handlePageChange(event,page){
    console.log(page)
  }

  return (
    <Pagination 
      count={pageCount} 
      showFirstButton 
      showLastButton 
      onChange={(event,page) => handlePageChange(event,page)}
    />
  )
}
