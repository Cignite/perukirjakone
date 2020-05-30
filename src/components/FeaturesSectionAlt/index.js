import React from "react";
import FeaturesAlt from "./../FeaturesAlt";
import "./styles.scss";

function FeaturesSectionAlt(props) {
  return (
    <section className="FeaturesSectionAlt section is-medium">
      <div className="FeaturesSectionAlt__container container">
        <FeaturesAlt
          items={[
            {
              title: "Inventory",
              description: "Here is inventory details",
              link: " Lien n°1",
              src: "#"
            },
            {
              title: "Trusted men",
              description: " Description of trusted men",
              link: " Lien n°2",
              src: "#"
            },
            {
              title: "Inheritance ",
              description: "Who inherits whats and blah blah",
              link: " Lien n°3",
              src: "#"
            },
            {
              title: "Property",
              description: "House, apartment, car, boat description",
              link: " Lien n°4",
              src: "#"
            }
          ]}
        />
      </div>
    </section>
  );
}

export default FeaturesSectionAlt;
