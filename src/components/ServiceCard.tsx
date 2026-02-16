import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div className="bg-gray-900/40 rounded-xl p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{children}</p>
    </div>
  );
};

export default ServiceCard;
