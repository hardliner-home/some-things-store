import React, { useState } from 'react'

import { CardMedia, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'

// src
import { ImageType } from '../../../types'

interface ProductImagePreviewProps {
  images: ImageType[]
}

const imagePlaceholder = 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
const altPlaceholder = 'Product Image'

const BaseLayer = styled('div')`
  display: flex;
  flex-direction: row;
  position: relative;
`

const OverLayer = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
`

const OverLayerItem = styled<any>('div')`
  width: ${({ count }) => `calc(100% / ${count})`};
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Indicator = styled(Divider)`
  margin: 4px;
  height: 2px;
`

export default function ProductImagePreview({ images }: ProductImagePreviewProps) {
  const [currentImage, setCurrentImage] = useState<string>(images[0].src)
  const [grid, setGrid] = useState<boolean>(false)

  const count = images.length

  const onImageEnter = () => {
    count > 0 && setGrid(true)
  }

  const onImageLeave = () => {
    if (count > 0) {
      setGrid(false)
      setCurrentImage(images[0].src)
    }
  }

  return (
    <BaseLayer onMouseEnter={onImageEnter} onMouseLeave={onImageLeave}>
      {count > 0 && grid && (
        <OverLayer>
          {images.map((image) => (
            <OverLayerItem
              count={count}
              onMouseEnter={setCurrentImage.bind(null, image.src)}
            >
              <Indicator color={image.src === currentImage ? 'secondary.light' : 'white'} />
            </OverLayerItem>
          ))}
        </OverLayer>
      )}

      <CardMedia
        component="img"
        height="180"
        image={currentImage ?? imagePlaceholder}
        alt={images[0].description ?? altPlaceholder}
      />
    </BaseLayer>
  )
}
