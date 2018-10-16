import { observable, action } from "mobx";

class Patient {
    @observable id;
    @observable firstName;
    @observable lastName;
    @observable dateofBirth;
    @observable team;
}
export default Patient;