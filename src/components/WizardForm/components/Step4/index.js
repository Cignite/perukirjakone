import React from 'react';

import { Field } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';

import InputWrapper from '../../../Shared/Input';
import TextareaWrapper from '../../../Shared/Textarea';

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  )
}

const Step4 = () => {
  return (
    <>
    <div className="columns">
      <div className="column is-6">
        <div>
          <Field
            name="verifyInfoProvidedIsCorrect"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="verifyInfoProvidedIsCorrect"
            />
          <label htmlFor="verifyInfoProvidedIsCorrect" className="primary">
            I certify that I have entered all the necessary documents into the perukirjakone and that I have received all the other supporting documents to finalize this process.?
          </label>
        </div>
      </div>
    </div>

    <div className="columns">
      <div className="column is-6">
        <div>
          <Field
            name="haveAllPartiesInvited"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="haveAllPartiesInvited"
            />
          <label htmlFor="haveAllPartiesInvited" className="primary">
            Have all the parties been invited to this estate inventory?
          </label>
        </div>
      </div>
    </div>

    <h3 className="title is-6">The announcement of the widow (1). </h3>
    <div className="columns">
      <div className="column is-6">
        <div>
          <Field
            name="doesWidowWantsToLiveInSameApartment"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="doesWidowWantsToLiveInSameApartment"
            />
          <label htmlFor="doesWidowWantsToLiveInSameApartment" className="primary">
            Does the widow want to remain living in the apartment?
          </label>
        </div>
      </div>
    </div>

    <h3 className="title is-6">Other announcements  (2)  </h3>
    <div className="columns">
      <div className="column is-6">
        <div>
          <Field
            name="isOtherAnnouncement"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="isOtherAnnouncement"
            />
          <label htmlFor="isOtherAnnouncement" className="primary">
            Do you want to make other announcements?
          </label>
        </div>
      </div>
    </div>
    <div className="columns">
      <Condition when="isOtherAnnouncement" is={true}>
        <div className="column is-6">
          <Field
            name="otherAnnouncementDescription"
            component={TextareaWrapper}
            placeholder="other announcement"
            rows="4"
          />
        </div>
      </Condition>
    </div>
    </>
  )
}

export default Step4;
