import { model, Schema } from "mongoose";
import { ITour } from "./tour.interface";
import e from "express";

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    required: true,
  },
  durationHours: {
    type: Number,
    required: true,
  },
  averageRating: {
    type: Number,
    default: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  coverImage: { type: String, required: true },
  images: [String],
  startDates: [Date],
  startLocation: { type: String },
  locations: [String],
  slug: String,
});
tourSchema.methods.getNextTour = function () {
  const today = new Date();
  const nextTour = this.startDates.filter((startDate: Date) => {
    return startDate > today;
  });
  nextTour.sort((a: Date, b: Date) => {
    return a.getTime() - b.getTime();
  });
  const nextTourDate = nextTour[0];
  const estimatedTime = new Date(
    nextTourDate.getTime() + this.durationHours * 60 * 60 * 1000
  );

  return {
    nextTourDate,
    estimatedTime,
  };
};

export const Tour = model<ITour>("Tour", tourSchema);
