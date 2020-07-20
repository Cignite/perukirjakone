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
              title: "Sukuselvitykset",
              description: "Ne saa tilattua kuolinpaikan seurakunnasta tai Digi- ja väestövirastosta (entinen maistraatti).",
              link: " Lien n°1",
              src: "#"
            },
            {
              title: "Uskotut miehet",
              description: "Uskotuista miehistä toinen käytännössä laatii perukirjan ja toinen on siinä mukana. Ystävät tai naapurit voivat olla uskottuina miehinä. Vanhainkodin vastuussa olevat henkilöt voivat myös toimittaa perunkirjoituksen, he ovat silloin uskottuja miehiä.",
              link: " Lien n°2",
              src: "#"
            },
            {
              title: "Perilliset",
              description: "Vainajan perilliset ovat joko lapset tai vanhemmat, joissakin tapauksissa muut sukulaiset mutta ei kuitenkaan serkut. Lapsettomissa avioliitoissa perillisinä on usein jälkeenjäänyt puoliso.",
              link: " Lien n°3",
              src: "#"
            },
            {
              title: "Omaisuus",
              description: "Vainajalta jäänyt omaisuus, jota arvioidaan kuolinhetken mukaan",
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
