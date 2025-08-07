import Categories from '@/components/categories/Categories'
import { categoriesData } from '@/data/categoriesData'

export default function CategoriesSection() {
  return (
    <section className="bg-gray-50">
      <Categories
        title="The VESSEL Golf Difference"
        subtitle="Explore our curated categories to find the perfect gear for your game."
        slides={categoriesData}
      />
    </section>
  )
}
