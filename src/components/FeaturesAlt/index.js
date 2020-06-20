import React from "react";

import "./styles.scss";

function FeaturesAlt(props) {
  const [activeId, setActiveId] = React.useState(0);
  return (
    <div className="columns">
      <div className="column">
        <ul>
          {props.items.map((item, index) => (
            <li className="FeaturesAlt__item" key={index}>
              <span
                className={
                  "FeaturesAlt__item-link" +
                  (activeId === index ? " is-active" : "")
                }
                onClick={() => setActiveId(index)}
              >
                <h1 className="title">{item.title}</h1>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="column is-1" />
      <div className="FeaturesAlt__column column">
        {props.items.map((item, index) => (
          <div
            key={index}
            className={
              "FeaturesAlt__content content" +
              (activeId === index ? " is-active" : "")
            }
          >
            <h1 className="title">{item.title}</h1>
            <div className="is-size-5">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesAlt;
