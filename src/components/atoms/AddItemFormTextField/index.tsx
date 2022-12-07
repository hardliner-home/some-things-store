import React from 'react'

import { OutlinedInput } from '@mui/material'

// src
import AddItemFormBasicTopic from '../AddItemFormBasicTopic'

interface AddItemFormTextFieldProps {
  field: any
  onChange: any
  value: string
}

export default function AddItemFormTextField({ field, value, onChange }: AddItemFormTextFieldProps) {

  return (
    <AddItemFormBasicTopic key={field.field} title={field.title}>
      <OutlinedInput
        fullWidth
        size="small"
        id={field.field}
        name={field.field}
        type={field.type}
        placeholder={field.placeholder}
        multiline={field.multiLine}
        minRows={field.maxLines}
        onChange={onChange}
        value={value}
      />
    </AddItemFormBasicTopic>
  )
}
