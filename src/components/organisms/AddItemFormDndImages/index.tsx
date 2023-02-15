import React from 'react'

import {
  DndContext,
  closestCenter,

} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'

// src
import SortableItemImage from '../../atoms/SortableItemImage'

interface AddItemFormDndImagesProps {
  images: any[]
  setImages: any
}

export default function AddItemFormDndImages({ images, setImages }: AddItemFormDndImagesProps) {

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const activeIndex = images.findIndex(item => item.name === active.id.name)
      const overIndex = images.findIndex(item => item.name === over.id.name)
      setImages('images', arrayMove(images, activeIndex, overIndex))
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={images}
        strategy={horizontalListSortingStrategy}
      >
        {images.length > 0 && images.map((image: any, index) => (
          <SortableItemImage
            key={image.name}
            image={image}
          />
        ))}
      </SortableContext>
    </DndContext>
  )
}
