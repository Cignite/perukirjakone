import React from "react";

import FeaturesSection from "../FeaturesSection";
import FeaturesSectionAlt from "../FeaturesSectionAlt";
import TestimonialsSection from "../TestimonialsSection";
import ClientsSection from "../ClientsSection";
import PricingSection from "../PricingSection";
import Navbar from "../Navbar";
import Divider from "../Divider";
import MainSection from "../MainSection";

import "./styles.scss";

function Homepage(props) {
  return (
    <>
      <MainSection />
      <ClientsSection />
      <Divider />
      <FeaturesSection />
      <TestimonialsSection />
      <FeaturesSectionAlt />
      <PricingSection />
    </>
  );
}

export default Homepage;
