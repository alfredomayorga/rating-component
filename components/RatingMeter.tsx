'use client'

import { useState } from 'react'
import { useSelectedRating } from '../hooks/useSelectedRating'
import { useContext } from 'react'
import {
  selectionContext,
  SelectionContextValues,
} from '../context/selectionContext'
export type Rating = {
  meter: number
  active: boolean
}

function RatingMeter() {
  const { setRatingSelected } = useContext(
    selectionContext
  ) as SelectionContextValues
  const { setSelectedRating, ratings } = useSelectedRating()
  return (
    <div
      className="
        flex 
        flex-row
        justify-between
        items-center
        w-full
      "
    >
      {ratings.map((rating: Rating, index: number) => {
        return (
          <button
            key={rating.meter}
            onClick={() => {
              setSelectedRating(rating.meter)
              setRatingSelected(true)
            }}
            style={{
              backgroundColor:
                rating.active === true ? '#FC7614' : '',
              color: 'white',
            }}
            className="
              rounded-full
              bg-dark-blue
              flex
              items-center
              justify-center
              h-[42px]
              w-[42px]
              lg:h-[51px]
              lg:w-[51px]
              text-medium-grey
              hover:bg-light-grey
              hover:text-white
            "
          >
            {rating.meter}
          </button>
        )
      })}
    </div>
  )
}

export default RatingMeter
