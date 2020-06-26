import React from "react";
import {Helmet} from "react-helmet";

import FeaturesSection from "../FeaturesSection";
import FeaturesSectionAlt from "../FeaturesSectionAlt";
import TestimonialsSection from "../TestimonialsSection";
import ClientsSection from "../ClientsSection";
import PricingSection from "../PricingSection";
import Divider from "../Divider";
import MainSection from "../MainSection";

import "./styles.scss";

function Homepage(props) {
  return (
    <div className="application">
      <Helmet defer={false}>
        <script type="text/javascript">
          {`
              !function(){window;var e,t=document;e=function(){var e=t.createElement("script");e.defer=!0,e.src="https://cdn.endorsal.io/widgets/widget.min.js";var n=t.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n),e.onload=function(){NDRSL.init("5edd441aa063bf0ccbccf6fa")}},"interactive"===t.readyState||"complete"===t.readyState?e():t.addEventListener("DOMContentLoaded",e())}();
          `}
        </script>
      </Helmet>
      <MainSection />
      <ClientsSection />
      <Divider />
      <FeaturesSection />
      <TestimonialsSection />
      <FeaturesSectionAlt />
      <PricingSection />
    </div>
  );
}

export default Homepage;
