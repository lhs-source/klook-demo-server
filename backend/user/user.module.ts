import set_user_route from "./user.route";

export default function set_user_api(app){
    app.use("/api", set_user_route());

}