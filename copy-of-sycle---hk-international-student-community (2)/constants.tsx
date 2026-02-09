
import React from 'react';
import { Book, Cpu, Coffee, PenTool } from 'lucide-react';

export const UNIVERSITIES = [
  { name: '香港大學 (HKU)', logo: 'https://picsum.photos/id/101/40/40' },
  { name: '香港中文大學 (CUHK)', logo: 'https://picsum.photos/id/102/40/40' },
  { name: '香港科技大學 (HKUST)', logo: 'https://picsum.photos/id/103/40/40' },
  { name: '香港理工大學 (PolyU)', logo: 'https://picsum.photos/id/104/40/40' },
  { name: '香港城市大學 (CityU)', logo: 'https://picsum.photos/id/105/40/40' },
];

export const MARKET_CATEGORIES = [
  { id: 'books', name: '书籍', icon: <Book className="w-4 h-4" /> },
  { id: 'electronics', name: '电子产品', icon: <Cpu className="w-4 h-4" /> },
  { id: 'lifestyle', name: '生活用品', icon: <Coffee className="w-4 h-4" /> },
  { id: 'study', name: '学习工具', icon: <PenTool className="w-4 h-4" /> },
];

export const CAMPUS_SAFE_ZONES = [
  { name: 'HKU Main Library', lat: 22.284, lng: 114.137 },
  { name: 'PolyU Global Student Hub', lat: 22.304, lng: 114.179 },
  { name: 'CUHK University Station', lat: 22.413, lng: 114.210 },
];
