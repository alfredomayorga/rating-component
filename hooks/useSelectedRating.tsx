import type { Rating } from '../components/RatingMeter'
import { useState, useEffect, useContext } from 'react'
import {
  selectionContext,
  SelectionContextValues,
} from '../context/selectionContext'
export function useSelectedRating() {
  const { selectedRating, setSelectedRating } = useContext(
    selectionContext
  ) as SelectionContextValues
  const [ratings, setRatings] = useState<Rating[]>([
    { meter: 1, active: false },
    { meter: 2, active: false },
    { meter: 3, active: false },
    { meter: 4, active: false },
    { meter: 5, active: false },
  ])

  let newRatings = ratings.map((rating) => {
    if (selectedRating === rating.meter)
      return { ...rating, active: true }
    return { ...rating, active: false }
  })
  useEffect(() => {
    setRatings(newRatings)
  }, [selectedRating, setSelectedRating])

  return { setSelectedRating, ratings, selectedRating }
}
