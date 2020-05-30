import React from "react";

import "./styles.scss";

//C plus pricing mais mtn FAQ ici.

function Pricing(props) {
  return (
    <div className="is-multiline is-centered">
      {props.items.map(item => (
        <div className="Pricing__column column">
          <div
            className={
              "Pricing__card card" +
              (item.emphasized === true ? " emphasized" : "")
            }
          >
            <div className="Pricing__card-content card-content">
              <div className="Pricing__period has-text-weight-bold">
                {item.timespan}
              </div>
              <div className="Pricing__price has-text-weight-bold">
                <span>{item.ListeJob}</span>
              </div>
              <p className="Pricing__description">{item.description}</p>
              {/* <button
                className={
                  "Pricing__button button is-medium" +
                  (item.emphasized ? " is-link is-inverted" : "") +
                  (!item.emphasized ? " is-primary" : "")
                }
              >
                button
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
