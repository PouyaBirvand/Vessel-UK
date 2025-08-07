'use client'
import BannerSection from '@/components/sections/home/BannerSection'
import CategoriesSection from '@/components/sections/home/CategoriesSection'
import EssentialsSection from '@/components/sections/home/EssentialsSection'
import HeroSection from '@/components/sections/home/HeroSection'
import ImageGridSection from '@/components/sections/home/ImageGridSection'
import InfoBar from '@/components/sections/home/InfoBar'
import ProductSection from '@/components/sections/home/ProductSection'
import { accessoriesData, productsData } from '@/data/productsData'

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <HeroSection />
      <BannerSection />
      <ProductSection
        title="Golf Bags - Bestsellers"
        description="Discover our most popular golf bags designed for performance"
        products={productsData}
      />
      <ImageGridSection />
      <ProductSection
        title="Golf Accessories"
        description="Essential gear to elevate your game"
        products={accessoriesData}
      />
      <CategoriesSection />
      <EssentialsSection />
      <InfoBar />
    </div>
  )
}
