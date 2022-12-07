import { AddItemFormTextFieldType, ProductType } from './types'

export const dummySingleProduct: ProductType = {
  id: 0,
  title: 'Motherboard x130',
  description: 'Great Motherboard based on x13 chipset. New, has all parts, just bought',
  images: [
    { id: 0, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGw1yrFvDc7kCJ5vXpFxpRZozWkQW1S3ZWwA&usqp=CAU', description: '' },
    { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XI_UBcY8eXljAn_g9CQoFBZnMmGCmGTY4Q&usqp=CAU', description: '' },
    { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtthGWcBhWNRT5FlVH3SqP4HZlEYAevtPew&usqp=CAU', description: '' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nCYt1eaSqKdaH_s2GWvmNf3a59CHKCGzNw&usqp=CAU', description: '' },
  ],
  author: {
    id: 0,
    fullName: 'Vladimir Shabanov',
    image: {
      id: 0,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxInN_LaJoOiBb83CzUXywFGG5rgUigpmUtw&usqp=CAU',
      description: ''
    }
  },
  advertType: {
    type: 'product',
    advertisementPlan: 'none',
    urgency: 'low'
  },
  price: {
    currency: {
      symbol: '₽',
      type: 'rubble'
    },
    amount: 35000
  }
}

export const dummyProducts: ProductType[] = Array
  .from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  .map((item) => dummySingleProduct)

export const AddItemFormFieldSet: AddItemFormTextFieldType[] = [
  {
    field: 'title',
    title: 'Title',
    placeholder: 'Type title',
    type: 'text',
    icon: '',
    multiLine: false,
    maxLines: undefined,
  },
  {
    field: 'description',
    title: 'Description',
    placeholder: 'Type description',
    type: 'text',
    icon: '',
    multiLine: true,
    maxLines: 5,
  },
  {
    field: 'price',
    title: 'Price',
    placeholder: 'Type Price',
    type: 'number',
    icon: '',
    multiLine: false,
    maxLines: undefined,
  },
]
