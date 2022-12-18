import React, { useState, Fragment } from 'react'

import { Button, Grid, TextField, Typography } from '@mui/material'

// src
import { axiosClient } from '../../src/utils/apiUtils/api.config'
import { CategoryType } from '../../src/types'

interface SecretProps {
  categoriesArray: CategoryType[]
}

type NewCategoryType = {
  name: string,
  parent_id?: string
}

export default function Secret({ categoriesArray }: SecretProps) {
  const [categories, setCategories] = useState<CategoryType[]>(categoriesArray)
  const [value, setValue] = useState<string>('')
  const [parentId, setParentId] = useState<string>('')

  console.log(categories)


  const onSave = () => {
    const category: NewCategoryType = { name: value }
    if (parentId) category.parent_id = parentId

    axiosClient.post('/categories', { category })
      .then(() => {
        setValue('')
        
        axiosClient.get('/categories')
          .then((response) => {
            setCategories(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }

  return (
    <Grid item xs={12} sx={{ p: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <TextField
            sx={{ mr: 2 }}
            size="small"
            label="Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <TextField
            sx={{ mr: 2 }}
            size="small"
            label="Parent ID"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
          />
          <Button variant="outlined" onClick={onSave}>
            Save
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid black', mb:3 }}>
              <Typography sx={{ width: 50 }}>ID</Typography>
              <Typography sx={{ width: 500 }}>NAME</Typography>
              <Typography sx={{ width: 500 }}>SLUG</Typography>
            </Grid>

            {categories.map((category) => (
              <Fragment key={category.id}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography sx={{ width: 50, borderBottom: '1px solid black'  }}>{category.id}</Typography>
                  <Typography sx={{ width: 500 }}>{category.name}</Typography>
                  <Typography sx={{ width: 500 }}>{category.slug}</Typography>
                </Grid>

                {category.children.length > 0 && category.children.map((categoryChild) => (
                  <Grid key={categoryChild.id} item xs={12} sx={{ display: 'flex', flexDirection: 'row', ml: 4 }}>
                    <Typography sx={{ width: 50 }}>{categoryChild.id}</Typography>
                    <Typography sx={{ width: 500 }}>{categoryChild.name}</Typography>
                    <Typography sx={{ width: 500 }}>{categoryChild.slug}</Typography>
                  </Grid>
                ))}
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export async function getStaticProps() {
  const request = await axiosClient.get('/categories')
  const categories = request.data

  return {
    props: { categories }
  }
}
