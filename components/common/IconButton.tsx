// components/common/IconButton.tsx
import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
}

const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <button className="bg-black hover:bg-gray-700 rounded-lg p-2">
      {icon}
    </button>
  );
};

export default IconButton;