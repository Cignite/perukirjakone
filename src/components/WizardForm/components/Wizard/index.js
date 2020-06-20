import React, { useState, useMemo, useCallback } from "react";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { Form } from "react-final-form";
import { Typography } from "@material-ui/core";
import arrayMutators from "final-form-arrays";
import axios from 'axios';

const API_BASE_URL = "https://perukirjakone.herokuapp.com/";

const WizardForm = ({ page, initialValues, children, onSubmit, codeValueHandler }) => {
  const [state, setState] = useState({
    values: initialValues || {},
    page: page || 0
  });
  const [showLoader, setShowLoader] = useState(false);
  // const [updateJsonSchemaError, setUpdateJsonSchemaError] = useState(false);

  const postJSONSchema = async (payload) => {
    const getUserInfoFromStorage = JSON.parse(window.localStorage.getItem('userInfo'));
    const jsonSchemaPayload = {
      jsonSchema: payload
    }
    try {
      setShowLoader(true);
      await axios.put(`${API_BASE_URL}${'documents/'}${getUserInfoFromStorage.id}`, { ...jsonSchemaPayload })
        .then(res => {
          setShowLoader(false);
        })

    } catch (error) {
      console.log("error", error)
      // setUpdateJsonSchemaError(error.response.payload.message[0].messages[0].message);
    }
  }

  const activePage = useMemo(
    () => React.Children.toArray(children)[state.page],
    [state.page, children]
  );

  const isLastPage = useMemo(
    () => state.page === React.Children.count(children) - 1,
    [state.page, children]
  );

  const onNextStep = useCallback(
    values => {
      postJSONSchema(values);
      setState({
        page: Math.min(state.page + 1, children.length - 1),
        values
      })},
    [state.page, children]
  );

  const onBackStep = useCallback(
    () =>
      setState({
        page: Math.max(state.page - 1, 0),
        values: state.values
      }),
    [state]
  );

  const validate = useCallback(
    values =>
      activePage.props.validate ? activePage.props.validate(values) : {},
    [activePage]
  );

  const handleSubmit = useCallback(
    values => (isLastPage ? onSubmit(values) : onNextStep(values) ),
    [isLastPage, onSubmit, onNextStep]
  );

  return (
    <React.Fragment>
      <WizardForm.Stepper
        activeStep={state.page}
        totalSteps={React.Children.count(children)}
      />
      <Form
        validate={validate}
        onSubmit={handleSubmit}
        initialValues={state.values}
        mutators={{
          ...arrayMutators,
        }}
      >
        {({ handleSubmit, submitting, values, form: { mutators } }) => (
          <form onSubmit={handleSubmit}>
            <div className="form__footer_buttons">
              {activePage}
              {state.page > 0 && (
                <button className="button is-outlined" type="button" onClick={onBackStep} disabled={showLoader}>
                  « Previous
                </button>
              )}
              {!isLastPage && (
                <button className="button is-dark next__btn" type="submit" disabled={showLoader}>
                  {showLoader ? <span>Loading</span> : <span>Save and continue »</span>}
                </button>
              )}
              {isLastPage && (
                <button className="button is-dark next__btn" type="submit" disabled={submitting}>
                  Submit
                </button>
              )}
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    </React.Fragment>
  );
};

WizardForm.Step = ({ children }) => children;

WizardForm.Title = ({ text }) => (
  <Typography variant="h4" align="center">
    {text}
  </Typography>
);

WizardForm.Stepper = ({ activeStep, totalSteps }) => (
  <Stepper alternativeLabel activeStep={activeStep}>
    {new Array(totalSteps).fill(totalSteps).map((_, idx) => (
      <Step key={idx}>
        {idx === 0 && (<StepLabel>Customer Info</StepLabel>)}
        {idx === 1 && (<StepLabel>Funeral expenses</StepLabel>)}
        {idx === 2 && (<StepLabel>Marriage</StepLabel>)}
        {idx === 3 && (<StepLabel>Review</StepLabel>)}
        {idx === 4 && (<StepLabel>Submit</StepLabel>)}
      </Step>
    ))}
  </Stepper>
);

export default WizardForm;
