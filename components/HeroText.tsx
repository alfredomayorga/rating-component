import Image from 'next/image'
function HeroText() {
  return(
    <div className="text-white">
      <div 
        className="
          rounded-full
          bg-dark-blue
          flex
          justify-center
          items-center
          h-[40px]
          w-[40px]
        "
      >
        <Image 
          src="/images/icon-star.svg"
          alt="Star"
          width={16}
          height={16}
        />
      </div>
      <h1
        className="
          text-[24px]
          lg:text-[28px]
          my-4
        "
      >How did we do?</h1>
      <p className="text-light-grey">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    </div>
  )
}

export default HeroText
