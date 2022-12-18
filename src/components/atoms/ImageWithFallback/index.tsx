import React, { useEffect, useState } from 'react'

import Image, { ImageProps } from 'next/image'

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src']
}

const fallbackImage = 'https://www.automotiveone.com/wp-content/uploads/2019/02/placeholder-user-image.jpg'

const ImageWithFallback = ({ fallback = fallbackImage, alt, src, ...props }: ImageWithFallbackProps) => {
  const [error, setError] = useState<React.SyntheticEvent<HTMLImageElement, Event> | null>(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
    />
  )
}

export default ImageWithFallback
