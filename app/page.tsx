import HeroText from '../components/HeroText'
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
          justify-center
          items-center
          max-w-[412px]
          p-8
          bg-gradient-to-b from-[#232A34] to-[#181E27] 
          rounded-lg
        "
      >
        <HeroText />
      </div>
    </div>
  )
}
