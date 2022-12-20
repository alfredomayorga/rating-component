import HeroText from '../components/HeroText'
import RatingMeter from '../components/RatingMeter'
import Button from '../components/Button'
export default function Home() {
  return (
    <div 
      className="
        flex
        justify-center
        items-center
        h-screen
        w-full
      "
    >
      <div 
        className="
          flex
          flex-col
          gap-6
          justify-center
          items-center
          max-w-[412px]
          p-8
          bg-gradient-to-b from-[#232A34] to-[#181E27] 
          rounded-lg
        "
      >
        <HeroText />
        <RatingMeter />
        <Button />
      </div>
    </div>
  )
}
