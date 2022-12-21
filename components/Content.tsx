'use client'
import HeroText from './HeroText'
import RatingMeter from './RatingMeter'
import Button from './Button'
import { useState } from 'react'
function Content() {
  const [ratingSelected, setRatingSelected] = useState<boolean>(false)
  return (
    <>
      <HeroText />
      <RatingMeter setRatingSelected={setRatingSelected} />
      <Button ratingSelected={ratingSelected} />
    </>
  )
}

export default Content
