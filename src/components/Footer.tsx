import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        {/* 移动端公司简介 */}
        <div className="md:hidden text-center mb-8">
          <h3 className="text-lg font-bold mb-2">公司名称</h3>
          <p className="text-gray-400 text-sm">
            通过创新和卓越，构建未来。
          </p>
        </div>

        {/* 主要内容网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-8">
          {/* 公司简介 - 仅在桌面端显示 */}
          <div className="hidden md:block space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-lg font-bold">公司名称</h3>
            <p className="text-gray-400 text-sm">
              通过创新和卓越，构建未来。
            </p>
          </div>
          
          {/* 快速链接 */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-bold mb-3">快速链接</h3>
            <ul className="space-y-1.5">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">首页</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm">产品</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">关于我们</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">联系我们</Link></li>
            </ul>
          </div>
          
          {/* 联系方式 */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-bold mb-3">联系方式</h3>
            <ul className="space-y-1.5">
              <li className="text-gray-400 text-sm">某某路123号</li>
              <li className="text-gray-400 text-sm">某某市</li>
              <li className="text-gray-400 text-sm">电话: (555) 123-4567</li>
              <li className="text-gray-400 text-sm">邮箱: info@company.com</li>
            </ul>
          </div>
          
          {/* 营业时间 */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base md:text-lg font-bold mb-3">营业时间</h3>
            <ul className="space-y-1.5">
              <li className="text-gray-400 text-sm">周一至周五: 9:00 - 18:00</li>
              <li className="text-gray-400 text-sm">周六: 10:00 - 16:00</li>
              <li className="text-gray-400 text-sm">周日: 休息</li>
            </ul>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} 公司名称版权所有</p>
        </div>
      </div>
    </footer>
  );
}