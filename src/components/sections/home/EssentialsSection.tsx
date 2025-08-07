'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const essentials = [
  { src: '/lastcat2.webp', label: 'Duffle Bags' },
  { src: '/lastcat1.webp', label: 'Head Covers' },
]

export default function EssentialsSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const Card = ({ src, label }: { src: string; label: string }) => (
    <div className="relative h-[250px] overflow-hidden rounded-xl border group">
      <Image
        alt={label}
        src={src}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500 ease-out rounded-xl brightness-[.85] cursor-pointer"
      />
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-4xl font-medium flex flex-col items-center font-montserrat">
        <span className="opacity-0 group-hover:opacity-100 group-hover:mb-4 transition-all duration-400">
          <ChevronRight className="bg-white text-black w-10 h-10 p-2 rounded-full" />
        </span>
        <span className="group-hover:translate-y-2 transition-all duration-300 text-nowrap">
          {label}
        </span>
      </div>
    </div>
  )

  return (
    <section className="container py-12">
      <h2 className="text-3xl md:text-4xl font-medium pb-6">Golf Essentials</h2>

      {isMobile ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
        >
          {essentials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card src={item.src} label={item.label} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {essentials.map((item, index) => (
            <Card key={index} src={item.src} label={item.label} />
          ))}
        </div>
      )}
    </section>
  )
}
