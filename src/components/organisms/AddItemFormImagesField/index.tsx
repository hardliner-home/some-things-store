import React, { useRef } from 'react'

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'

import styled from '@emotion/styled'

// src
import AddItemFormBasicTopic from '../../atoms/AddItemFormBasicTopic'
import AddItemFormDndImages from '../AddItemFormDndImages'

const AddImageBlock = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border: 1px solid lightgray;
  border-radius: 16px;
  -webkit-appearance: button;
  &:hover {
    cursor: pointer;
    border-color: gray;
  }
`

const FileInput = styled('input')`
  display: none;
`

interface AddItemFormImagesFieldProps {
  images: any[]
  setImages: any
}

export default function AddItemFormImagesField({ images, setImages }: AddItemFormImagesFieldProps) {
  const fileInputRef = useRef(null)

  const toArrayFN = (arr: any) => Object.keys(arr).map(key => arr[key])

  const items = toArrayFN(images)

  const onInputChange = (event: any) => {
    setImages('images', [...items, ...toArrayFN(event.target.files)])
  }

  const onAddImage = (event: any) => {
    // @ts-ignore
    fileInputRef.current && fileInputRef.current.click()
  }

  return (
    <AddItemFormBasicTopic title="Photos">
      <AddItemFormDndImages
        images={items}
        setImages={setImages}
      />
      {items.length < 8 && (
        <>
          <AddImageBlock onClick={onAddImage}>
            <AddCircleOutlineRoundedIcon />
          </AddImageBlock>
          <FileInput
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onInputChange}
          />
        </>
      )}
    </AddItemFormBasicTopic>

  )
}
