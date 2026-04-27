import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import OurServices from "../pages/OurServices";
import ScrollToTop from "../components/common/ScrollToTop";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import RefundPolicy from "../pages/RefundPolicy";
import CancellationPolicy from "../pages/CancellationPolicy";

const MainRouting = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouting;
