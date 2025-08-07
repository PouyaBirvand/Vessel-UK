import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface Props {
  src: string
  label: string
}

export default function CategoryCard({ src, label }: Props) {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl border group">
      <Image
        alt={label}
        src={src}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500 ease-out rounded-xl brightness-[.85] cursor-pointer"
      />
      <div className="absolute flex items-center justify-center flex-col font-montserrat left-1/2 top-40 transform -translate-x-1/2 text-white text-2xl font-medium px-4 py-2 rounded-full">
        <span className="group-hover:-translate-y-2 duration-300 transition-all text-nowrap text-3xl">
          {label}
        </span>
        <span className="opacity-0 group-hover:translate-y-2 group-hover:opacity-100 group-hover:mb-4 transition-all duration-400">
          <ChevronRight className="bg-white cursor-pointer text-black w-9 h-9 p-2 rounded-full transition-all duration-300" />
        </span>
      </div>
    </div>
  )
}
