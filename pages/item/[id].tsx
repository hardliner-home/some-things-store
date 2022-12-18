import React, { ReactElement } from 'react'

import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'

// src
import SearchTemplate from '../../src/components/templates/SearchTemplate'
import { axiosClient } from '../../src/utils/apiUtils/api.config'
import { ItemType } from '../../src/types'

interface ItemPageProps {
  data: ItemType
}

export default function ItemPage({ data }: ItemPageProps) {

  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description || undefined}
      />

    </>
  )
}

ItemPage.getLayout = function getLayout(page: ReactElement) {
  return <SearchTemplate>{page}</SearchTemplate>
}

export const getServerSideProps: GetServerSideProps<{ data?: ItemType }> = async ({  params } ) => {
  if (params) {
    const response = await axiosClient.get(`/products/${params.id}`)
    const data = response.data

    return {
      props: { data },
    }
  }
  return {
    props: {},
  }
}
