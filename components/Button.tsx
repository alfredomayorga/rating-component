'use client'
import { useSelectedRating } from '../hooks/useSelectedRating'
import {
  selectionContext,
  SelectionContextValues,
} from '../context/selectionContext'
import { useContext } from 'react'
function Button() {
  const { selectedRating, ratings } = useSelectedRating()
  const { setFormSubmitted, ratingSelected } = useContext(
    selectionContext
  ) as SelectionContextValues
  return (
    <button
      onClick={() => setFormSubmitted(true)}
      style={{
        opacity: !ratingSelected ? 0.5 : 1,
        pointerEvents: !ratingSelected ? 'none' : 'all',
      }}
      className="
        bg-orange 
        rounded-full     
        w-full               
        h-[45px]             
        flex                 
        items-center         
        justify-center       
        text-white           
        hover:bg-white       
        hover:text-orange
      "
    >
      Submit
    </button>
  )
}

export default Button
