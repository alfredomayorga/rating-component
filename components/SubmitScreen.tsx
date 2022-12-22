import Image from 'next/image'
import { useSelectedRating } from '../hooks/useSelectedRating'
function SubmitScreen() {
  const {selectedRating} = useSelectedRating()
  return (
    <div 
      className="
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <Image
        src="/images/illustration-thank-you.svg"
        alt="Thank You Illustration"
        width={162}
        height={108}
      />
      <div
        className="
          min-w-[193px]
          h-[32px]
          rounded-full
          bg-dark-blue
          text-orange
          text-center
          leading-[32px]
          mt-4
        "
      >
        You selected {selectedRating} out of 5
      </div>
        <h1 className="text-white text-[28px] my-4">Thank You!</h1>
        <p className="text-center text-light-grey">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}

export default SubmitScreen
