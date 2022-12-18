import React, { useMemo } from 'react'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Image from 'next/image'
import styled from '@emotion/styled'

interface SortableItemImageProps {
  image: File
}

const ImageBox = styled(Image)`
  object-fit: cover;
`

const MovableContainer = styled('div')`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 5px 5px 0;
  border: 1px solid lightgrey;
  &:hover {
    cursor: move;
    border-color: gray;
  }
`

export default function SortableItemImage({ image }: SortableItemImageProps) {
  const imgSrc = useMemo(() => URL.createObjectURL(image),[image])

    // @ts-ignore
  const { listeners, attributes, setNodeRef, transform, transition } = useSortable({ id: image })

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <MovableContainer ref={setNodeRef} style={styles} {...attributes} {...listeners}>
      <ImageBox
        src={imgSrc}
        alt="Item Photo"
        height={100}
        width={100}
      />
    </MovableContainer>
  )
}
