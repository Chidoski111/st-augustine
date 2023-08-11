"use client";

import Image from "next/image";

import { CustomButtonProps } from "@types";

const Button = ({ isDisabled, containerStyles, textStyles, title, rightIcon, whatsappLink }: CustomButtonProps) => {
  const handleWhatsAppClick = () => {
    window.location.href = whatsappLink || "https://wa.me/+2348033230742"; // Default link or use provided link
  };

  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleWhatsAppClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
