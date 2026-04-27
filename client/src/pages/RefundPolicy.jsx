import React from "react";
import PageHero from "../components/common/PageHero";
import PolicyLayout from "./PolicyLayout";

const RefundPolicy = () => {
  const sections = [
    {
      heading: "General Refund Policy",
      content: [
        "We aim to provide transparent and professional services to all clients. Refund requests are handled based on the type of service, stage of work, and nature of charges involved.",
        "Because many of our services involve consultation, documentation, registration processing, digital filing, and professional time, not all payments are refundable."
      ],
    },
    {
      heading: "Eligible Refund Cases",
      list: [
        "Duplicate payment made by mistake.",
        "Payment received but service could not be initiated from our side.",
        "Order accepted but later found to be unavailable for execution before work started.",
        "Any refund case specifically approved by our management after review."
      ],
    },
    {
      heading: "Non-Refundable Cases",
      list: [
        "Government fees, statutory fees, portal charges, or third-party charges already paid.",
        "Consultation charges once expert guidance or advisory has been provided.",
        "Cases where documentation work, drafting, filing, application preparation, or service processing has already started.",
        "Delays caused due to missing client documents, non-response, rejection by authority, or change in government rules."
      ],
    },
    {
      heading: "Partial Refunds",
      content: [
        "In some situations, only a partial refund may be issued if part of the work has already been completed and the remaining work is cancelled.",
        "The refundable amount, if any, will be decided after adjusting work completed, manpower involved, documentation effort, and non-recoverable charges."
      ],
    },
    {
      heading: "Refund Request Process",
      content: [
        "To request a refund, the client must contact us through the official phone number, email, or support channel with payment details and reason for the request.",
        "Refund requests are reviewed case by case and may require verification of payment, communication history, and service stage."
      ],
    },
    {
      heading: "Refund Processing Time",
      content: [
        "Approved refunds are generally processed within 7 to 15 working days, depending on the payment mode and banking channels.",
        "We are not responsible for additional delays caused by banks, gateways, or third-party payment providers."
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Refund Policy"
        des="Our refund policy explains when a payment may be eligible for refund and when charges may remain non-refundable."
      />

      <PolicyLayout
        title="Refund Policy"
        updatedOn="27 April 2026"
        intro="This Refund Policy outlines the conditions under which refunds may or may not be granted for services purchased through our business."
        sections={sections}
      />
    </>
  );
};

export default RefundPolicy;