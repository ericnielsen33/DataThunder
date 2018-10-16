import { observable, action } from "mobx";
import { login, registerNewUser } from "../api/Auth";

class UserStore {

    @observable user = null;
    @observable token = null;

    @action registerUser(email, firstName, lastName, password){
        registerNewUser(email, firstName, lastName, password)
            .then(data => {
                this.user = data.user;
                this.token = data.token;
                localStorage.setItem("token", data.user.token);
            })
    }

    @action loginUser(email, password){
        login(email, password)
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