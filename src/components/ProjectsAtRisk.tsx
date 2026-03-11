import { AlertTriangle } from 'lucide-react';

export function ProjectsAtRisk() {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-orange-900 mb-1">Projects at Risk</h3>
            <p className="text-sm text-orange-700 mb-2">1 project requires attention</p>
            <p className="text-sm text-orange-800">Energy Efficiency in Buildings Program</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white border border-orange-300 text-orange-700 rounded-md hover:bg-orange-50 transition-colors">
          Review
        </button>
      </div>
    </div>
  );
}
