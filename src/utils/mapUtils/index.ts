const parseRawAddress = (rawAddress: any) => {

  return rawAddress.reduce((seed: any, params: any) => {
    params.types.forEach((type: string) => seed[type] = params.long_name)

    return seed
  }, {})
}

const buildLocationAttributes = (attributes: any) => {
  const prettyAddress = parseRawAddress(attributes.address_components)

  const locationAttributes: any = {
    country: prettyAddress.country,
    postalCode: prettyAddress.postal_code,
    fullAddress: attributes.formatted_address,
    lat: attributes.geometry.location.lat,
    long: attributes.geometry.location.lng,
    placeId: attributes.place_id,
    addressComponents: attributes.address_components
  }

  if (prettyAddress.sublocality) locationAttributes.state = prettyAddress.sublocality
  if (prettyAddress.locality) locationAttributes.city = prettyAddress.locality

  return locationAttributes
}

export {
  parseRawAddress,
  buildLocationAttributes
}
