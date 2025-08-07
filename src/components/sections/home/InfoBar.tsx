'use client'

import { useEffect, useState } from 'react'
import { Headset, Mail, TruckIcon } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const infoItems = [
  {
    icon: <TruckIcon size={30} />,
    title: 'Free shipping',
    description: 'Free shipping within the UK on orders £100+',
  },
  {
    icon: <Headset size={30} />,
    title: 'Need Additional Help?',
    description: 'Contact Us',
  },
  {
    icon: <Mail size={30} />,
    title: 'Newsletter',
    description: 'Subscribe to our newsletter below for updates!',
  },
]

export default function InfoBar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="container mt-40 text-center">
      {isMobile ? (
        <>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            speed={600}
          >
            {infoItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center gap-4 font-sans py-8">
                  <span>{item.icon}</span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-lg text-gray-700">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-pagination-bullet {
              background-color: rgba(0, 0, 0, 0.3);
              width: 6px;
              height: 6px;
              margin: -6px 6px !important;
              opacity: 1;
            }

            .swiper-pagination-bullet-active {
              background-color: black;
            }

            .swiper-pagination {
              bottom: 0px !important;
              text-align: center;
              margin-top: 16px;
            }
          `}</style>
        </>
      ) : (
        <div className="grid md:grid-cols-3 gap-12">
          {infoItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 font-sans">
              <span>{item.icon}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-lg text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
