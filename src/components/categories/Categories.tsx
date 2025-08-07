'use client'

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import CategoryCard from "./CategoryCard"

interface Props {
  title?: string
  subtitle?: string
  slides: { src: string; label: string }[]
}

export default function Categories({ title, subtitle, slides }: Props) {
  const swiperRef = useRef<SwiperRef>(null)
  const [progress, setProgress] = useState(100)

  const updateProgress = () => {
    const swiper = swiperRef.current?.swiper
    if (swiper) {
      const totalSteps = swiper.snapGrid.length - 1
      const currentStep = swiper.snapIndex
  
      const percentage = 70 + ((currentStep / totalSteps) * 30)
      setProgress(Math.round(percentage))
    }
  }
  

  const slideNext = () => {
    swiperRef.current?.swiper?.slideNext()
  }

  const slidePrev = () => {
    swiperRef.current?.swiper?.slidePrev()
  }

  useEffect(() => {
    const swiper = swiperRef.current?.swiper
    if (swiper) {
      swiper.on("slideChange", updateProgress)
      updateProgress()
    }

    return () => {
      swiper?.off("slideChange", updateProgress)
    }
  }, [slides.length])

  return (
    <section className="container py-16 bg-white">
      <div>
        {title && (
          <h2 className="text-3xl md:text-5xl text-gray-900 leading-tight mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-gray-600 text-base md:text-lg mb-8">
            {subtitle}
          </p>
        )}

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onSlideChange={updateProgress}
          onSwiper={updateProgress}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 2.5, spaceBetween: 25 },
            1280: { slidesPerView: 2.5, spaceBetween: 25 },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCard src={item.src} label={item.label} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress Bar + Buttons */}
        <div className="mt-12 flex items-center gap-32 justify-between">
          <div className="flex-1 bg-gray-200 rounded-full h-[2px] relative overflow-hidden">
            <motion.div
              className="h-full bg-black rounded-full"
              initial={{ width: "70%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="hidden md:flex gap-2">
            <motion.button
              onClick={slidePrev}
              className="p-3 rounded-full border border-gray-300 hover:border-gray-900 transition-colors duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} className="text-gray-600 group-hover:text-gray-900" />
            </motion.button>
            <motion.button
              onClick={slideNext}
              className="p-3 rounded-full border border-gray-300 hover:border-gray-900 transition-colors duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} className="text-gray-600 group-hover:text-gray-900" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
