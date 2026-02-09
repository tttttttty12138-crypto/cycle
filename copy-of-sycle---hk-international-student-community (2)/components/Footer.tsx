
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sycle.</h3>
            <p className="text-gray-400 max-w-xs">
              致力于为在港留学生打造最安全、高效、环保的校园循环生活圈。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-vibrant-orange">服务项目</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>二手物品流转</li>
              <li>课程资料共享</li>
              <li>校园生活互助</li>
              <li>积分商城兑换</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-vibrant-orange">联系我们</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>help@sycle.hk</li>
              <li>合作入驻</li>
              <li>隐私政策</li>
              <li>用户协议</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © 2024 Sycle HK. All Rights Reserved. Powered by Gemini AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
