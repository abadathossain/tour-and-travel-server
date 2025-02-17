import { Model } from "mongoose";

export interface ITour {
  name: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage: string;
  images: string[];
  startDates: Date[];
  startLocation: string;
  locations: string[];
  slug: string;
}
export interface ITourMethods {
  getNextNearestStartDateAndEndData(): {
    nearestStartDate: Date | null;
    estimatedEndDate: Date | null;
  };
}

type ITourModel = Model<ITour, Record<string, unknown>, ITourMethods>;
export default ITourModel;
