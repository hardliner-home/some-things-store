import React, { ReactElement, useEffect } from 'react'

import { Box, Container, Grid, List, Paper, Typography } from '@mui/material'

// src
import Header from '../../molecules/Header'
import { CategoryType } from '../../../types'
import CategoryListItem from '../../atoms/CategoryListItem'
import RootCategories from '../../molecules/RootCategories'

interface SearchTemplateProps {
  children: ReactElement
  categories?: CategoryType[]
}

export default function SearchTemplate({ children, categories }: SearchTemplateProps): JSX.Element {

  return (
    <>
      <Header/>
      <Container component="main" sx={{ mt: 3 }} maxWidth="lg">
        <Grid container spacing={3} direction="row">
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }} variant="outlined">
              <Typography
                variant="h1"
                fontWeight={600}
              >
                First store for you
              </Typography>

              <Typography
                variant="h6"
                color="primary"
                lineHeight={1.5}
              >
                Rails, active storage is a safe and easy method to upload, serve, and analyze files onto cloud-based
                storage
                services as well as local storage.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sx={{ position: 'relative' }}>
            <Grid container spacing={3} direction="row">
              <Grid item xs={3}>
                <Box sx={{ position: 'sticky', top: 64 }}>
                  {categories && <RootCategories categories={categories} />}
                </Box>
              </Grid>

              <Grid item xs={9}>
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
