'use client'
import { useSelectedRating } from '../hooks/useSelectedRating'
interface ButtonProps {
  ratingSelected: boolean
}
function Button({ratingSelected}: ButtonProps) {
  const { selectedRating, ratings } = useSelectedRating()
  console.log(ratingSelected, 'BUTTON')
  return (
    <button
      style={{
        opacity: !ratingSelected ? 0.5 : 1,
        pointerEvents: !ratingSelected ? 'none' : 'all'
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
