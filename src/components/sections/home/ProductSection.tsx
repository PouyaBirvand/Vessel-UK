import ProductSlider from '@/components/products/ProductSlider'
import { ProductData } from '@/types/product'

interface Props {
  title: string
  description: string
  products: ProductData[]
}

export default function ProductSection({ title, description, products }: Props) {
  return (
    <section className="py-12 container">
      <ProductSlider title={title} description={description} products={products} />
    </section>
  )
}
