import React from 'react'

import { List } from '@mui/material'

// src
import CategoryListItem from '../../atoms/CategoryListItem'
import { CategoryType } from '../../../types'

interface RootCategoriesProps {
  categories: CategoryType[]
}

export default function RootCategories({ categories }: RootCategoriesProps) {

  return (
    <List>
      {categories && categories.length > 0 && categories.map((category) => (
        <CategoryListItem
          key={category.id}
          topic
          category={category}
        >
          {category.children.map((childrenCategory) => (
            <CategoryListItem
              key={childrenCategory.id}
              category={childrenCategory}
            />
          ))}
        </CategoryListItem>
      ))}
    </List>
  )
}
