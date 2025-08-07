import { Button } from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 z-0 bg-[url(/lux_pro_cart.webp)] bg-cover bg-center brightness-75" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-8 text-center px-4">
        <h1 className="text-4xl md:text-6xl italic font-playfair tracking-wider">
          The Open Collection
        </h1>
        <p className="text-base md:text-lg">
          Designed exclusively for the 153rd Open.
        </p>
        <Button variant="white" rounded="full" size="lg" className="font-bold">
          Shop Now
        </Button>
      </div>
    </section>
  )
}
