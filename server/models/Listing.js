
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const listingSchema = new Schema(
  {
    listingText: {
      type: String,
      required: 'You need to leave a listing!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Listing = model('Listing', listingSchema);

module.exports = Listing;
