import React from "react";

import { Field } from "react-final-form";

import TextareaWrapper from "../../../Shared/Textarea";

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  );
};

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
              Vakuutan, että perunkirjoitusta varten antamani tiedot ovat oikeat
              ja etten tahallisesti ole jättänyt mitään ilmoittamatta.
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
              Ovatko kaikki kuolinpesän osakkaat kutsuttu tähän
              perunkirjoitustilaisuuteen?
            </label>
          </div>
        </div>
      </div>

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
            <label
              htmlFor="doesWidowWantsToLiveInSameApartment"
              className="primary"
            >
              Ilmoitus siitä, tuleeko leski pitämään hallinnassaan kuolleen
              puolison jäämistön jakamattomana osittain (esimerkiksi yhteinen
              koti) tai kokonaan?
            </label>
          </div>
        </div>
      </div>

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
              Muuta ilmoitettavaa
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
  );
};

export default Step4;
