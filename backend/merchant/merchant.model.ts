import * as mongoose from 'mongoose';

const merchantSchema = new mongoose.Schema({
  name: String,
  merchant_no: Number,
  phone_no: Number
});

const Merchant = mongoose.model('Cat', merchantSchema);

export default Merchant;
