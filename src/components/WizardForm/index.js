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

  const codeValueHandler = (code) => {
    console.log("---codeValue---", code);
    setCodeValue(code);
  }

  return(
    <Wizard
      initialValues={{
        deceasedPerson: [
          { relationType: "" },
        ],
        property: [
          { name: "" , value: ""},
        ],
        bankaccount: [
          { number: "" , value: ""},
        ],
        shareInfo: [
          { number: "" , value: ""},
        ],
        debtInfo: [
          { name: "" , value: ""},
        ],

        widowStockInfo: [
          {
            name: "" , amount: "",
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
          if (!values.firstname) {
            errors.firstname = "This is required field";
          }
          if (!values.lastname) {
            errors.lastname = "This is required field";
          }
          if (!values.address) {
            errors.address = "This is required field";
          }
          if (!values.sotu) {
            errors.sotu = "This is required field";
          }
          if (!values.kuolinaika) {
            errors.kuolinaika = "This is required field";
          }
          if (!values.paika) {
            errors.paika = "This is required field";
          }
          if (values.timeofdeath && !values.timeofdeath) {
            errors.timeofdeath = "This is required field";
          }
          if (values.isTestamentDeceased && !values.deceasedPersonName) {
            errors.deceasedPersonName = "Need to assign some value";
          }
          if (values.isHKIrtaminen && !values.debtInfo.name) {
            errors.debtInfo = "This is required field";
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
