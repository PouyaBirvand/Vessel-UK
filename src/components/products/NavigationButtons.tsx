import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface Props {
  onPrev: () => void
  onNext: () => void
}

export default function NavigationButtons({ onPrev, onNext }: Props) {
  return (
    <div className="hidden md:flex gap-2">
      <motion.button
        onClick={onPrev}
        className="p-3 rounded-full border border-gray-300 hover:border-gray-900 transition-colors duration-200 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} className="text-gray-600 group-hover:text-gray-900" />
      </motion.button>
      <motion.button
        onClick={onNext}
        className="p-3 rounded-full border border-gray-300 hover:border-gray-900 transition-colors duration-200 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next Slide"
      >
        <ChevronRight size={20} className="text-gray-600 group-hover:text-gray-900" />
      </motion.button>
    </div>
  )
}
