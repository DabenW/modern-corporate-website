import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Enterprise Solution',
    category: 'software',
    description: 'Comprehensive business management platform',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: 2,
    name: 'Cloud Services',
    category: 'cloud',
    description: 'Scalable cloud infrastructure solutions',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: 3,
    name: 'Analytics Platform',
    category: 'analytics',
    description: 'Advanced data analytics and insights',
    image: 'https://via.placeholder.com/400x300',
  },
  // Add more products as needed
];

const categories = ['all', 'software', 'cloud', 'analytics'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md capitalize transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}