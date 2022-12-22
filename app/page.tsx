'use client'
import SelectionContextProvider from '../context/selectionContext'
import Content from '../components/Content'

export default function Home() {
  return (
    <SelectionContextProvider>
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
          min-w-[412px]
          max-w-[412px]
          p-8
          bg-gradient-to-b from-[#232A34] to-[#181E27] 
          rounded-[38px]
        "
        >
          <Content />
        </div>
      </div>
    </SelectionContextProvider>
  )
}
