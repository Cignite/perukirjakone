import React from "react";

import "./styles.scss";

function Testimonials(props) {
  return (
    <div className="columns is-multiline is-centered">
      {props.items.map((item, index) => (
        <div className="Testimonials__column column" key={index}>
          <div className="Testimonials__card card">
            <div className="Testimonials__card-content card-content has-text-centered">
              <p className="Testimonials__quote">"{item.bio}"</p>
              <div className="Testimonials__info">
                <div className="has-text-weight-bold">{item.name}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
