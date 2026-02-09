
export enum Page {
  Home = 'home',
  Market = 'market',
  Knowledge = 'knowledge',
  Errands = 'errands',
  Points = 'points',
  Profile = 'profile'
}

export interface User {
  id: string;
  name: string;
  email: string;
  university: string;
  points: number;
  isVerified: boolean;
  avatar?: string;
}

export interface MarketItem {
  id: string;
  title: string;
  price: number;
  category: 'books' | 'electronics' | 'lifestyle' | 'study';
  condition: string;
  image: string;
  location: string;
  sellerId: string;
}

export interface KnowledgeDoc {
  id: string;
  title: string;
  faculty: string;
  major: string;
  summary?: string;
  rating: number;
  price: number;
  uploader: string;
}

export interface ErrandTask {
  id: string;
  type: 'delivery' | 'purchase' | 'pickup';
  title: string;
  reward: number;
  status: 'pending' | 'ongoing' | 'completed';
  location: string;
  anonymousName: string;
}

export enum TaskStatus {
  Pending = 'pending',
  Ongoing = 'ongoing',
  Completed = 'completed'
}
