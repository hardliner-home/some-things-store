import React from 'react'

import { useLoadScript } from '@react-google-maps/api'

// src
import Maps from '../Maps'

interface MapsFieldProps {
  selected: any
  setSelected: any
}

export default function MapsField({ selected, setSelected }: MapsFieldProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    libraries: ['places']
  })

  return !isLoaded
    ? <div>Loading...</div>
    : <Maps selected={selected} setSelected={setSelected} />
}
