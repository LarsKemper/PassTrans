import { TransferStatus } from "./../../client/src/shared/enums/TransferStatus.enum";
import { TransferDto } from "../shared/types/Transfer";
import mongoose from "mongoose";
import CryptoJS from "crypto-js";

const TransferSchema = new mongoose.Schema<TransferDto>(
  {
    accessId: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      default: TransferStatus.ACTIV,
    },
    creatorIP: {
      type: String,
    },
    visitorIP: {
      type: [String],
    },
    firstName: {
      type: String,
      required: [true, "Please type in a first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please type in a last name"],
    },
    email: {
      type: String,
      required: [true, "Please type in a email"],
      validate: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Please type in a valid email.",
      ],
    },
    password: {
      type: String,
      required: [true, "Please type in a password"],
    },
    country: {
      type: String,
      required: [true, "Please type in a country"],
    },
    expirationDate: {
      type: String,
      required: [true, "Please type in a expiration date"],
    },
    isViewed: {
      type: Boolean,
      default: false,
    },
    viewedDate: {
      type: Date,
      default: undefined,
    },
  },
  { timestamps: true }
);

TransferSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const HASH_KEY: string = process.env.HASH_KEY as string;
  const hash = CryptoJS.AES.encrypt(this.password, HASH_KEY).toString();
  this.password = hash;

  next();
});

const Transfer = mongoose.model<TransferDto>("Transfer", TransferSchema);

export default Transfer;
