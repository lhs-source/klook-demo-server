import * as mongoose from 'mongoose';

const merchantSchema = new mongoose.Schema({
  name: String,
  merchant_no: String,
  phone_no: Number
});

const Merchant = mongoose.model('Merchant', merchantSchema);

export default Merchant;
