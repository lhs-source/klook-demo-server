import rule_router from "./bankbe_rule.route";

export default function set_rule_api(app){
    app.use("/api/rule", rule_router);

}