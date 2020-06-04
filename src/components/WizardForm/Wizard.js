import React, { useState, useMemo, useCallback } from "react";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { Form } from "react-final-form";
import { Typography, Button } from "@material-ui/core";
import arrayMutators from "final-form-arrays";

const WizardForm = ({ page, initialValues, children, onSubmit }) => {
  const [state, setState] = useState({
    values: initialValues || {},
    page: page || 0
  });

  const activePage = useMemo(
    () => React.Children.toArray(children)[state.page],
    [state.page, children]
  );

  const isLastPage = useMemo(
    () => state.page === React.Children.count(children) - 1,
    [state.page, children]
  );

  const onNextStep = useCallback(
    values =>
      setState({
        page: Math.min(state.page + 1, children.length - 1),
        values
      }),
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
    values => (isLastPage ? onSubmit(values) : onNextStep(values)),
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
                <button className="button is-outlined" type="button" onClick={onBackStep}>
                  « Previous
                </button>
              )}
              {!isLastPage && (
                <button className="button is-dark next__btn" type="submit">
                  Next »
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
        {idx === 0 && (<StepLabel>Email</StepLabel>)}
        {idx === 1 && (<StepLabel>Verification</StepLabel>)}
        {idx === 2 && (<StepLabel>Customer info</StepLabel>)}
        {idx === 3 && (<StepLabel>Inventory</StepLabel>)}
        {idx === 4 && (<StepLabel>Marriage</StepLabel>)}
        {idx === 5 && (<StepLabel>Review</StepLabel>)}
        {idx === 6 && (<StepLabel>Submit</StepLabel>)}
      </Step>
    ))}
  </Stepper>
);

export default WizardForm;
