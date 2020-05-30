import React from "react";
import Testimonials from "./../Testimonials";
import "./styles.scss";

function TestimonialsSection(props) {
  return (
    <section className="TestimonialsSection section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title has-text-centered">Testimonials</h1>
        </header>
        <Testimonials
          items={[
            {
              headerImage:
                "https://images.unsplash.com/photo-1492138623748-a1b1f758a762",
              avatarImage: "http://i.pravatar.cc/150?img=68",
              bio:
                "Serveur heberger sur {Site}, utilisant Fivem et disposant de XXX slots joueur. tout les mode sont issue du processus de developpement officiel Fivem pour garantir une experienc ede jeu maximale.",
              company: "company.com",
              companyUrl: "https://company.com"
            },
            {
              headerImage: "https://source.unsplash.com/uwPBAlQyIag/1080x360",
              avatarImage: "http://i.pravatar.cc/150?img=35",
              name: "Lisa Zinn",
              role: "Software Engineer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",
              company: "company.com",
              companyUrl: "https://company.com"
            },
            {
              headerImage: "https://source.unsplash.com/pJ_DCj9KswI/1080x360",
              avatarImage: "http://i.pravatar.cc/150?img=16",
              name: "Diana Low",
              role: "Designer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
              company: "company.com",
              companyUrl: "https://company.com"
            }
          ]}
        />
      </div>
    </section>
  );
}

export default TestimonialsSection;
