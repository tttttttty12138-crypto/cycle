
import React, { useState } from 'react';
import { MARKET_CATEGORIES } from '../constants';
import { getAIPriceEstimation } from '../services/geminiService';
import { Sparkles, MapPin, Search, PlusCircle, Loader2 } from 'lucide-react';

const Market: React.FC = () => {
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('95新');
  const [aiEstimation, setAiEstimation] = useState<{ estimatedPrice: number; reasoning: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEstimation = async () => {
    if (!description) return;
    setIsLoading(true);
    const result = await getAIPriceEstimation(description, condition);
    setAiEstimation(result);
    setIsLoading(false);
  };

  const MOCK_ITEMS = [
    { id: '1', title: 'iPad Pro M2 11寸 256G', price: 5800, condition: '99新', category: 'electronics', location: 'HKU Main Library' },
    { id: '2', title: '微观经济学原著 教材', price: 120, condition: '8成新', category: 'books', location: 'CUHK Station' },
    { id: '3', title: 'IKEA 书桌台灯', price: 50, condition: '9成新', category: 'lifestyle', location: 'PolyU Hall' },
    { id: '4', title: '罗技 MX Master 3S', price: 450, condition: '全新', category: 'electronics', location: 'CityU AC1' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Search & Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">智能二手交易</h1>
          <p className="text-gray-500">发现身边同学的好物，AI 助你精准定价。</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="搜索物品..." 
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Post & AI Valuation */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-navy-900 mb-6 flex items-center">
              <PlusCircle className="mr-2 text-vibrant-orange" /> 发布我的物品
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">物品描述</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="例如：iPad Pro 11寸 M2 芯片，深空灰色..."
                  className="w-full p-3 rounded-xl border border-gray-200 min-h-[100px] outline-none focus:border-navy-900"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">成色</label>
                  <select 
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 outline-none"
                  >
                    <option>全新</option>
                    <option>99新</option>
                    <option>95新</option>
                    <option>9成新</option>
                    <option>8成新及以下</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={handleEstimation}
                    disabled={isLoading || !description}
                    className="w-full h-[50px] bg-navy-900 text-white rounded-xl font-bold hover:bg-navy-800 transition-all flex items-center justify-center disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <><Sparkles className="mr-2 w-4 h-4 text-vibrant-orange" /> AI 估价</>}
                  </button>
                </div>
              </div>

              {aiEstimation && (
                <div className="mt-6 p-4 bg-navy-50 rounded-xl border border-navy-100 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-navy-600 uppercase tracking-wider">AI 建议售价</span>
                    <span className="text-vibrant-orange font-bold text-xl">HKD {aiEstimation.estimatedPrice}</span>
                  </div>
                  <p className="text-sm text-navy-800 leading-relaxed italic">
                    “{aiEstimation.reasoning}”
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-navy-900 mb-4 flex items-center">
              <MapPin className="mr-2 text-vibrant-orange" /> 校园安全交易点
            </h2>
            <div className="space-y-3">
              {['HKU Main Library', 'CUHK Station Exit A', 'PolyU Student Hub'].map((loc, i) => (
                <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-vibrant-orange/10 flex items-center justify-center mr-3">
                    <MapPin className="w-4 h-4 text-vibrant-orange" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Listing */}
        <div className="lg:col-span-2">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {MARKET_CATEGORIES.map((cat) => (
              <button key={cat.id} className="flex-shrink-0 flex items-center bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-navy-900 hover:text-navy-900 transition-all shadow-sm">
                {cat.icon}
                <span className="ml-2">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img src={`https://picsum.photos/seed/${item.id}/400/300`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-navy-900 shadow-sm uppercase tracking-wide">
                    {item.condition}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-900 mb-1 group-hover:text-vibrant-orange transition-colors">{item.title}</h3>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <MapPin className="w-3 h-3 mr-1" /> {item.location}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-black text-navy-900">HKD {item.price}</span>
                    <button className="bg-navy-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-vibrant-orange transition-colors">
                      联系卖家
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
