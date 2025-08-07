'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function BannerSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-8 mt-10"
    >
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-2xl">
        {/* تصویر بک‌گراند */}
        <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[600px]">
          <Image
            src="/memorialbanner.webp"
            alt="cover"
            fill
            priority
            className="object-cover w-full h-full brightness-75"
          />
        </div>

        {/* محتوای روی تصویر */}
        <div
          className="absolute inset-0 flex flex-col items-start justify-end text-left text-white px-8 pb-12"
        >
          <h2 className="text-4xl font-semibold leading-tight">
            HEADWEAR
          </h2>
          <Button
            variant="white"
            size="lg"
            fullWidth={false}
            rounded="full"
            className="mt-4"
          >
            Shop Headwear
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
