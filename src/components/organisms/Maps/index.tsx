import React, { useMemo, useState } from 'react'

import { GoogleMap, MarkerF } from '@react-google-maps/api'

// src
import PlacesAutocomplete from '../PlacesAutocomplete'
import { PointType } from '../../../types'

const style = {
  width: '100%',
  borderRadius: 16,
  border: '1px solid lightgrey',
  aspectRatio: '2/1'
}

const startPoint: PointType = {
  lat: 40.177200,
  lng: 44.503490,
}

interface MapsProps {
  selected: any
  setSelected: any
}

export default function Maps({ selected, setSelected }: MapsProps) {
  const [zoomValue, setZoomValue] = useState<number>(10)

  const center = useMemo(() => {
    return selected
      ? selected.geometry.location
      : startPoint
  }, [selected])

  const options = {
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
  }

  const SetZoom = () => {
    setZoomValue(16)
  }

  return (
    <>
      <PlacesAutocomplete setSelected={setSelected} />

      <GoogleMap
        zoom={zoomValue}
        center={center}
        options={options}
        mapContainerStyle={style}
      >
        {selected && <MarkerF position={center} onLoad={SetZoom} />}
      </GoogleMap>
    </>
  )
}
