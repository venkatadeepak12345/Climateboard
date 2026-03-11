import React from "react";

const MetricCard = ({ metric }: any) => {
  const Icon = metric.icon;
 

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm">
      <div className="p-2 bg-gray-50 rounded-md">
        <Icon className={`w-5 h-5 ${metric.color}`} />
      </div>

      <div>
        <p className="text-xs text-gray-500">
          {metric.label}
        </p>
        <p className="text-lg font-semibold text-gray-900">
          {metric.value}
        </p>
      </div>
    </div>
  );
};

export default MetricCard;
