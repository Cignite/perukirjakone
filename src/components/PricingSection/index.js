import React from "react";
import Pricing from "./../Pricing";
import "./styles.scss";

function PricingSection(props) {
  return (
    <section className="section is-medium" id="pricing">
      <div className="PricingSection__container container">
        <header className="section-header">
          <h1 className="title">UKK</h1>
        </header>
        <Pricing
          items={[
            {
              timespan: "Kuinka voin laatia Perukirjakoneella perukirjan?",
              description: "Täytä kysyttävät tai puuttuvat kohdat ja noudata annettuja ohjeita. Ohjeet Perukirjakoneen käyttöä varten!",
              faq: [
                {
                  item: "Tilaa tarvittavat sukuselvitykset joko seurakunnnilta tai dvv.fi:stä."
                },
                {
                  item: "Vastaanota kaikki tarvittavat sukuselvitykset."
                },
                {
                  item: "Hankittava vainajan ja puolison pankkitilien saldotiedot (kuolinpäivältä)."
                },
                {
                  item: "Hankittava osakkeiden ja rahastojen yms saldotiedot kuolinpäivältä."
                },
                {
                  item: "Hankitaan kiinteistöjen omistustiedot, ne saadaan parhaiten kiinteistö-veroilmoituksesta."
                },
                {
                  item: "Jos vainajalla on autoja, niiden arvot on selvittävä ennen perunkirjoitusta."
                },
                {
                  item: "Uskotut miehet arvioivat irtaimen omaisuuden arvon, yli 4.000 euron omaisuus pitää ilmoittaa."
                },
                {
                  item: "Myös kaikki muu raha-arvoinen omaisuus tulee ilmoittaa (myös muut mahdolliset kuolinpesäosuudet)."
                },
                {
                  item: "Mahdollinen testamentti pitää olla tiedossa."
                },
                {
                  item: "Mahdollinen avioehtosopimus pitää olla tiedossa."
                },
                {
                  item: "Henkivakuutuskorvaukset pitää selvittää ."
                },
              ]

            },
            {
              timespan: "Voiko perukirjakoneen käytön keskeyttää?",
              price: "29",
              ListeJob: "",
              description:
                "Käytön voi keskeyttää. Aluksi palvelun käyttäjä ilmoittaa sähköpostiosoitteensa ja hyväksyy käyttöehdot, tämän jälkeen ilmoittajalle lähetetään lyhyt käyttämiseen oikeuttava koodi. Jos koodi ei ilmesty saapuneisiin viesteihin, kannattaa myös tarkastaa sähköpostisi roskaposti. Palveluun pääsee sisään annetulla koodilla, joka kirjoitetaan sähköpostiosoitteen alapuolelle sisäänkirjoitus-sivulla. Jos jatkat palvelun käyttämistä myöhemmin, niin sinun pitää ennen lopettamista tallentaa jo annetut tiedot sivun oikeassa alareunassa olevaa “tallenna ja etene” painiketta klikkaamalla. Muista aina, että perukirja pitää tehdä 3 kuukauden kuluessa vainajan kuolemasta ja toimittaa sen jälkeen se perunkirjoituspäivästä 1 kuukauden kuluessa verottajalle.",
              emphasized: true
            },
            {
              timespan: "Lakitiedot",
              ListeJob: "",
              description: "Perukirjakoneen käyttämisellä ei voi missään tapauksessa siirtää perunkirjoituksen oikeiden tietojen antamisvelvollisuutta perukirjakone -ohjelman laatijalle tai sen julkaisijalle. Verottajalle annettuun perukirjaan voi perunkirjoituksen jälkeen lisätä puuttuvia tai muuttuneita tietoja."
            },
            {
              timespan: "Lisää tietoa yrityksestä",
              ListeJob: "",
              description:
                "Perukirjakoneen omistaa Suomen Perunkirjoituspiste Oy, joka on Suomen Testamenttikeskus Oy:n 100% omistama tytäryhtiö. Yhtiöiden kotipaikka Turku.",
              emphasized: true
            }
          ]}
        />
      </div>
    </section>
  );
}

export default PricingSection;
