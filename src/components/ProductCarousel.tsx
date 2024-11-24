import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    name: '企业解决方案',
    description: '全面的企业管理平台',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: 2,
    name: '云服务',
    description: '可扩展的云基础设施解决方案',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: 3,
    name: '数据分析平台',
    description: '高级数据分析与洞察',
    image: 'https://via.placeholder.com/400x300',
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative rounded-lg shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3]"
          >
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {products[currentIndex].name}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {products[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-lg transition-colors"
        aria-label="上一个"
      >
        <ChevronLeftIcon className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-lg transition-colors"
        aria-label="下一个"
      >
        <ChevronRightIcon className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`切换到第${index + 1}个产品`}
          />
        ))}
      </div>
    </div>
  );
}