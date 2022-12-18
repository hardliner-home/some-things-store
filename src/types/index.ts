export type TimestumpType = {
  updatedAt: string,
  createdAt: string,
}

export type ImageType = {
  id: number,
  url: string,
}

export type ItemType = {
  id: number,
  title: string,
  description: string | null
  photos: ImageType[],
  user: UserType,
  location: LocationType,
  category: CategoryType,
  price: string,
} & TimestumpType

export type CategoryType = {
  id: number,
  name: string,
  slug: string,
  ancestry: string | null,
  children: CategoryType[]
} & TimestumpType

export type LocationType = {
  id: number,
  lat: number,
  long: number,
  place_id: string,
  rowAddress: string,
  postal_code: string,
  city: string | null,
  state: string | null,
  country: string | null,
  full_address: string | null,
  locationableId: number,
  locationableType: string,
} & TimestumpType

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
} & TimestumpType

export type AddItemFormTextFieldType = {
  field: string,
  title: string,
  placeholder: string,
  type: string,
  icon: string,
  multiLine: boolean,
  maxLines: number | undefined,
  fullWidth: boolean
}

export type PointType = {
  lat: number,
  lng: number
}
