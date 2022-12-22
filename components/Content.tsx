'use client'
import HeroText from './HeroText'
import RatingMeter from './RatingMeter'
import Button from './Button'
import { useContext } from 'react'
import SubmitScreen from './SubmitScreen'
import {
  selectionContext,
  SelectionContextValues,
} from '../context/selectionContext'
function Content() {
  const { formSubmitted } = useContext(
    selectionContext
  ) as SelectionContextValues
  return (
    <>
      {!formSubmitted ? (
        <>
          <HeroText />
          <RatingMeter />
          <Button />
        </>
      ) : (
        <SubmitScreen />
      )}
    </>
  )
}

export default Content
