import React from 'react'

import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
  getLatLng,
  getZipCode,
} from 'use-places-autocomplete'
import {
  Autocomplete,
  TextField,
  Typography,
} from '@mui/material'

// src
import { PointType } from '../../../types'
import PlaceResult = google.maps.places.PlaceResult

interface PlacesAutocompleteProps {
  setSelected: (value: PointType) => void
}

export default function PlacesAutocomplete({ setSelected }: PlacesAutocompleteProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  })

  const onChange = async(e: any, place: any, reason: string) => {
    if (place) {
      setValue(place.description, false)
      clearSuggestions()

      const details = await getDetails({
        placeId: place.place_id,
        fields: ['address_component', 'adr_address', 'formatted_address', 'geometry.location', 'name', 'place_id']
      })

      // @ts-ignore
      details.geometry.location = {
        // @ts-ignore
        lat: details.geometry.location.lat(),
        // @ts-ignore
        lng: details.geometry.location.lng()
      }

      // @ts-ignore
      setSelected('location', details)
    }
  }

  const onInputChange = (event: any, newInputValue: string) => setValue(newInputValue)
  const GetOptionLabel = (option: any) => typeof option === 'string' ? option : option.description
  const RenderInput = (params: any) => <TextField {...params} fullWidth />
  const RenderOption = (props: any, option: any) => <li {...props} key={option.place_id}><Typography>{option.description}</Typography></li>
  const FilterOptions = (x: any) => x

  return (
    <Autocomplete
      size="small"
      sx={{ mb: 2 }}

      fullWidth
      disabled={!ready}
      loading={!ready}
      loadingText="Loading..."
      placeholder="Search for place"
      autoComplete
      includeInputInList
      filterSelectedOptions
      filterOptions={FilterOptions}
      options={data}
      onChange={onChange}
      inputValue={value}
      onInputChange={onInputChange}
      getOptionLabel={GetOptionLabel}

      renderInput={RenderInput}
      renderOption={RenderOption}
    />
  )
}
