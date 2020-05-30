import React from "react";

import "./styles.scss";

function Features(props) {
  return (
    <div className="Features">
      {props.items.map((item, index) => (
        <div className="Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile">
          <div className="column is-half" data-v-490538c8="">
            <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
              {item.title}
            </h3>
            <p className="subtitle">{item.description}</p>
          </div>
          <div className="column">
            <img className="Features__no-classname" src={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
