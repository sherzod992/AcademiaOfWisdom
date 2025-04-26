export interface LessonInput {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl?: string;
    category: string;
    price: number;
    isFree?: boolean;
    duration: number; // sekund
    teacher: string; // teacherId
  }
  
  export interface LessonUpdateInput {
    title?: string;
    description?: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    category?: string;
    price?: number;
    isFree?: boolean;
    duration?: number;
  }
  
  export interface LessonResponse {
    _id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl?: string;
    category: string;
    price: number;
    isFree: boolean;
    duration: number;
    viewCount: number;
    teacher: {
      _id: string;
      name: string;
      email: string;
    };
    createdAt: string;
    updatedAt: string;
  }
  
