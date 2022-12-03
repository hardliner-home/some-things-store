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
  src: string | null,
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
