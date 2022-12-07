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

  const imageSourceLinks = images.map(image => URL.createObjectURL(image))

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const activeIndex = imageSourceLinks.indexOf(active.id)
      const overIndex = imageSourceLinks.indexOf(over.id)
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
        {imageSourceLinks.length > 0 && imageSourceLinks.map((src: any, index) => (
          <SortableItemImage key={index} id={src} />
        ))}
      </SortableContext>
    </DndContext>
  )
}
