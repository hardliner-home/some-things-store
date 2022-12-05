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
import { ProductType } from '../../../types'
import ProductImagePreview from '../ProductImagePreview'

const RoundedCard = styled(Card)`
  //border-radius: 8px;
  position: relative;
`

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

const ProductCardContent = styled(CardContent)`
  padding-bottom: 8px;
  padding-top: 8px;
  &:last-child {
    padding-bottom: 8px;
  },
`

interface GridProductCardProps {
  product: ProductType
}

export default function GridProductCard({ product }: GridProductCardProps) {

  return (
    <RoundedCard elevation={2} square>
      <LikeButton size="small" aria-label="Like Button">
        <FavoriteBorderRoundedIcon color="primary" />
      </LikeButton>

      <ProductImagePreview images={product.images}/>

      <Divider/>

      <ProductCardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="primary"
          component={Link}
          href={`/${product.id}`}
        >
          {product.title}
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
          {product.description}
        </Typography>

        <PriceContainer>
          <Tooltip title="Price" placement="right" arrow>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="primary"
            >
              {product.price.amount} {product.price.currency.symbol}
            </Typography>
          </Tooltip>

          <IconButton size="small" aria-label="More Button">
            <MoreHorizRoundedIcon/>
          </IconButton>
        </PriceContainer>
      </ProductCardContent>
    </RoundedCard>
  )
}
