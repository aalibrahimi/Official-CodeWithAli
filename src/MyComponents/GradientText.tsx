import React from "react";

type GradientTextType = {
  gradient?: string;
  styleOverwrite?: string;
  children: React.ReactNode;
};

const GradientText = ({ gradient, styleOverwrite, children }: GradientTextType) => {
  if (styleOverwrite) {
    return <span className={gradient ? `inline-block ${styleOverwrite}` : 'inline-block bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent font-bold'}>{children}</span>;
  } else {
    return <span className={gradient ? `inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold` : 'inline-block bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent font-bold'}>{children}</span>;
  }
};

export default GradientText;