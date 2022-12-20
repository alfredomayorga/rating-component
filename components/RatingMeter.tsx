function RatingMeter() {
  const ratings = [1,2,3,4,5]
  return(
    <div 
      className="
        flex 
        flex-row
        justify-between
        items-center
        w-full
      "
    >
      {ratings.map(rating=> {
        return(
          <button
            key={rating}
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
            ">
            {rating}
          </button>
        )
      })}
    </div>
  )
}

export default RatingMeter
