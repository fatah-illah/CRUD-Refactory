const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, default: "Indonesia" },
});

const mySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true, min: 18 },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /^(\+62|62|0)[0-9]{8,15}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Indonesian phone number!`,
      },
    },
    address: {
      type: addressSchema,
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MyModel", mySchema);
