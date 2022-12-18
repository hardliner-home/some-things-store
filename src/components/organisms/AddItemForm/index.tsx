import React, { useState } from 'react'

import { Grid, Button } from '@mui/material'
import { useFormik, FormikValues } from 'formik'

// src
import AddItemFormBasicTopic from '../../atoms/AddItemFormBasicTopic'
import AddItemFormImagesField from '../AddItemFormImagesField'
import AddItemFormTextField from '../../atoms/AddItemFormTextField'
import MapsField from '../MapsField'
import { AddItemFormFieldSet } from '../../../constants'
import { buildLocationAttributes } from '../../../utils/mapUtils'
import { toSnakeCase } from '../../../utils/baseUtils'
import { axiosClient } from '../../../utils/apiUtils/api.config'

const initialValues = {
  title: '',
  description: '',
  price: '',
  images: [],
  location: null
}

export default function AddItemForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setIsLoading(true)

      const locationAttributes = buildLocationAttributes(values.location)
      const data = new FormData()

      for (const key in values) {
        switch (key) {
          case 'location':
            break;
          case 'images':
            values.images.forEach((image) => data.append(`product[photos][]`, image))
            break;
          default:
            // @ts-ignore
            data.append(`product[${toSnakeCase(key)}]`, values[key])
            break;
        }
      }

      // location_attributes fill
      for (const key in locationAttributes) {
        if (key === 'addressComponents') {
          data.append(`product[location_attributes][raw_address]`, JSON.stringify(locationAttributes[key]))
        } else {
          data.append(`product[location_attributes][${toSnakeCase(key)}]`, locationAttributes[key])
        }
      }

      // dummy category fill
      data.append(`product[category_id]`, '1')

      axiosClient.post('/products', data)
        .then((response) => {
          console.log(response.data)
          formik.resetForm()
        })
        .catch((error) => { 
          console.error(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
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

        <AddItemFormBasicTopic title="Address">
          <MapsField
            selected={formik.values.location}
            setSelected={formik.setFieldValue}
          />
        </AddItemFormBasicTopic>

        <AddItemFormImagesField
          images={formik.values.images}
          setImages={formik.setFieldValue}
        />

        <AddItemFormBasicTopic>
          <Button
            disabled={isLoading}
            variant="outlined"
            type="submit"
          >
            Create
          </Button>
        </AddItemFormBasicTopic>
      </Grid>
    </form>
  )
}
