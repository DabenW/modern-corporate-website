import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types/product';

const categories = [
  { id: 'all', name: '全部' },
  { id: 'software', name: '软件' },
  { id: 'cloud', name: '云服务' },
  { id: 'analytics', name: '数据分析' }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product: Product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">我们的产品</h1>

      {/* 分类筛选 */}
      <div className="flex flex-wrap justify-center gap-2 md:space-x-4 mb-8 md:mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 产品网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">{product.description}</p>
              <button className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <Link to={`/products/${product.id}`}>了解更多</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}