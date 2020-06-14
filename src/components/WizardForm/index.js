import React from "react";
import { render } from "react-dom";
import { Field } from "react-final-form";


import Wizard from "./components/Wizard";
import Error from '../Shared/Error';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';


import './styles.scss';

import initialValuesData from './initialValues';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : "Required");

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  )
}

const StepWizard = () => {
  const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);
  const [showPropertyNotification, setShowPropertyNotification] = React.useState(false);
  const [showBankAccountNotification, setShowBankAccountNotification] = React.useState(false);
  const [showShareInfoNotification, setShowShareInfoNotification] = React.useState(false);
  const [showPaintingInfo, setShowPaintingInfo] = React.useState(false);
  const [showDebtNotifcation, setShowDebtNotifcation] = React.useState(false);
  const [showFuneralExpensesInfo, setShowFuneralExpensesInfo] = React.useState(false);
  const [showWidowBankInfo, setShowWidowBankInfo] = React.useState(false);
  const [codeValue, setCodeValue] = React.useState("");

  return(
    <Wizard
      initialValues={{
        deceasedPerson: [
          { relationType: "" },
        ],
        propertyInfo: [
          {
            name: "",
            value: ""
          },
        ],
        bankAccountInfo: [
          {
            number: "" ,
            value: ""
          },
        ],
        shareInfo: [
          {
            number: "",
            value: ""
          },
        ],
        debtInfo: [
          {
            name: "",
            value: ""
          },
        ],
        propertyLikeSofaWatchInfo: [
          {
            name: "",
            value: ""
          }
        ],
        personalBelongingsInfo: [
          {
            name: "",
            value: ""
          }
        ],
        widowStockInfo: [
          {
            name: "",
            amount: "",
          }
        ],
        FESukuselvitykset: [
          {
            sukuselvitykset: ""
          }
        ],
        otherExpenses: [
          {
            info: ""
          }
        ],
        whoWasPresent: [
          {
            name: "",
            city: ""
          }
        ],
        widowPersonalBelonings: [
          {
              name: "",
              value: "",
          }
        ],
        widowProperty: [
          {
            name: "",
            value:""
          }
        ],
        widowBankInfo: [
          {
            name: "",
            value: "",
          }
        ],
        widowBankAccountInfo: [
          {
            number: "",
            value: ""
          }
        ]
      }}
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
    </Wizard>
  )
}

export default StepWizard;
