import { Layers } from 'lucide-react';

export function ProjectPhases() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-4 h-4 text-gray-600" />
            <h3 className="text-gray-900">Project Phases</h3>
          </div>
          <p className="text-sm text-gray-500">Distribution by implementation phase</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">Implementation</span>
            <span className="text-sm text-gray-500">100%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
