import React from "react";
import PageHero from "../components/common/PageHero";
import PolicyLayout from "./PolicyLayout";

const CancellationPolicy = () => {
  const sections = [
    {
      heading: "Cancellation Requests",
      content: [
        "Clients may request cancellation of a service by contacting us through the official communication channels before substantial work has started.",
        "Cancellation requests must include the client name, service details, date of payment, and the reason for cancellation."
      ],
    },
    {
      heading: "Before Work Starts",
      content: [
        "If a cancellation request is received before consultation, drafting, filing, document review, registration work, or process initiation has started, the request may be considered for cancellation subject to applicable deductions.",
        "Any payment gateway fees, platform charges, or administrative charges may still be deducted where applicable."
      ],
    },
    {
      heading: "After Work Starts",
      content: [
        "Once work has started, including consultation, document verification, form preparation, application filing, drafting, design work, portal submission, or professional processing, cancellation may not be possible.",
        "If cancellation is accepted after partial work completion, only a partial refund may be considered, depending on the stage of execution."
      ],
    },
    {
      heading: "Government and Third-Party Services",
      content: [
        "Services involving government departments, registrations, licenses, tax portals, digital signatures, legal filing systems, or external agencies may not be cancellable once submitted or processed.",
        "Any statutory, government, partner, or third-party charges paid in such cases are non-cancellable and non-refundable."
      ],
    },
    {
      heading: "Delay or Non-Response from Client",
      content: [
        "If the client fails to provide documents, confirmations, signatures, OTPs, or required responses within a reasonable period, the service may remain pending or be closed based on internal review.",
        "In such cases, cancellation and refund eligibility may be restricted depending on the amount of work already completed."
      ],
    },
    {
      heading: "How to Contact for Cancellation",
      content: [
        "For any cancellation request, please contact our support team using the contact details available on the website.",
        "Our team will review the request and inform you about cancellation eligibility, applicable deductions, and next steps."
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Cancellation Policy"
        des="This page explains how cancellation requests are handled for our professional and registration-related services."
      />

      <PolicyLayout
        title="Cancellation Policy"
        updatedOn="27 April 2026"
        intro="This Cancellation Policy explains the terms under which a service request may be cancelled before or after the work has started."
        sections={sections}
      />
    </>
  );
};

export default CancellationPolicy;