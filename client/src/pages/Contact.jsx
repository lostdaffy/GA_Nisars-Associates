import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import GetInTouch from "../components/common/GetInTouch";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Get In Touch"
        des="Contact us today to schedule your consultation."
      />

      {/* Main Contact Form */}
      <GetInTouch />
    </>
  );
};

export default Contact;
