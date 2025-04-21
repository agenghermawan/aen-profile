import { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-yellow-100 rounded-lg shadow">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

export default FeatureItem;
