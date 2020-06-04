import React from "react";

const Header = ({ index, steps }) => {
  return (
    <div>
      <ul className="step-wizard">
        {steps.map((stepName, mapIndex) => {
          let iconClass =
            index === mapIndex
              ? "fa fa-circle"
              : index > mapIndex
              ? "fa fa-check"
              : "far fa-circle";

          let stepClass =
            index === mapIndex ? "active" : index > mapIndex ? "complete" : "";

          return (
            <li className={stepClass}>
              <i className={iconClass} />
              <p class="step-text">{stepName.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
