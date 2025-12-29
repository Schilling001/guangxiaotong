export interface Project {
  id: number;
  title: string;
  description: string;
  budget: string;
  duration: string;
  imageUrl: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  costTip: string;
  icon: string; // Iconify icon name
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
  percentage: string;
  icon: string; // Iconify icon name
}

export interface Client {
  id: number;
  name: string;
  icon: string; // Iconify icon name
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

export type TabCategory = 'retail' | 'food' | 'tech' | 'estate';