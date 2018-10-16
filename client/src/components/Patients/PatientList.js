import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import List from "@material-ui/core/List";
import PatientListItem from "./patientListItem"

@inject(["patientStore"])
@observer class PatientList extends Component {

  constructor(props){
    super(props)
    this.renderPatients = this.renderPatients.bind(this)
  }
  renderPatients(patientStore) {
    return patientStore.patients.map(patient => {
      return <li key={patient.id}>{patient.firstName}</li>;
    });
  }

  render() {
    const { patientStore } = this.props;
    return <List>{this.renderPatients(patientStore)}</List>;
  }
}

export default PatientList;
