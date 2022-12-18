import React from 'react'

import { Card, Divider, Skeleton } from '@mui/material'

// src
import GridItemCardContent from '../GridItemCardContent'
import GridItemCardWrapper from '../GridItemCardWrapper'

export default function GridItemCardSkeleton() {

  return (
    <GridItemCardWrapper>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={180}
        width="100%"
      />
      <Divider/>
      <GridItemCardContent>
        <Skeleton
          animation="wave"
          variant="text"
          height={24}
          width="60%"
        />
        <Skeleton
          animation="wave"
          variant="text"
          height={44}
          width="80%"
        />
        <Skeleton
          animation="wave"
          variant="text"
          height={24}
          width="30%"
          sx={{ my: '5px' }}
        />
      </GridItemCardContent>
    </GridItemCardWrapper>
  )
}
