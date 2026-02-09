
import React from 'react';
import { Coins, TrendingUp, Gift, History, Trophy, ArrowUpRight } from 'lucide-react';

const Points: React.FC = () => {
  const LEADERBOARD = [
    { rank: 1, name: 'Alex.H', points: 15420, university: 'HKU' },
    { rank: 2, name: 'Chloe.W', points: 12850, university: 'PolyU' },
    { rank: 3, name: 'Jason.K', points: 11200, university: 'CityU' },
  ];

  const REWARDS = [
    { title: 'HKU 咖啡 8 折券', cost: 200, icon: '☕' },
    { title: '全港百佳超市 $50 券', cost: 5000, icon: '🛒' },
    { title: 'Sycle 限量版 Tote Bag', cost: 1500, icon: '👜' },
    { title: '1 个月会员特权', cost: 1000, icon: '💎' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Points Display */}
      <div className="bg-navy-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-orange opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="text-vibrant-orange font-bold text-sm tracking-widest uppercase mb-2 block">您的可用余额</span>
            <div className="flex items-baseline">
              <span className="text-7xl font-black">1,248</span>
              <span className="text-2xl font-bold ml-3 text-navy-300">豆豆</span>
            </div>
            <div className="flex space-x-4 mt-8">
              <button className="bg-vibrant-orange hover:bg-vibrant-hover px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center">
                立即获取 <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center">
                收支记录 <History className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
             {[
               { label: '累计赚取', value: '5.2K', icon: <TrendingUp className="w-5 h-5 text-green-400" /> },
               { label: '今日收益', value: '+45', icon: <Coins className="w-5 h-5 text-vibrant-orange" /> }
             ].map((stat, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm min-w-[160px]">
                  {stat.icon}
                  <div className="mt-4">
                     <p className="text-[10px] text-navy-300 font-bold uppercase">{stat.label}</p>
                     <p className="text-2xl font-black">{stat.value}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Redeem Shop */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center">
              <Gift className="w-6 h-6 mr-3 text-vibrant-orange" /> 兑换商城
            </h2>
            <button className="text-navy-500 font-bold text-sm hover:text-vibrant-orange">查看全部</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REWARDS.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                   <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                   <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                   <div className="text-xs text-gray-400 font-medium">官方合作品牌</div>
                </div>
                <div className="mt-8 flex justify-between items-center">
                   <div className="flex items-baseline">
                      <span className="text-xl font-black text-navy-900">{item.cost}</span>
                      <span className="text-[10px] font-bold text-gray-400 ml-1">豆豆</span>
                   </div>
                   <button className="bg-navy-900 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-vibrant-orange transition-all">
                     立即兑换
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm h-fit">
            <h2 className="text-xl font-bold text-navy-900 mb-8 flex items-center">
              <Trophy className="w-5 h-5 mr-3 text-yellow-500" /> 循环达人榜
            </h2>
            <div className="space-y-6">
              {LEADERBOARD.map((user) => (
                <div key={user.rank} className="flex items-center group">
                  <div className={`w-8 h-8 flex items-center justify-center font-black text-sm rounded-full mr-4 ${
                    user.rank === 1 ? 'bg-yellow-100 text-yellow-700' : 
                    user.rank === 2 ? 'bg-gray-100 text-gray-600' : 
                    'bg-orange-50 text-vibrant-orange'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-navy-900 group-hover:text-vibrant-orange transition-colors">{user.name}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{user.university}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-navy-900">{user.points}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Points</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 rounded-xl border-2 border-dashed border-gray-100 text-gray-400 font-bold text-sm hover:border-vibrant-orange hover:text-vibrant-orange transition-all">
              查看本周排位趋势
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
