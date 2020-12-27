import React from "react";
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg'

import "./styles.scss";


function TermsConditions(props) {
  return (
    <div className="termscondtions">
      <Link to="/" className="logo">
        <img src={logo} alt="Perukirjakone" className="has-text-centered" />
      </Link>
      <p className="termscondtions__header">
        Perukirjakone - palvelun käyttöehdot
      </p>
      <p className="termscondtions__text">
        Perukirjakone.fi -verkkopalvelun käyttäjän (myöhemmin ”käyttäjä”) pitää lukea ja hyväksyä Palvelutuottajan palvelun käyttöehdot (jäljempänä “käyttöehdot”).
      </p>
      <p className="termscondtions__text">
        Käyttäjällä tarkoitetaan yksityishenkilöä, joka käyttää Perukirjakonetta.
      </p>
      <p className="termscondtions__text">
        Suomen Testamenttikeskus Oy on merkitty Patentti- ja rekisterihallituksen kaupparekisteriin, Y-tunnus 2123888-6. Arvonlisäverotunnus on FI2123888-6.Suomen Perunkirjoituspiste Oy:non merkitty Patentti- ja rekisterihallituksen kaupparekisteriin, Y-tunnus 2453638-7. Arvonlisäverotunnus on FI2453638-7.
      </p>
      <p className="termscondtions__header">
        Yleistä
      </p>
      <p className="termscondtions__text">
        1. Suomen Testamenttikeskus Oy:n ja sen 100 % tytäryhtiön Suomen Perunkirjoituspiste Oy:n, myöhemmin "Palvelutuottaja", digitaalisen palvelun käyttötarkoituksena on laatia perukirja-aihio perunkirjoituksen toimittamiseksi. Perukirja-aihiota käyttäjä täydentää ennen sen tulostamista, tätä kutsutaan myöhemmin termillä ”Palvelu”.
      </p>
      <p className="termscondtions__text">
        2. Palvelun käyttöön liittyy nämä Käyttöehdot, joihin käyttäjän tulee tutustua huolellisesti ennen Palvelun käyttämistä.
      </p>
      <p className="termscondtions__text">
        3. Palvelun käytön aloittamisella käyttäjä hyväksyy ja sitoutuu noudattamaan kulloinkin voimassa olevat käyttöehdot. Palvelun käyttäminen ei ole missään oloissa sallittua, mikäli käyttäjä ei hyväksy Käyttöehtoja tai jotain osaa niistä. Palvelu on tarkoitettu vain Suomessa asuville. Amerikan Yhdysvaltojen ja Kanadan kansalaiset eivät saa palvelua käyttää.
      </p>
      <p className="termscondtions__text">
        4. Palvelutuottaja tarjoaa käyttäjälle rajoitetun käyttöoikeuden käyttää Palvelua ja sen sisältämää taikka siitä tulostettavaa aineistoa. Palveluntuottaja myöntää käyttäjälle oikeuden katsella ja ladata Palvelun sisältämiä aineistoja sekä tulostaa niitä vain käyttäjän omaa ei-kaupallista käyttöä varten. Tämä käyttöoikeuden hyödyntäminen ei siirrä perukirja-aihion omistusoikeutta tai sen tekijänoikeuksia sen käyttäjälle.
      </p>
      <p className="termscondtions__header">
        Käyttöoikeuden rajoitukset:
      </p>
      <p className="termscondtions__text">
        a. Käyttäjällä ei ole oikeutta tai lupaa muokataperukirja-aihiota millään tavalla eikä myöskään käyttää sitä julkisesti missään muodossa.
      </p>
      <p className="termscondtions__text">
        b. Käyttäjä on velvollinen säilyttämään kaikissa lataamansa aineiston tulosteissa kyseisen aihion mahdollisesti sisältämät tekijänoikeusmerkinnät.
      </p>
      <p className="termscondtions__text">
        c. Käyttäjän tulee noudattaa tarkoin näitä käyttöehtoja.
      </p>
      <p className="termscondtions__header">
        Immateriaalioikeudet
      </p>
      <p className="termscondtions__text">
        5. Palvelu ja sen tuottama perukirja-aihio sisältävät tekijänoikeuslakien ja kansainvälisten tekijänoikeussopimusten tarkoittamaa, tekijänoikeudellisesti suojattua aineistoa. Palvelun omistusoikeus sekä tekijänoikeus ja kaikki muut Palveluun ja sen sisältämään aineistoon liittyvät immateriaalioikeudet (kuten tekijänoikeudet, tavaramerkit, domainit yms.) kuuluvat palvelutuottajalle ja/tai sen kirjallisesti hyväksymille kumppaneille. Kaikki Palvelutuottajalle kuuluvien immateriaalioikeuksien käytöstä seuraava goodwill -arvo kuuluu kokonaisuudessaanPalvelutuottajalle.
      </p>
      <p className="termscondtions__text">
        6. Myös kaikki muut Palvelun immateriaalioikeudet, joita ei mainita näissä käyttöehdoissa, kuuluvat Palvelutuottajalle. Palvelutuottaja ei myönnä käyttäjälle mitään suoria tai epäsuoria oikeuksia mihinkään immateriaalioikeuksiin Palvelun käytön myötä.
      </p>
      <p className="termscondtions__text">
        7. Käyttäjällä on oikeus käyttää palvelun tuottamaa perukirja-aihiota muokattuna itse laatimansa asiakirjan pohjana. Käyttäjällä ei ole muutoin kuin yksittäistä kerta varten oikeutta käyttää tai hyödyntää kaupallisesti palvelun tietokoneohjelmaa. Palvelun sisällön käyttäminen tai hyödyntäminen tekijänoikeuslain vastaisesti on kielletty.
      </p>
      <p className="termscondtions__text">
        8. Tekijänoikeuden luvattomasta käytöstä käyttäjä on vastuussa Palvelutuottajaan nähden Tekijänoikeuslain 57 §:n ja muiden tekijänoikeuden luvatonta käyttöä ja loukkaamista koskevien säädösten ja määräysten mukaisesti. Palvelutuottajan palveluiden nimikkeet ovat Palvelutuottajan tavaramerkkejä ja toiminimiä. Kaikki oikeudet niihin pidätetään.
      </p>
      <p className="termscondtions__text">
        9. Palvelutuottaja voi linkittää Palveluun ulkopuolisten ylläpitämiä Internet-sivustoja.
      </p>
      <p className="termscondtions__text">
        Käyttäjä kuitenkin käyttää omalla vastuulla näitä linkitettyjä Internet-sivustoja tai senimmateriaalioikeuksilla suojattuja aineistoja.
      </p>
      <p className="termscondtions__header">
        Ulkoiset linkit
      </p>
      <p className="termscondtions__text">
        10. Ulkopuolisten linkitys tähän Palveluun ei ole sallittua.
      </p>
      <p className="termscondtions__text">
        11. Käyttäjä vastaa ilman rajoitusta kaikesta käyttöehtojen, sopimusehtojen sekä lain tai hyvän tavan vastaisesta Palvelun käytöstä Palvelutuottajalle ja/tai muille aiheutetusta vahingosta.
      </p>
      <p className="termscondtions__header">
        Muut ehdot ja rajoitukset
      </p>
      <p className="termscondtions__text">
        12.Käyttäjä sitoutuu olemaan käyttämättä Palvelua:
      </p>
      <p className="termscondtions__text">
        a. roskapostin tai muun luvattoman tietoliikenteen välittämiseen.
      </p>
      <p className="termscondtions__text">
        b. mihinkään toimintaan, joka vaikeuttaa toisten käyttäjien mahdollisuutta käyttää Palvelua.
      </p>
      <p className="termscondtions__text">
        c. omissa nimissään Palvelua tai häivyttämään Perukirjakoneen tuottamaa perukirja-aihiota.
      </p>
      <p className="termscondtions__text">
        c. hyvän tavan tai lainvastaiseen toimintaan.
      </p>
      <p className="termscondtions__text">
        13. Palvelutuottaja voi estää Palveluun pääsyn tai ryhtyä muihin toimenpiteisiin käyttöehtojen vastaisen toiminnan lopettamiseksi.
      </p>
      <p className="termscondtions__text">
        14. Palvelutuottaja voi luovuttaa käyttäjän henkilötietoja viranomaisille näiden sitä laillisesti vaatiessa.
      </p>
      <p className="termscondtions__header">
        Käyttäjän antamat tiedot
      </p>
      <p className="termscondtions__text">
        15. Käyttäjä itse vastaa kaikesta perukirja-aihioon lisäämästään aineistosta tai tiedoista. Käyttäjä vastaa myös siitä, että hänellä on lupa aineiston käyttöön ja tulostamiseen näissä ehdoissa mainitulla tavalla.
      </p>
      <p className="termscondtions__text">
        16. Käyttäjä vastaa kolmansille osapuolille aiheutetuista vahingoista. Mikäli Palvelutuottaja joutuu korvausvelvolliseksi Käyttäjän toiminnan vuoksi, Käyttäjä sitoutuu korvaamaan Palvelutuottajalle aiheutuneet vahingot täysimääräisesti.
      </p>
      <p className="termscondtions__header">
        Tietoturva
      </p>
      <p className="termscondtions__text">
        17. Palveluntuottaja pyrkii tarjoamaan Palvelun korkeaa tietoturvan tasoa noudattaen. Käyttäjän pitää ymmärtää, ettei internet ole täysin tietoturvallinen.
      </p>
      <p className="termscondtions__header">
        Muutokset ja muokkaukset
      </p>
      <p className="termscondtions__text">
        18. Palvelutuottaja voi ilman ennakkoilmoitusta muuttaa Palvelua, korjata Palvelussa ilmenneitä virheitä ja puutteita, tehdä muita muutoksia tai lisäyksiä Palveluun, sen ohjelmaan sekä hinnoitteluun. Palvelin käyttäminen tämän jälkeen on osoitus kyseisten muutosten hyväksymisestä.
      </p>
      <p className="termscondtions__header">
        Vastuunrajoitus
      </p>
      <p className="termscondtions__text">
        19. Palvelutuottaja ei vastaa Palvelun virheettömästä toiminnasta, eikä teknisten vikojen, aiheutumasta tiedon muuttumisesta tai katoamisesta.
      </p>
      <p className="termscondtions__text">
        20. Palvelutuottaja vastaa Palveluun itse tuottamasta ja hyväksymästä sisällöstä mutta ei miltään osin takaa Palvelun toimintavarmuutta.
      </p>
      <p className="termscondtions__text">
        Palvelutuottaja ei vastaa Palvelun käyttämisen avulla tulostettujen perukirjojen laillisuudesta, oikeellisuudesta tai perunkirjoituksen perusteella määrätyistä perintöveroista.
      </p>
      <p className="termscondtions__text">
        Palvelutuottaja vastaa perukirja-aihiosta ”sellaisina kuin se on käyttöhetkellä saatavilla” -periaatteella.
      </p>
      <p className="termscondtions__text">
        21. Palvelutuottaja ei anna mitään takeita Palvelun suojauksesta. Palvelutuottaja ei voi antaa Palvelun kautta lähetettävien tietojen tietoturvaa. Palvelutuottaja ei takaa, etteitämä Palvelu tai sen kautta lähetetty aineisto sisällä viruksia tai muita haitallisia osia.
      </p>
      <p className="termscondtions__text">
        Käyttäjä hyväksyy sen, ettei Palvelutuottaja vastaa käyttäjän lisäämästä aineistosta tai tiedoista. Palvelutuottaja ei ole vastuussa mistään suorista, epäsuorista, välittömistä tai välillisistä tai vahingonkorvausvelvollisuuteen perustuvista vahingoista.Palvelutuottaja ei ole vastuussa mistään Palvelun sisältämien tietojen virheistä, puutteista tai viivästymisistä. Palvelutuottajan vastuu rajoittuu joka tapauksessa korkeintaan sen saman maksun tai palkkion kokonaismäärään.
      </p>
      <p className="termscondtions__header">
        Sovellettava lainsäädäntö
      </p>
      <p className="termscondtions__text">
        22. Näihin Käyttöehtoihin sovelletaan Suomen lakia, lukuun ottamatta sen lainvalintasäännöksiä. Näillä Käyttöehdoilla ei rajata Suomen pakottavan lainsäädännön mukaisia kuluttajan oikeuksia. Jos Palvelutuottaja ja käyttäjä eivät pääse neuvotteluteitse yhteisymmärrykseen mahdollisessa riitatilanteessa, ratkaistaan riita ensiasteena Varsinais-Suomen käräjäoikeudessa.
      </p>
      <p className="termscondtions__text">
        Kuluttajakäyttäjä voi viedä riidan kotipaikkansa yleisen alioikeuden ratkaistavaksi ja pyytää riitaan kuluttajariitalautakunnan ratkaisusuositusta (Kuluttajariitalautakunta, Hämeentie 3/PL 306, 00531 Helsinki).
      </p>
    </div>
  );
}

export default TermsConditions;
