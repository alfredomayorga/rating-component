'use client'
import { createContext, useState } from 'react'

export type SelectionContextValues = {
  ratingSelected: boolean
  setRatingSelected: (ratingSelected: boolean) => void
  formSubmitted: boolean
  setFormSubmitted: (formSubmitted: boolean) => void
  selectedRating: number | null
  setSelectedRating: (selectedRating: number | null)=> void
}

export const selectionContext =
  createContext<SelectionContextValues | null>(null)

interface IProps {
  children: React.ReactNode
}

function SelectionContextProvider({ children }: IProps) {
  const [ratingSelected, setRatingSelected] = useState<boolean>(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const values = {
    ratingSelected,
    setRatingSelected,
    formSubmitted,
    setFormSubmitted,
    selectedRating,
    setSelectedRating
  }
  return (
    <selectionContext.Provider value={values}>
      {children}
    </selectionContext.Provider>
  )
}

export default SelectionContextProvider
