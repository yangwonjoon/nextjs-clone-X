import colors from "@/style/color";
import BaseButton from "../atoms/BaseButton";

export interface StyledButtonProps {
  size?: "sm";
  color?: keyof typeof colors;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const StyledButton = ({ size = "sm", color = "blue-base", className, onClick, children }: StyledButtonProps) => {
  const argColor = colors[color] || color;
  const colorClass = `bg-[${argColor}] text-white`;
  const sizeClasses = {
    sm: "h-34pxr px-12pxr py-6pxr text-14pxr leading-22pxr rounded-6pxr",
  };
  const finalClassName = ["p-btn flex flex-nowrap font-bold items-center justify-center whitespace-nowrap", sizeClasses[size], colorClass, className].filter(Boolean).join(" ");

  return (
    <BaseButton onClick={onClick} className={finalClassName}>
      {children}
    </BaseButton>
  );
};

export default StyledButton;
