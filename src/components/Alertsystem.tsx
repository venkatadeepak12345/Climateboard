import {
  AlertTriangle,
  TrendingDown,
  Lightbulb,
  Target,
} from "lucide-react";
function AlertItem({ alert }: any) {
  const styles: any = {
    risk: {
      bg: "bg-red-50",
      border: "border-red-500",
      icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
    },
    budget: {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      icon: <TrendingDown className="w-4 h-4 text-yellow-600" />,
    },
    opportunity: {
      bg: "bg-green-50",
      border: "border-green-500",
      icon: <Lightbulb className="w-4 h-4 text-green-600" />,
    },
    legacy: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      icon: <Target className="w-4 h-4 text-blue-600" />,
    },
  };
  const s = styles[alert?.type];
  if (!s) return null;
  return (
    <div className={`flex gap-3 p-3 rounded-md border-l-4 ${s.border} ${s.bg}`}>
      {s.icon}
      <div>
        <p className="text-sm font-medium text-gray-900">
          {alert.title}
        </p>
        <p className="text-xs text-gray-600">
          {alert.description}
        </p>
      </div>
    </div>
  );
}
export default AlertItem;
