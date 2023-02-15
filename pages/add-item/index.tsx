import React, { ReactElement } from 'react'

import { Typography } from '@mui/material'

// src
import DefaultTemplate from '../../src/components/templates/DefaultTemplate'
import AddItemForm from '../../src/components/organisms/AddItemForm'

export default function AddItemPage() {

  return (
    <>
      <Typography
        sx={{ mt: 6, mb: 4 }}
        variant="h1"
        fontWeight={600}
      >
        Add Item Form
      </Typography>

      <AddItemForm />
    </>
  )
}

AddItemPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
