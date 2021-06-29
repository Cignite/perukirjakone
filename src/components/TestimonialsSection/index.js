import React from "react";
import Testimonials from "./../Testimonials";
import "./styles.scss";

function TestimonialsSection(props) {
  return (
    <section className="TestimonialsSection section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title is-2 has-text-centered">TESTIMONIALS</h1>
        </header>
        <Testimonials
          items={[
            {
              name: "Tuomas N",
              bio:
                "Palvelulla sai tehtyä perukirjan. Pidin siitä, että prosessia pystyi tekemään vaiheittain. Lopullisen version tekemiseen meni pari viikkoa",
            },
            {
              name: "Elise V",
              bio:
                "Tein perukirjan palvelulla. Oli melko helppo prosessi, asiat oli selkeästi selitetty. Kiitos paljon",
            },
            {
              name: "Petteri Vuorio",
              bio:
                "Kaikki sujui hienosti. Epäselvätkin asiat tulivat selvitettyä.",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default TestimonialsSection;
