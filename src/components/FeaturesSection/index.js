import React from "react";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <section className="section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title is-spaced is-2 has-text-weight-bold">
            Benfits of perukirja
          </h1>
          <h2 className="FeaturesSection__subtitle subtitle">
            Digital law service for funeral and inheritence
          </h2>
        </header>
        <Features
          items={[
            {
              title: "Benefit one",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/mind_map_cwng.svg"
            },
            {
              title: "Benefit two",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_settings_kihd.svg"
            },
            {
              title: "Benefit three",
              description:
                "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.",
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
