import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "919310228489"; // Replace with your WhatsApp number
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const StickyWhatsApp = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      bottom: "88px", // Move above the chat icon (which is at bottom-4/16px)
      right: "28px",
      zIndex: 1050,
      background: "#25D366",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
      padding: "8px",
      transition: "transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)",
      animation: "whatsapp-bounce 1.2s infinite alternate",
    }}
    aria-label="Chat on WhatsApp"
    className="sticky-whatsapp-icon"
  >
    <FaWhatsapp
      style={{ width: 32, height: 32, color: "#fff", display: "block" }}
    />
  </a>
);

// Add keyframes for bounce animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes whatsapp-bounce {
  0% { transform: translateY(0); }
  60% { transform: translateY(-8px) scale(1.08); }
  100% { transform: translateY(-4px) scale(1.04); }
}`;
document.head.appendChild(style);

export default StickyWhatsApp;
