
import React from 'react';
import { Page } from '../types';
import { UNIVERSITIES } from '../constants';
import { ArrowRight, ShoppingBag, BookOpen, Truck, ShieldCheck } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  onVerify: () => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage, onVerify }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/id/122/1600/900" alt="HK View" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              香港高校留学生的<br />
              <span className="text-vibrant-orange underline decoration-wavy decoration-2 underline-offset-8">循环生活圈</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              连接 10W+ 在港同学，整合二手交易、知识共享与跑腿互助，构建属于我们的校园生态。
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage(Page.Market)}
                className="bg-vibrant-orange hover:bg-vibrant-hover text-white px-8 py-4 rounded-full font-bold transition-all flex items-center"
              >
                立即开始 <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={onVerify}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all flex items-center"
              >
                <ShieldCheck className="mr-2 w-5 h-5 text-vibrant-orange" /> 身份认证
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">核心功能板块</h2>
            <div className="w-20 h-1 bg-vibrant-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '智能二手交易',
                desc: 'AI 自动估价，校园安全点面对面交易，省心又省力。',
                icon: <ShoppingBag className="w-8 h-8 text-vibrant-orange" />,
                action: () => setCurrentPage(Page.Market)
              },
              {
                title: '虚拟知识共享',
                desc: '汇集历年真题与高质量笔记，AI 自动生成内容摘要。',
                icon: <BookOpen className="w-8 h-8 text-vibrant-orange" />,
                action: () => setCurrentPage(Page.Knowledge)
              },
              {
                title: '同学跑腿互助',
                desc: '发布取件、代购任务，赚取“豆豆”积分，互助共赢。',
                icon: <Truck className="w-8 h-8 text-vibrant-orange" />,
                action: () => setCurrentPage(Page.Errands)
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
                onClick={feature.action}
              >
                <div className="mb-6 inline-block p-4 bg-navy-50 rounded-xl group-hover:bg-navy-900 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{feature.desc}</p>
                <div className="flex items-center text-navy-900 font-semibold group-hover:text-vibrant-orange">
                  查看详情 <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Logos */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">已覆盖全港主流高校</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {UNIVERSITIES.map((uni, idx) => (
              <div key={idx} className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all cursor-default">
                <img src={uni.logo} alt={uni.name} className="w-10 h-10 rounded-full" />
                <span className="font-bold text-navy-900">{uni.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
