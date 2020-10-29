import * as mongoose from 'mongoose';

const merchantSchema = new mongoose.Schema({
  name: String,
  merchant_no: String,
  phone_no: Number
});

const Merchant = mongoose.model('merchants', merchantSchema);

export default Merchant;
