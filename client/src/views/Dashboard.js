import React, { Component } from "react";
import PatientList from "../components/Patients/PatientList";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <PatientList />
            </div>
        );
    }
}

export default Dashboard;