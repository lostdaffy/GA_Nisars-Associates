import React from "react";

const WhatsAppButton = () => {
  return (
    <>
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
          .animate-zoomInOut {
            animation: zoomInOut 2s infinite ease-in-out;
          }
        `}
      </style>

      <a
        href="https://wa.me/918194000564"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 transition duration-300 ease-in-out animate-zoomInOut"
      >
        <i className="ri-whatsapp-line rounded-full bg-[#111111] p-2 text-2xl text-white md:text-4xl"></i>
      </a>
    </>
  );
};

export default WhatsAppButton;