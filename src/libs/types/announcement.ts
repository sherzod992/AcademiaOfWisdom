export interface IAnnouncementInput {
    title: string;          // E'lonning sarlavhasi
    description: string;    // E'lonning tavsifi
    date: Date;             // E'lonning sanasi
    createdBy: string;      // E'lonni kim yaratgan
  }
  export interface IAnnouncement {
    title: string;          // E'lonning sarlavhasi
    description: string;    // E'lonning tavsifi
    date: Date;             // E'lonning sanasi
    createdBy: string;      // E'lonni kim yaratgan (admin yoki boshqa foydalanuvchi)
    createdAt?: Date;       // Yaratilish sanasi (automatik tarzda MongoDB tomonidan o'rnatiladi)
    updatedAt?: Date;       // So'ngi yangilanish sanasi (automatik tarzda MongoDB tomonidan o'rnatiladi)
  }