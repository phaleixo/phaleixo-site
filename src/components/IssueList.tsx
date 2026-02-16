import React from "react";
import { AlertCircle } from "lucide-react";

interface IssueListProps {
  items: string[];
  className?: string;
}

export const IssueList: React.FC<IssueListProps> = ({ items, className }) => {
  return (
    <ul
      className={`text-left space-y-5 text-gray-100 flex-1 mt-8 md:text-lg md:space-y-6 ${className ?? ""}`}
    >
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
          <span className="leading-none">{it}</span>
        </li>
      ))}
    </ul>
  );
};

export default IssueList;
