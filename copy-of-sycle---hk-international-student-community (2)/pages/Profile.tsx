
import React, { useState } from 'react';
import { ShieldCheck, Mail, CreditCard, Bell, Lock, History, Bookmark, Settings, CheckCircle } from 'lucide-react';

const Profile: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Left Profile Summary */}
        <div className="lg:col-span-1">
           <div className="bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm">
              <div className="relative inline-block mb-4">
                 <div className="w-24 h-24 rounded-full bg-navy-100 border-4 border-white shadow-lg overflow-hidden mx-auto">
                    <img src="https://picsum.photos/id/64/200/200" alt="Avatar" className="w-full h-full object-cover" />
                 </div>
                 {isVerified && <CheckCircle className="absolute bottom-0 right-0 text-vibrant-orange bg-white rounded-full w-6 h-6 p-0.5" />}
              </div>
              <h2 className="text-xl font-black text-navy-900">Li Ming</h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">香港理工大学 • 设计系</p>
              <div className="flex justify-around py-4 border-t border-gray-50">
                 <div>
                    <p className="font-black text-navy-900 text-lg">12</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">交易</p>
                 </div>
                 <div className="border-x border-gray-50 px-6">
                    <p className="font-black text-navy-900 text-lg">8</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">互助</p>
                 </div>
                 <div>
                    <p className="font-black text-navy-900 text-lg">24</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">资料</p>
                 </div>
              </div>
           </div>

           <div className="mt-6 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {[
                { icon: <History className="w-4 h-4" />, label: '交易记录' },
                { icon: <Bookmark className="w-4 h-4" />, label: '收藏夹' },
                { icon: <Bell className="w-4 h-4" />, label: '消息通知' },
                { icon: <Settings className="w-4 h-4" />, label: '账户设置' },
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center px-6 py-4 text-sm font-bold text-navy-800 hover:bg-navy-50 transition-colors border-b border-gray-50 last:border-0">
                   <span className="mr-3 text-navy-400">{item.icon}</span>
                   {item.label}
                </button>
              ))}
           </div>
        </div>

        {/* Right Details */}
        <div className="lg:col-span-3 space-y-8">
           {/* Verification Status */}
           <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2 flex items-center">
                       <ShieldCheck className="w-6 h-6 mr-3 text-vibrant-orange" /> 留学生身份认证
                    </h3>
                    <p className="text-sm text-gray-500 max-w-lg">
                       认证通过后即可发布交易与资料，解锁全平台功能。Sycle 严格保护您的个人信息安全。
                    </p>
                 </div>
                 <button 
                  onClick={() => setIsVerified(true)}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                    isVerified ? 'bg-green-100 text-green-700 cursor-default' : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                 >
                    {isVerified ? '已通过双重认证' : '立即开始认证'}
                 </button>
              </div>

              {!isVerified && (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="p-6 bg-navy-50 rounded-2xl border border-navy-100">
                      <div className="flex items-center mb-4">
                         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <Mail className="w-5 h-5 text-navy-900" />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-widest">第一步</p>
                            <h4 className="font-bold text-navy-900">学校邮箱验证</h4>
                         </div>
                      </div>
                      <input type="email" placeholder="example@polyu.edu.hk" className="w-full p-3 rounded-xl bg-white border border-gray-200 outline-none text-sm mb-4" />
                      <button className="w-full bg-navy-900 text-white py-2 rounded-lg text-xs font-bold">获取验证码</button>
                   </div>
                   <div className="p-6 bg-navy-50 rounded-2xl border border-navy-100">
                      <div className="flex items-center mb-4">
                         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                            <CreditCard className="w-5 h-5 text-navy-900" />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-widest">第二步</p>
                            <h4 className="font-bold text-navy-900">学生证照片上传</h4>
                         </div>
                      </div>
                      <div className="w-full h-24 border-2 border-dashed border-navy-200 rounded-xl flex flex-col items-center justify-center bg-white/50 cursor-pointer hover:bg-white transition-colors">
                         <span className="text-[10px] font-bold text-navy-400">点击上传学生证正面</span>
                      </div>
                   </div>
                </div>
              )}
           </div>

           {/* Privacy Settings */}
           <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                 <Lock className="w-6 h-6 mr-3 text-vibrant-orange" /> 隐私与安全设置
              </h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <div>
                       <p className="font-bold text-navy-900">匿名发布模式</p>
                       <p className="text-xs text-gray-500">在跑腿互助板块发布任务时，默认使用随机分配的虚拟身份。</p>
                    </div>
                    <div className="w-12 h-6 bg-vibrant-orange rounded-full relative p-1 cursor-pointer">
                       <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
                    </div>
                 </div>
                 <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div>
                       <p className="font-bold text-navy-900">隐藏交易地点</p>
                       <p className="text-xs text-gray-500">在物品详情页仅显示大致区域，具体安全地点需私聊确定。</p>
                    </div>
                    <div className="w-12 h-6 bg-gray-200 rounded-full relative p-1 cursor-pointer">
                       <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
