'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const items = [
  { src: '/golfcartbags.webp', label: 'Golf Accessories' },
  { src: '/golfacc.jpg', label: 'Golf Cart Bags' },
]

export default function ImageGridSection() {
  const [isMobile, setIsMobile] = useState(false)
  const swiperRef = useRef<SwiperRef>(null)
  const [progress, setProgress] = useState(70)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const updateProgress = () => {
    const swiper = swiperRef.current?.swiper
    if (swiper) {
      const totalSteps = swiper.snapGrid.length - 1
      const currentStep = swiper.snapIndex
      const percentage = 70 + ((currentStep / totalSteps) * 30)
      setProgress(Math.round(percentage))
    }
  }

  const Card = ({ src, label }: { src: string; label: string }) => (
    <div className={`relative overflow-hidden rounded-xl border group cursor-pointer ${isMobile ? 'h-[400px]' : 'h-[700px]'}`}>
      <Image
        alt={label}
        src={src}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500 ease-out rounded-xl brightness-[.85]"
      />
      <div className={`absolute ${isMobile ? 'inset-0 flex flex-col items-center justify-center' : 'bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center'} text-white text-3xl md:text-4xl font-medium font-montserrat`}>
        <motion.span
          className="opacity-0 group-hover:opacity-100 mb-4 transition-opacity duration-300"
        >
          <ChevronRight className="bg-white text-black w-10 h-10 p-2 rounded-full" />
        </motion.span>
        <span className="group-hover:translate-y-2 transition-all duration-300">
          {label}
        </span>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <section className="container py-16 bg-white">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          onSlideChange={updateProgress}
          onSwiper={updateProgress}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Card src={item.src} label={item.label} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress Bar */}
        <div className="mt-12">
          <div className="w-full bg-gray-200 rounded-full h-[2px] relative overflow-hidden">
            <motion.div
              className="h-full bg-black rounded-full"
              initial={{ width: '70%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </section>
    )
  }

  // حالت دسکتاپ: گرید
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card key={index} src={item.src} label={item.label} />
        ))}
      </div>
    </section>
  )
}
