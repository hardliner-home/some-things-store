import React from 'react'

import { Grid, Button } from '@mui/material'
import { useFormik } from 'formik'

// src
import AddItemFormBasicTopic from '../../atoms/AddItemFormBasicTopic'
import AddItemFormImagesField from '../AddItemFormImagesField'
import AddItemFormTextField from '../../atoms/AddItemFormTextField'
import { AddItemFormFieldSet } from '../../../constants'

const initialValues = {
  title: '',
  description: '',
  price: '',
  images: [],
}

export default function AddItemForm() {

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {AddItemFormFieldSet.map((field) => (
          <AddItemFormTextField
            key={field.field}
            field={field}
            // @ts-ignore
            value={formik.values[field.field]}
            onChange={formik.handleChange}
          />
        ))}

        <AddItemFormImagesField
          images={formik.values.images}
          setImages={formik.setFieldValue}
        />

        <AddItemFormBasicTopic>
          <Button variant="outlined" type="submit">Create</Button>
        </AddItemFormBasicTopic>
      </Grid>
    </form>
  )
}
