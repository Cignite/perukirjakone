import React, { useState, useEffect } from "react";
// import { Prompt } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import Wizard from "./components/Wizard";
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';

import './styles.scss';

const API_BASE_URL = "https://perukirjakoneserver.herokuapp.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};


const StepWizard = () => {
  // const [showDeceasedNotification, setShowDeceasedNotification] = useState(false);
  // const [showPropertyNotification, setShowPropertyNotification] = useState(false);
  // const [showBankAccountNotification, setShowBankAccountNotification] = useState(false);
  // const [showShareInfoNotification, setShowShareInfoNotification] = useState(false);
  // const [showPaintingInfo, setShowPaintingInfo] = useState(false);
  // const [showDebtNotifcation, setShowDebtNotifcation] = useState(false);
  // const [showFuneralExpensesInfo, setShowFuneralExpensesInfo] = useState(false);
  // const [showWidowBankInfo, setShowWidowBankInfo] = useState(false);
  // const [codeValue, setCodeValue] = useState("");
  //const [shouldRoute, setShouldRoute] = useState(false);
  const [jsonSchemaData, setJsonSchemaData] = useState(null);

  const getJSONSchema = async (payload) => {
    const getUserInfoFromStorage = JSON.parse(window.localStorage.getItem('userInfo'));
    try {
      await axios.get(`${API_BASE_URL}${'documents/'}${getUserInfoFromStorage.id}`)
        .then(res => {
          console.log("res.data.jsonSchema", res.data.jsonSchema)
          setJsonSchemaData(res.data.jsonSchema);
        })
    } catch (error) {
      console.log("error", error);
      //setUpdateJsonSchemaError(error.response.payload.message[0].messages[0].message);
    }
  }

  useEffect(() => {
    getJSONSchema();
  }, []);

  return(
    <div>
      {jsonSchemaData ?
        <Wizard
          initialValues={jsonSchemaData}
          onSubmit={onSubmit}
        >
          <Wizard.Step
            validate={values => {
              const errors = {};
              if (!values.customerFirstName) {
                errors.customerFirstName = "Tämä on pakollinen kenttä";
              }
              if (!values.customerlastName) {
                errors.customerlastName = "Tämä on pakollinen kenttä";
              }
              if (!values.address) {
                errors.address = "Tämä on pakollinen kenttä";
              }
              if (!values.customerSSN) {
                errors.customerSSN = "Tämä on pakollinen kenttä";
              }
              if (!values.customerTimeOfDeath) {
                errors.customerTimeOfDeath = "Tämä on pakollinen kenttä";
              }
              if (!values.agreeementPlace) {
                errors.agreeementPlace = "Tämä on pakollinen kenttä";
              }
              if(values.relationshipInfo.length === 0) {
                errors.relationshipInfo = "Tämä on pakollinen kenttä";
              }
              if(!values.inviteeName) {
                errors.inviteeName = "Tämä on pakollinen kenttä";
              }
              if(!values.inviteePlace) {
                errors.inviteePlace = "Tämä on pakollinen kenttä";
              }
              if(!values.inviteeDate) {
                errors.inviteeDate = "Tämä on pakollinen kenttä";
              }
              if (!values.trustedMenNameFirst)  {
                errors.trustedMenNameFirst = "Tämä on pakollinen kenttä";
              }
              if (!values.trustedMenPlaceFirst) {
                errors.trustedMenPlaceFirst = "Tämä on pakollinen kenttä";
              }
              if (!values.trustedMenNameSecond)  {
                errors.trustedMenNameSecond = "Tämä on pakollinen kenttä";
              }
              if (!values.trustedMenPlaceSecond) {
                errors.trustedMenPlaceSecond = "Tämä on pakollinen kenttä";
              }
              return errors;
            }}
          >
            <Step1 />
          </Wizard.Step>
          <Wizard.Step>
            <Step2 />
          </Wizard.Step>
          <Wizard.Step>
            <Step3 />
          </Wizard.Step>
          <Wizard.Step>
            <Step4 />
          </Wizard.Step>
          <Wizard.Step>
            <Step5 />
          </Wizard.Step>
          <Wizard.Step>
            <Step6 />
          </Wizard.Step>
        </Wizard>
      : (
        <p>Preparing document data...</p>
      )}
    </div>
  )
}

export default StepWizard;
