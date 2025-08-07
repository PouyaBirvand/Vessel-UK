'use client'

import { useRef } from "react"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import { ProductData } from "@/types/product"
import ProductCard from "./ProductCard"
import NavigationButtons from "./NavigationButtons"

interface ProductSliderProps {
  title: string
  description?: string
  products: ProductData[]
  maxVisibleColors?: number
}

export default function ProductSlider({
  title,
  description,
  products,
  maxVisibleColors = 4,
}: ProductSliderProps) {
  const swiperRef = useRef<SwiperRef>(null)

  const slideNext = () => swiperRef.current?.swiper.slideNext()
  const slidePrev = () => swiperRef.current?.swiper.slidePrev()

  return (
    <section className="py-16 bg-white">
      <div>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl text-gray-900 mb-2">{title}</h2>
            {description && <p className="text-gray-600">{description}</p>}
          </div>
          <NavigationButtons onPrev={slidePrev} onNext={slideNext} />
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.4}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 4, spaceBetween: 32 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="pb-6">
                <ProductCard product={product} maxVisibleColors={maxVisibleColors} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
