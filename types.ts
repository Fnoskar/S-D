export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}