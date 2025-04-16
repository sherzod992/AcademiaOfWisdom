import { AnnouncementType } from "../enums/Announcement";

export interface Announcement {
  _id?: string;
  nickName:String,
  Type: AnnouncementType;
  Title: string;
  Description: string;
  Image?: string;
  Views?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
