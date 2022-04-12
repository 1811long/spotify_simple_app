import React from 'react'
import { Pagination } from '@mui/material'

export default function PaginationListTrack({pageCount}) {
  return (
    <Pagination count={pageCount} showFirstButton showLastButton />
  )
}
