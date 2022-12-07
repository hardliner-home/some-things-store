import React, { ReactElement } from 'react'

import { Grid, Typography } from '@mui/material'

// src
import SearchTemplate from '../src/components/templates/SearchTemplate'
import GridProductCard from '../src/components/atoms/GridProductCard'
import { dummyProducts } from '../src/constants'

export default function Home() {

  return (
    <>
      <Typography
        sx={{ mt: 6 }}
        variant="h1"
        fontWeight={600}
      >
        First store for you
      </Typography>

      <Typography
        sx={{ mb: 5, maxWidth: '70%' }}
        variant="h6"
        color="primary"
        lineHeight={1.5}
      >
        Rails, active storage is a safe and easy method to upload, serve, and analyze files onto cloud-based storage services as well as local storage.
      </Typography>


      <Grid container spacing={2}>
        {dummyProducts.map((product, index) => (
          <Grid
            item
            xs={12} sm={6} md={4} lg={3}
            key={product.id + index}
          >
            <GridProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <SearchTemplate>{page}</SearchTemplate>
}
