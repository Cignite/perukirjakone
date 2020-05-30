import React from "react";
import Footer from "./../Footer";
import FeaturesSection from "./../FeaturesSection";
import FeaturesSectionAlt from "./../FeaturesSectionAlt";
import TestimonialsSection from "./../TestimonialsSection";
import ClientsSection from "./../ClientsSection";
import PricingSection from "./../PricingSection";
import Navbar from "./../Navbar";
import Divider from "./../Divider";
import MainSection from "./../MainSection";
import "./styles.scss";

function App(props) {
  return (
    <>
      <Navbar />
      <MainSection />
      <ClientsSection />
      <Divider />
      <FeaturesSection />
      <TestimonialsSection />
      <FeaturesSectionAlt />
      <PricingSection />
      <Footer />
    </>
  );
}

export default App;
