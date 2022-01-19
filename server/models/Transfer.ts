import { TransferDto } from "../shared/types/Transfer";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const TransferSchema = new mongoose.Schema<TransferDto>(
  {
    accessId: {
      type: String,
      required: true,
      unique: true,
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
  },
  { timestamps: true }
);

TransferSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);

  this.password = hash;

  next();
});

const Transfer = mongoose.model<TransferDto>("Transfer", TransferSchema);

export default Transfer;
