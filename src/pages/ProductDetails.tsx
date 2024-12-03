import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { IoArrowBack } from "react-icons/io5";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return <div className="text-center py-8">产品未找到</div>;
  }

  const handleContact = () => {
    navigate(`/contact?product=${product.name}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <Link 
        to="/products" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
      >
        <IoArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
        返回产品列表
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>

          <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="bg-gray-100 px-4 py-2 rounded-md inline-block mb-6 self-start">
              <span className="text-gray-600">
                {categories.find(cat => cat.id === product.category)?.name || product.category}
              </span>
            </div>

            <div className="space-y-6 flex-grow">
              <div>
                <h2 className="text-xl font-semibold mb-2">产品描述</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">主要特点</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>高效的解决方案</li>
                  <li>专业的技术支持</li>
                  <li>灵活的定制选项</li>
                  <li>完善的售后服务</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={handleContact}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                联系我们
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const categories = [
  { id: 'software', name: '软件' },
  { id: 'cloud', name: '云服务' },
  { id: 'analytics', name: '数据分析' }
]; 