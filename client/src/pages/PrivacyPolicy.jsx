import React from "react";
import PolicyLayout from "./PolicyLayout";
import PageHero from "../components/common/PageHero";

const PrivacyPolicy = () => {
  const sections = [
    {
      heading: "Information We Collect",
      content: [
        "We may collect your name, mobile number, email address, business details, and service-related documents when you contact us or apply for any registration or consultancy service through our website.",
        "This information is collected only for communication, documentation, service processing, and customer support purposes."
      ],
    },
    {
      heading: "How We Use Your Information",
      list: [
        "To respond to inquiries and provide requested services.",
        "To process business registrations, licenses, compliance, and consultancy work.",
        "To contact you regarding updates, approvals, pending documents, or service completion.",
        "To improve our website experience and support quality."
      ],
    },
    {
      heading: "Document and Data Safety",
      content: [
        "We handle shared documents and personal information with reasonable care and use them only for the purpose of delivering the requested service.",
        "We do not sell or rent your personal information to third parties."
      ],
    },
    {
      heading: "Third-Party Services",
      content: [
        "In some cases, your information may be shared with government portals, registration authorities, payment gateways, or compliance-related systems only where necessary for service execution."
      ],
    },
    {
      heading: "Contact Us",
      content: [
        "If you have any questions regarding this Privacy Policy, you may contact us through the details available on our website."
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Privacy Policy"
        des="Your information matters to us, and we are committed to handling it responsibly."
      />

      <PolicyLayout
        title="Privacy Policy"
        updatedOn="27 April 2026"
        intro="This Privacy Policy explains how we collect, use, protect, and manage your personal information when you use our website or contact us for any business registration, legal, digital, or consultancy service."
        sections={sections}
      />
    </>
  );
};

export default PrivacyPolicy;