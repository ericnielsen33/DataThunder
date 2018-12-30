import { observable, action } from "mobx";
import * as api from "../api/Auth";

class UserStore {

    @observable user = null;
    @observable token = null;

    @action registerUser(email, firstName, lastName, password){
        api.registerNewUser(email, firstName, lastName, password)
            .then(data => {
                this.user = data.user;
                this.token = data.token;
                localStorage.setItem("token", data.user.token);
            })
    }

    @action loginUser(email, password){
        api.login(email, password)
            .then(data => {
                this.user = data.user;
                this.token = data.token;
                localStorage.setItem("token", data.user.token);
            });
    }

    @action logoutUser = () => {
        this.user = null;
        this.token = null;
    }
}

export default new UserStore();