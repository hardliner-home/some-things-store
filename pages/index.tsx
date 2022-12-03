import React, { ReactElement } from 'react'

import { Grid, Typography } from '@mui/material'

// src
import SearchTemplate from '../src/components/templates/SearchTemplate'
import GridProductCard from '../src/components/atoms/GridProductCard'
import { dummyProducts } from '../src/constants'

export default function Home({ data }: { data: string }) {
  console.log('data', data)

  return (
    <>
      <Typography variant="h1">First store for you</Typography>

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

export async function getServerSideProps() {
  const data = 'server'
  return {
    props: { data },
  }
}
