import React, { useState, useEffect } from "react";
// import { Prompt } from 'react-router-dom';
import axios from 'axios';

import Wizard from "./components/Wizard";
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';


import './styles.scss';

const API_BASE_URL = "https://perukirjakone.herokuapp.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

// const required = value => (value ? undefined : "Required");
//
// const Condition = ({ when, is, children }) => {
//   return (
//     <Field name={when} subscription={{ value: true }}>
//       {({ input: { value } }) => (value === is ? children : null)}
//     </Field>
//   )
// }

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

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  //   if (userInfo) {
  //     if(userInfo.email && userInfo.code) {
  //       props.history.push('/wizard-form')
  //     }
  //   }
  // }, [])
  //

  const getJSONSchema = async (payload) => {
    const getUserInfoFromStorage = JSON.parse(window.localStorage.getItem('userInfo'));
    try {
      await axios.get(`${API_BASE_URL}${'documents/'}${getUserInfoFromStorage.id}`)
        .then(res => {
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
                errors.customerFirstName = "This is required field";
              }
              if (!values.customerlastName) {
                errors.customerlastName = "This is required field";
              }
              if (!values.address) {
                errors.address = "This is required field";
              }
              if (!values.customerSSN) {
                errors.customerSSN = "This is required field";
              }
              if (!values.customerTimeOfDeath) {
                errors.customerTimeOfDeath = "This is required field";
              }
              if (!values.agreeementPlace) {
                errors.agreeementPlace = "This is required field";
              }
              if (!values.shareholderName) {
                errors.shareholderName ="This is required field";
              }
              if (!values.shareholderSSN) {
                errors.shareholderSSN ="This is required field";
              }
              if (values.isTestamenttiChecked && !values.testamenttiTimeOfDeath) {
                errors.testamenttiTimeOfDeath = "This is required field";
              }
              if (values.isMarriedSettlementContractChecked && !values.marriageSettlementDate) {
                errors.marriageSettlementDate = "This is required field";
              }
              if (values.isOtherDocumentChecked && !values.otherDocumentInfo) {
                errors.otherDocumentInfo = "This is required field";
              }
              if (values.isTestamentDeceasedPropertyAssignedChecked && !values.testamentPropertyAssignInfo) {
                errors.testamentPropertyAssignInfo = "This is required field";
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
        <p>Loading document schema...</p>
      )}
    </div>
  )
}

export default StepWizard;
