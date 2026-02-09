
import React, { useState } from 'react';
import { ErrandTask, TaskStatus } from '../types';
import { Truck, MapPin, User, Package, ChevronRight, Clock, CheckCircle2, CircleDashed } from 'lucide-react';

const Errands: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'available' | 'my-tasks'>('available');

  const MOCK_ERRANDS: ErrandTask[] = [
    { id: '1', type: 'delivery', title: '取快递：顺丰站点 3 号柜', reward: 15, status: 'pending', location: 'HKU MTR Exit A', anonymousName: '神秘考拉' },
    { id: '2', type: 'purchase', title: '代购星巴克：大杯拿铁不加糖', reward: 10, status: 'ongoing', location: 'Composite Building', anonymousName: '闪电蜗牛' },
    { id: '3', type: 'pickup', title: '代取文件：图书馆二楼打印机', reward: 5, status: 'pending', location: 'PolyU P-Core', anonymousName: '跳舞河马' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <CircleDashed className="w-4 h-4 text-blue-400 animate-pulse" />;
      case 'ongoing': return <Clock className="w-4 h-4 text-vibrant-orange animate-spin-slow" />;
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">同学跑腿互助</h1>
        <p className="text-gray-500">发布小任务，利用课间碎片时间互帮互助。</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-navy-50 p-1.5 rounded-2xl flex border border-navy-100">
          <button 
            onClick={() => setActiveTab('available')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'available' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'
            }`}
          >
            可接任务
          </button>
          <button 
            onClick={() => setActiveTab('my-tasks')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'my-tasks' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'
            }`}
          >
            我的发布/接单
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {MOCK_ERRANDS.map((task) => (
            <div key={task.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-vibrant-orange/30 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${task.type === 'delivery' ? 'bg-blue-50 text-blue-600' : task.type === 'purchase' ? 'bg-orange-50 text-vibrant-orange' : 'bg-purple-50 text-purple-600'}`}>
                    {task.type === 'delivery' ? <Package className="w-5 h-5" /> : task.type === 'purchase' ? <Truck className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 group-hover:text-vibrant-orange transition-colors">{task.title}</h3>
                    <p className="text-xs text-gray-400 mt-1 flex items-center">
                      <User className="w-3 h-3 mr-1" /> {task.anonymousName} (匿名发布)
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-vibrant-orange font-black text-xl leading-none">+{task.reward}</div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">豆豆</span>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-gray-500 space-x-6 border-t border-gray-50 pt-4">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1.5 text-navy-300" /> {task.location}
                </div>
                <div className="flex items-center">
                  {getStatusIcon(task.status)}
                  <span className="ml-1.5 capitalize font-medium">{task.status === 'pending' ? '等待接单' : task.status === 'ongoing' ? '进行中' : '已完成'}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-navy-50 hover:bg-navy-900 hover:text-white text-navy-900 py-3 rounded-xl font-bold text-sm flex items-center justify-center transition-all">
                接受任务 <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
             <h3 className="text-xl font-black text-navy-900 mb-6">发布新需求</h3>
             <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                   <button className="p-4 border border-gray-100 rounded-2xl hover:border-vibrant-orange hover:bg-vibrant-orange/5 transition-all text-center group">
                      <Package className="w-6 h-6 mx-auto mb-2 text-navy-400 group-hover:text-vibrant-orange" />
                      <span className="text-xs font-bold text-navy-800">代取件</span>
                   </button>
                   <button className="p-4 border border-gray-100 rounded-2xl hover:border-vibrant-orange hover:bg-vibrant-orange/5 transition-all text-center group">
                      <Truck className="w-6 h-6 mx-auto mb-2 text-navy-400 group-hover:text-vibrant-orange" />
                      <span className="text-xs font-bold text-navy-800">代买</span>
                   </button>
                </div>
                <div className="p-4 bg-navy-50 rounded-2xl border border-navy-100">
                   <p className="text-[10px] font-bold text-navy-600 uppercase tracking-widest mb-1">您的当前匿名身份</p>
                   <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-vibrant-orange to-pink-500 mr-3"></div>
                      <span className="font-bold text-navy-900">优雅的企鹅</span>
                      <button className="ml-auto text-[10px] text-vibrant-orange font-bold hover:underline">换一个</button>
                   </div>
                </div>
                <button className="w-full bg-vibrant-orange hover:bg-vibrant-hover text-white py-4 rounded-2xl font-black shadow-lg shadow-vibrant-orange/20 transition-all">
                  立即发布任务
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errands;
