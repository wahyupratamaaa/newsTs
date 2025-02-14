import React from 'react';

type ButtonProps = {
  text: string;
  bgColor: string;
  textColor: string;
  className?: string;
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = ({
  text,
  bgColor,
  textColor,
  className,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={`w-auto h-auto ${bgColor} ${className} `}>
      <p className={`w-auto ${textColor}`}>{text}</p>
    </div>
  );
};

export default Button;
