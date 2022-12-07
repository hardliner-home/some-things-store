import React from 'react'

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from 'next/image'

interface SortableItemImageProps {
  id: string
}

export default function SortableItemImage({ id }: SortableItemImageProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id })

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: 80,
    height: 80,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 5,
  }

  return (
    <div ref={setNodeRef} style={styles} {...attributes} {...listeners}>
      <Image
        src={id}
        alt="Item Photo"
        objectFit="cover"
        height={80}
        width={80}
      />
    </div>
  )
}
