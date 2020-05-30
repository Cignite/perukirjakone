import React from "react";

import "./styles.scss";

function Clients(props) {
  return (
    <div className="columns is-centered is-multiline">
      {props.items.map((item, index) => (
        <div className="Clients__column column is-narrow" key={index}>
          <div className="Clients__image image">
            {/* <svg width="132" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d={item.image} fill="#93A2B3" fillRule="nonzero" />
            </svg> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Clients;
