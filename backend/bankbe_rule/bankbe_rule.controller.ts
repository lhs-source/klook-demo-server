import * as jwt from 'jsonwebtoken';

import Rule from './bankbe_rule.model';
import BaseContrlloer from '../base.controller';

export default class BankbeRuleController extends BaseContrlloer {
    model = Rule;
}