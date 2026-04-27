import React from "react";
import PageHero from "../components/common/PageHero";
import PolicyLayout from "./PolicyLayout";

const TermsConditions = () => {
  const sections = [
    {
      heading: "Acceptance of Terms",
      content: [
        "By accessing this website or using any of our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
        "These terms apply to all visitors, clients, and users who contact us for registrations, consultancy, digital services, compliance support, or documentation-related work."
      ],
    },
    {
      heading: "Nature of Services",
      content: [
        "We provide business, legal, consultancy, registration, documentation, compliance, digital signature, and design-related services based on the service selected by the client.",
        "Our role may include consultation, application preparation, documentation guidance, filing assistance, follow-up support, and process coordination depending on the chosen service."
      ],
    },
    {
      heading: "Client Responsibilities",
      list: [
        "To provide accurate and complete details.",
        "To submit valid identity, business, and supporting documents as required.",
        "To review submitted information before final approval.",
        "To respond in a timely manner where approvals, OTPs, signatures, or confirmations are required."
      ],
    },
    {
      heading: "Service Timelines",
      content: [
        "Service timelines may vary depending on document readiness, government portal response, third-party approval timelines, and authority-level processing.",
        "We do not guarantee exact completion dates where external authorities, departments, or systems are involved."
      ],
    },
    {
      heading: "Payments",
      content: [
        "All payments made for services are subject to the applicable pricing, consultation charges, filing fees, and professional service fees shared at the time of confirmation.",
        "Certain charges paid toward government fees, portal fees, third-party fees, or documentation processing may be non-refundable."
      ],
    },
    {
      heading: "Limitation of Liability",
      content: [
        "We are not responsible for delays, rejections, objections, or losses caused by incorrect client information, incomplete documents, government rule changes, portal issues, or third-party processing delays.",
        "Our liability is limited to the service scope agreed upon with the client."
      ],
    },
    {
      heading: "Intellectual and Digital Content",
      content: [
        "Any logos, website designs, branding elements, or digital assets created by us remain subject to the agreed service scope and payment completion.",
        "Unauthorized copying, resale, or misuse of our content, materials, or digital work is not permitted."
      ],
    },
    {
      heading: "Changes to Terms",
      content: [
        "We may update these Terms & Conditions from time to time as required for legal, business, or operational reasons.",
        "The latest version published on this page shall be considered the current and applicable version."
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Terms & Conditions"
        des="Please read these terms carefully before using our website or availing any of our services."
      />

      <PolicyLayout
        title="Terms & Conditions"
        updatedOn="27 April 2026"
        intro="These Terms & Conditions govern your use of our website and the services provided by our business. By using our platform or contacting us for professional assistance, you agree to these terms."
        sections={sections}
      />
    </>
  );
};

export default TermsConditions;