import { observable, action } from "mobx";
import { Facility } from "./Facility";


class OrganizationStore {
    @observable id = null;
    @observable name = '';
    @observable facilities = new Object();
    @observable users = new Object();

}
export default new OrganizationStore();