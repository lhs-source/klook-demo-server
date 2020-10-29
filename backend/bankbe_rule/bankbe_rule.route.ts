import * as express from 'express';

import BankbeRuleController from "./bankbe_rule.controller";

let rule_router = express.Router();
let rule = new BankbeRuleController();

rule_router.get('/', rule.getAll)
    .post('/', rule.insert);
rule_router.get('/count', rule.count);
rule_router.get('/:id', rule.get)
    .put('/:id', rule.update)
    .delete('/:id', rule.delete);
export default rule_router;