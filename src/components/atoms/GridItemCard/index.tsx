import React from 'react'

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Tooltip,
  IconButton,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

// src
import { ItemType } from '../../../types'
import GridItemCardContent from '../GridItemCardContent'
import ItemImagePreview from '../ItemImagePreview'
import GridItemCardWrapper from '../GridItemCardWrapper'

const PriceContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LikeButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`

interface GridProductCardProps {
  item: ItemType
}

export default function GridItemCard({ item }: GridProductCardProps) {

  return (
    <GridItemCardWrapper>
      <LikeButton size="small" aria-label="Like Button">
        <FavoriteBorderRoundedIcon color="primary" />
      </LikeButton>

      <ItemImagePreview images={item.photos} />
      <Divider/>

      <GridItemCardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="primary"
          component={Link}
          href={`/item/${item.id}`}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
          {item.description}
        </Typography>

        <PriceContainer>
          <Tooltip title="Price" placement="right" arrow>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="primary"
            >
              {item.price}
            </Typography>
          </Tooltip>

          <IconButton size="small" aria-label="More Button">
            <MoreHorizRoundedIcon/>
          </IconButton>
        </PriceContainer>
      </GridItemCardContent>
    </GridItemCardWrapper>
  )
}
