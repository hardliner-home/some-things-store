import React, { ReactNode } from 'react'

import { Grid, Typography } from '@mui/material'

interface AddItemFormBasicTopicProps {
  title?: string
  children: ReactNode
}

export default function AddItemFormBasicTopic({ title, children }: AddItemFormBasicTopicProps) {

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {title && <Typography fontWeight="bold">{title}</Typography>}
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  )
}
