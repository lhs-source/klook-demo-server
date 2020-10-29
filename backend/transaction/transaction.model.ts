import * as mongoose from 'mongoose';

const merchantSchema = new mongoose.Schema({
  type: String,
  class: String,
  merchant: String,
  point: Number,
  curr: Number,
  country: String,
  date: Date,
  description: String,
  taxfree: Boolean,
  utu: Boolean,
  save_point: Number
});

const Transaction = mongoose.model('transaction', merchantSchema);

export default Transaction;
