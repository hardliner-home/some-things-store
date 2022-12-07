export type PriceType = {
  currency: {
    symbol: '₽' | '$' | '֏',
    type: 'rubble' | 'dram' | 'dollar'
  },
  amount: number
}

export type AdvertType = {
  type: 'product' | 'service',
  advertisementPlan: 'none' | 'basic' | 'advanced',
  urgency: 'low' | 'high'
}

export type ImageType = {
  id: number,
  src: string,
  description: string | null
}

export type AuthorType = {
  id: number,
  fullName: string,
  image: ImageType,
}

export type ProductType = {
  id: number,
  images: ImageType[],
  author: AuthorType,
  advertType: AdvertType,
  price: PriceType,
  title: string,
  description: string | null
}

export type ThemeType = 'light' | 'dark'

export type AuthApiVariantType = 'signIn' | 'signUp' | 'signOut'

export type UserType = {
  id: number,
  phone: string,
  email: string
  firstName: string,
  lastName: string,
  fullName: string,
  profilePicture: string | null,
}

export type AddItemFormTextFieldType = {
  field: string,
  title: string,
  placeholder: string,
  type: string,
  icon: string,
  multiLine: boolean,
  maxLines: number | undefined,
}
