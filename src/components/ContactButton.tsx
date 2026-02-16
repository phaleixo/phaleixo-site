import React from "react";
import { WhatsAppIcon } from "./Icons";

interface ContactButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  label,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg ${className ?? ""}`}
    >
      <div className="w-5 h-5">
        <WhatsAppIcon />
      </div>
      <span
        className="ml-3 pl-3 border-l border-white/30 font-bold text-white"
        
      >
        {label}
      </span>
    </button>
  );
};

export default ContactButton;
