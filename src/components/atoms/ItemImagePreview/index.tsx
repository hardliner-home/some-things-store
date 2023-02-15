import React, { useState } from 'react'

import { CardMedia, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'

// src
import { altPlaceholder, imagePlaceholder } from '../../../constants'
import { ImageType } from '../../../types'

interface ItemImagePreviewProps {
  images: ImageType[]
}

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

export default function ItemImagePreview({ images }: ItemImagePreviewProps) {
  const [currentImage, setCurrentImage] = useState<string>(images.length > 0 ? images[0].url : imagePlaceholder)
  const [grid, setGrid] = useState<boolean>(false)

  const count = images.length

  const onImageEnter = () => {
    count > 0 && setGrid(true)
  }

  const onImageLeave = () => {
    if (count > 0) {
      setGrid(false)
      setCurrentImage(images[0].url)
    }
  }

  return (
    <BaseLayer onMouseEnter={onImageEnter} onMouseLeave={onImageLeave}>
      {count > 0 && grid && (
        <OverLayer>
          {images.map((image) => (
            <OverLayerItem
              count={count}
              key={image.id}
              onMouseEnter={setCurrentImage.bind(null, image.url)}
            >
              <Indicator color={image.url === currentImage ? 'secondary.light' : 'white'} />
            </OverLayerItem>
          ))}
        </OverLayer>
      )}

      <CardMedia
        component="img"
        height="180"
        image={currentImage ?? imagePlaceholder}
        alt={altPlaceholder}
      />
    </BaseLayer>
  )
}
