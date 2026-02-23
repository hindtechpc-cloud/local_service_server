import mongoose from "mongoose";

const serviceProviderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    about: {
      type: String,
    },
    phone: {
      type: Number,
      required: [true, "phone number is required"],
      unique: [true, "This phone number is already in use"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "This Email is already in use"],
    },
    profilePicture: {
      type: String,
    },
    services: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: [true, "service is required"],
    },
    password: {
      type: String,
      required: [true],
    },
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],

    availbility: {

    },
    bookedSlot:{

    }
  },

  {
    timestamps: true,
  },
);

export const ServiceProvider = mongoose.model(
  "serviceProvider",
  serviceProviderSchema,
);
