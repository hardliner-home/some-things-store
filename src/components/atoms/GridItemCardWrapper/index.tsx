import { ReactNode } from 'react'

import { Card } from '@mui/material'

interface GridItemCardWrapperProps {
  elevation?: number
  children: ReactNode
}

export default function GridItemCardWrapper({ elevation = 0, children }: GridItemCardWrapperProps) {

  return (
    <Card
      elevation={elevation}
      variant="outlined"
      sx={{ position: 'relative' }}
    >
      {children}
    </Card>
  )
}
