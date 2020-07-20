import React from "react";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <section className="section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title is-spaced is-2 has-text-weight-bold">
            Perukirjakoneen käyttämisen hyödyt
          </h1>
          <h2 className="FeaturesSection__subtitle subtitle">
            Digitaalinen palvelu perunkirjoituksen toimittamiseen
          </h2>
        </header>
        <Features
          items={[
            {
              title: "Helposti",
              description:
                "Olemme jo tehneet Turun toimistolla satoja perukirjoja vuodesta 2010 alkaen. Haluamme tarjota tämän saman mahdollisuuden nyt muualle Suomeen. Helposti kodissasi tai toimistolla oman tietokoneesi avulla.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/mind_map_cwng.svg"
            },
            {
              title: "Vaivattomasti",
              description:
                "Perukirjan laatiminen ei tosiaan ole rakettitiedettä. Perukirjassa pitää ilmoittaa vainajan ja mahdollisesti puolison varat ja velat sekä hautajaisiin ja pesän selvittämiseen liittyvät kustannukset ym. Palvelullamme voi aloittaa perukirjan laatimisen ja sitä voi myöhemmin jatkaa.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_settings_kihd.svg"
            },
            {
              title: "Edullisesti",
              description:
                "Tavallisesti perukirjan laatiminen maksaa satoja euroja. Pankeissa vielä sitäkin enemmän. Perukirjakoneella sen voi laatia pienillä kustannuksilla itse. Palvelumme maksaa 30 euroa.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/having_fun_iais.svg"
            }
          ]}
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
