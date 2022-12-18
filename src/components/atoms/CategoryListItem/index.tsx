import React, { ReactNode, useState } from 'react'

import {
  List,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

// src
import { CategoryType } from '../../../types'
import Link from 'next/link'

interface CategoryListItemProps {
  category: CategoryType
  children?: ReactNode
  topic?: boolean
}

export default function CategoryListItem({ category, children, topic }: CategoryListItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <ListItem sx={{ p: 0 }}>
        {category.children.length > 0 && (
          <ListItemIcon sx={{ p: 0, minWidth: 0 }}>
            <ListItemButton onClick={toggle} sx={{ p: 0, minWidth: 0 }}>
              {isOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItemIcon>
        )}
        <Link href={category.name} passHref>
          <ListItemText
            primary={category.name}
            primaryTypographyProps={{ color: topic ? "primary" : 'default' }}
          />
        </Link>
      </ListItem>

      {category.children.length > 0 && (
        <Collapse in={isOpen} unmountOnExit>
          <List sx={{ ml: 3, p: 0 }}>
            {children}
          </List>
        </Collapse>
      )}
    </>
  )
}
