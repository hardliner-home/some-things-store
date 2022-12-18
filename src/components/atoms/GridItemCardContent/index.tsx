import { ReactNode } from 'react'

import { CardContent } from '@mui/material'
import { styled } from '@mui/material/styles'

const GridItemCardContentWrapper = styled(CardContent)`
  padding-bottom: 8px;
  padding-top: 8px;
  &:last-child {
    padding-bottom: 8px;
  },
`

interface GridItemCardContentProps {
  children: ReactNode
}

export default function GridItemCardContent({ children }: GridItemCardContentProps) {

  return (
    <GridItemCardContentWrapper>
      {children}
    </GridItemCardContentWrapper>
  )
}
