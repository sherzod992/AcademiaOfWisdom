
import AnnouncementSchema from "../schema/Announcement-schema";
import { IAnnouncementInput,IAnnouncement } from "../libs/types/announcement";
class AnnouncementService {
  private readonly announcementSchema;
  constructor() {
    this.announcementSchema = AnnouncementSchema;
  }

  public async createAnnouncement(input: IAnnouncementInput): Promise<IAnnouncement> {
    console.log("AnnouncementService: createAnnouncement ishladi");
    const newAnnouncement = new this.announcementSchema(input);
    await newAnnouncement.save();
    return newAnnouncement;
  }

  public async getAllAnnouncements(): Promise<IAnnouncement[]> {
    console.log("AnnouncementService: getAllAnnouncements ishladi");
    const announcements = await this.announcementSchema.find().exec();
    if (!announcements.length) throw new Error("E'lonlar topilmadi");
    return announcements;
  }
  public async delateAnnouncement(id: string): Promise<IAnnouncement | null> {
    console.log("AnnouncementService: delateAnnouncement ishladi");
    const announcement = await this.announcementSchema.findByIdAndDelete(id).exec();
    if (!announcement) throw new Error("E'lon topilmadi");
    return announcement;
  }
}
export default AnnouncementService;