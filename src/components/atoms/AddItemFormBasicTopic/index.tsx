import React, { ReactNode } from 'react'

import { Grid, Typography } from '@mui/material'

interface AddItemFormBasicTopicProps {
  title?: string
  children: ReactNode
}

export default function AddItemFormBasicTopic({ title, children }: AddItemFormBasicTopicProps) {

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} md={3}>
          {title && <Typography color="primary" fontWeight="bold">{title}</Typography>}
        </Grid>

        <Grid item xs={12} md={9} sx={{ display:'flex', flexFlow: 'wrap' }}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  )
}
