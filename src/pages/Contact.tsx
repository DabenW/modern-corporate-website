import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Replace with your EmailJS service details
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      alert('消息发送成功！');
      reset();
    } catch (error) {
      alert('消息发送失败，请重试。');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">联系我们</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* 联系信息 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6">联系方式</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="font-bold w-20 md:w-24">地址：</span>
                某某路123号
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-bold w-20 md:w-24">电话：</span>
                (555) 123-4567
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-bold w-20 md:w-24">邮箱：</span>
                info@company.com
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold mt-8 mb-4">营业时间</h3>
            <div className="space-y-2 text-gray-600">
              <p>周一至周五：9:00 - 18:00</p>
              <p>周六：10:00 - 16:00</p>
              <p>周日：休息</p>
            </div>
          </div>

          {/* 联系表单 */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">请输入姓名</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱
                </label>
                <input
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">请输入有效的邮箱地址</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  主题
                </label>
                <input
                  type="text"
                  {...register('subject', { required: true })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">请输入主题</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  消息内容
                </label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">请输入消息内容</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                发送消息
              </button>
            </form>
           </div>
        </div>
      </motion.div>
    </div>
  );
}