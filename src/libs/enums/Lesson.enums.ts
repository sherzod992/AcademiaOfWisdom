// enums/lesson.enum.ts
export enum LessonStatus {
    PAID = 'paid',   // To'lov amalga oshirilgan dars
    FREE = 'free',   // Bepul dars
    INACTIVE = 'inactive',   // Dars mavjud, ammo faol emas (yopilgan yoki to'xtatilgan)
}

export enum LessonCollection {
    VIDEO = 'video',   // Video dars
    TEXT = 'text',     // Matnli dars
    PDF = 'pdf',       // PDF formatidagi dars
}
export enum LessonCategory {
    DEVELOPMENT = "development",
    DESIGN = "design",
    MARKETING = "marketing",
    BUSINESS = "business"
  }
  
  export enum LessonStatus {
    DRAFT = "draft",
    PUBLISHED = "published",
    ARCHIVED = "archived"
  }
