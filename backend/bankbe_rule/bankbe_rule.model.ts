import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

// Rule 스키마
const ruleSchema = new mongoose.Schema({
    category: String,
    bank:String,
    priority:String,
    conditions: Object,
    // {
    //     sample:String,
    //     regex:String,
    //     amount:{
    //         modifier:String,
    //         sign1:String,
    //         balance1:Number,
    //         sign2:String,
    //         balance2:Number,
    //     }
    // },
});

const Rule = mongoose.model('rule', ruleSchema);

export default Rule;
