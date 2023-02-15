import React, { ReactElement, useEffect, useState } from 'react'

import { Grid } from '@mui/material'
import { NextSeo } from 'next-seo'

// src
import GridItemCard from '../src/components/atoms/GridItemCard'
import SearchTemplate from '../src/components/templates/SearchTemplate'
import GridItemCardSkeleton from '../src/components/atoms/GridItemCardSkeleton'
import { axiosClient } from '../src/utils/apiUtils/api.config'
import { ItemType } from '../src/types'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState<ItemType[]>([])

  useEffect(() => {
    axiosClient.get('/products')
      .then((response) => {
        setItems(response.data)
      })
      .catch((error) => {
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />

      <Grid container spacing={1}>
        {isLoading && Array.from([1,2,3,4,5,6,7,8,9,10,11,12,13]).map((num) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={num}>
            <GridItemCardSkeleton />
          </Grid>
        ))}

        {!isLoading && items.length > 0 && items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <GridItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <SearchTemplate categories={page.props.categories}>{page}</SearchTemplate>
}

export async function getStaticProps() {
  const request = await axiosClient.get('/categories')
  const categories = request.data

  return {
    props: { categories }
  }
}
