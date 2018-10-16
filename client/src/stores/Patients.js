import { observable, action } from "mobx";
import { createPatient } from "../api/Patients";
import Patient  from "./Patient";

class PatientStore {
    @observable isLoading = false;
    @observable patients = [
        { id: '001', firstName: "Eric"},
        { id: '002', firstName: "Ryan" }
    ];

    @action getPatientById(id) {
        return this.patients.filter(patient => {
            return patient.id === id;
        })
    }

    @action addPatient(newPatient) {
        const patient = new Patient();
        Object.assign(patient, newPatient);
        createPatient(patient).then((patient) => {
            this.patients.push(patient);
        });
    }
}

export default new PatientStore();