// 'use client'

// import { Star } from "lucide-react"
// import Image from "next/image"
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ProductData } from "@/types/product"


// interface ProductProps {
//   product: ProductData;
//   maxVisibleColors?: number;
// }

// const Product: React.FC<ProductProps> = ({ product, maxVisibleColors = 4 }) => {
//   const [selectedColor, setSelectedColor] = useState(product.defaultColor);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const currentColor = product.colors.find(color => color.id === selectedColor) || product.colors[0];
//   const currentImage = currentColor.images[currentImageIndex];
//   const additionalColorsCount = Math.max(0, product.colors.length - maxVisibleColors);

//   const handleColorSelect = (colorId: string) => {
//     if (product.soldOut) return;
//     setSelectedColor(colorId);
//     setCurrentImageIndex(0);
//   };

//   const handleImageHover = () => {
//     if (product.soldOut) return;
//     if (currentColor.images.length > 1) {
//       setIsHovered(true);
//       setCurrentImageIndex(1);
//     }
//   };

//   const handleImageLeave = () => {
//     if (product.soldOut) return;
//     setIsHovered(false);
//     setCurrentImageIndex(0);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       viewport={{ once: true }}
//       className={`flex flex-col group cursor-pointer min-h-[360px] justify-between px-2 ${product.soldOut ? 'opacity-60 pointer-events-none' : ''}`}
//     >
//       {/* Product Image */}
//       <div
//         className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] bg-gray-50"
//         onMouseEnter={handleImageHover}
//         onMouseLeave={handleImageLeave}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`${selectedColor}-${currentImageIndex}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-full h-full"
//           >
//             <Image
//               alt={product.name}
//               src={currentImage}
//               width={400}
//               height={500}
//               className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-[0.2s]"
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Sold Out Badge */}
//         {product.soldOut && (
//           <div className="absolute top-4 left-4 bg-black text-white rounded-full font-bold text-xs px-2 py-1 shadow">
//             Sold Out
//           </div>
//         )}

//         {/* Image indicators */}
//         {!product.soldOut && currentColor.images.length > 2 && (
//           <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
//             {currentColor.images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImageIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentImageIndex === index ? 'bg-black' : 'bg-black/30'}`}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col gap-2">
//         <div className="flex justify-between items-start">
//           <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-2">{product.name}</h3>
//           <span className="flex items-center gap-1 text-sm">
//             <span className="text-gray-600">{product.rating}</span>
//             <Star size={16} fill="currentColor" className="text-yellow-400" />
//           </span>
//         </div>

//         <span className="text-xl font-bold text-gray-900">{product.price}</span>

//         {/* Color Selector */}
//         <div className="flex items-center gap-2 mt-1 mb-2">
//           {product.colors.slice(0, maxVisibleColors).map((color) => (
//             <motion.button
//               key={color.id}
//               onClick={() => handleColorSelect(color.id)}
//               className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${color.class} ${selectedColor === color.id ? 'border-gray-900 scale-110' : 'border-gray-300 hover:border-gray-500'} ${product.soldOut ? 'cursor-not-allowed opacity-50' : ''}`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label={`Select ${color.name} color`}
//               disabled={product.soldOut}
//             />
//           ))}

//           {additionalColorsCount > 0 && (
//             <span className="rounded-full border text-xs text-gray-500 border-gray-400 px-2 py-1 hover:border-gray-600 transition-colors duration-200">
//               +{additionalColorsCount}
//             </span>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Product;
