import { TransferStatus } from "../shared/enums/transferStatus.enum";
import { TransferType } from "../shared/types/Transfer";
import mongoose from "mongoose";
import CryptoJS from "crypto-js";

const TransferSchema = new mongoose.Schema<TransferType>(
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
        // eslint-disable-next-line no-useless-escape
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
      type: Date,
      required: [true, "Please type in a expiration date"],
    },
    viewedDate: {
      type: Date,
      default: undefined,
    },
    statusUpdated: {
      type: Boolean,
      default: false,
    },
    requestCode: Number,
    expiredRequestCode: Date,
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

const Transfer = mongoose.model<TransferType>("Transfer", TransferSchema);

export default Transfer;
