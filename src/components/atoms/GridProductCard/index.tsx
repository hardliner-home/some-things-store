import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Tooltip,
  IconButton,
} from '@mui/material'

import { styled } from '@mui/material/styles'

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

// src
import { ProductType } from '../../../types'

const RoundedCard = styled(Card)`
  border-radius: 10px;
`

const imagePlaceholder = 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
const altPlaceholder = 'Product Image'

interface GridProductCardProps {
  product: ProductType
}

export default function GridProductCard({ product }: GridProductCardProps) {

  return (
    <RoundedCard
      elevation={8}
      sx={{ position: 'relative' }}
    >
      <IconButton
        size="small"
        sx={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <FavoriteBorderRoundedIcon color="primary"/>
      </IconButton>

      <CardMedia
        component="img"
        height="180"
        image={product.images.length > 0 ? product.images[0].src ?? imagePlaceholder : imagePlaceholder}
        alt={product.images.length > 0 ? product.images[0].description ?? altPlaceholder : altPlaceholder}
      />

      <Divider/>

      <CardContent
        sx={{
          paddingBottom: 1,
          paddingTop: 1,
          '&:last-child': {
            paddingBottom: 1
          }
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">{product.title}</Typography>
        <Typography variant="body2">{product.description}</Typography>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Tooltip title="Price" placement="right" arrow>
            <Typography variant="body1" fontWeight="bold" color="primary">
              {product.price.amount} {product.price.currency.symbol}
            </Typography>
          </Tooltip>

          <IconButton
            size="small"
            sx={{ zIndex: 1 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <MoreHorizRoundedIcon/>
          </IconButton>
        </Box>
      </CardContent>
    </RoundedCard>
  )
}
