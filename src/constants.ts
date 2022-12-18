// src
import { AddItemFormTextFieldType } from './types'

export const imagePlaceholder: string = 'https://mui.com/static/images/cards/contemplative-reptile.jpg'

export const altPlaceholder: string = 'Item Image'

export const AddItemFormFieldSet: AddItemFormTextFieldType[] = [
  {
    field: 'title',
    title: 'Title',
    placeholder: 'Type title',
    type: 'text',
    icon: '',
    multiLine: false,
    maxLines: undefined,
    fullWidth: true
  },
  {
    field: 'description',
    title: 'Description',
    placeholder: 'Type description',
    type: 'text',
    icon: '',
    multiLine: true,
    maxLines: 5,
    fullWidth: true
  },
  {
    field: 'price',
    title: 'Price',
    placeholder: 'Type Price',
    type: 'number',
    icon: '',
    multiLine: false,
    maxLines: undefined,
    fullWidth: false
  },
]
