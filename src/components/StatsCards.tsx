import { FileText, DollarSign, TrendingDown, Target } from 'lucide-react';
export function StatsCards() {
  const stats = [
    {
      title: 'Total Projects',
      value: '2',
      subtitle: '1 published • 0 in progress',
      icon: FileText,
      color: 'bg-blue-50',
      progress: 100,
      progressColor: 'bg-green-500'
    },
    {
      title: 'Total Budget',
      value: '4.3B AED',
      subtitle: 'Approved funding across all projects',
      icon: DollarSign,
      color: 'bg-green-50',
      progress: 100,
      progressColor: 'bg-green-500'
    },
    {
      title: 'GHG Reduction',
      value: '0.6M',
      subtitle: 'tCO2e achieved of 2.3M planned',
      icon: Target,
      color: 'bg-purple-50',
      progress: 26,
      progressColor: 'bg-green-500',
      progressLabel: 'achieved'
    },
    {
      title: 'Average Progress',
      value: '28%',
      subtitle: 'Across all active projects',
      icon: TrendingDown,
      color: 'bg-orange-50',
      progressRange: true,
      progress:28,
      progressColor:'bg-green-500',
      progressMarks: ['0%', 'Target: 45%', '100%']
    }
  ];
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="text-sm text-gray-600">{stat.title}</div>
            <div className={`p-1.5 rounded ${stat.color}`}>
              <stat.icon className={`w-4 h-4 ${stat}`} />
            </div>
          </div>
          <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
          <div className="text-xs text-gray-500 mb-3">{stat.subtitle}</div>
          {stat.progressRange ? (
            <div>
              <div className="h-1.5 bg-gray-200 rounded-full relative mb-1">
                <div
  className={`absolute h-full ${stat.progressColor} rounded-full`} 
  style={{ width: `${stat.progress}%` }}                            
/>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400">
                {stat.progressMarks?.map((mark, i) => (
                  <span key={i}>{mark}</span>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${stat.progressColor}`}
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
              {stat.progressLabel && (
                <div className="text-[10px] text-gray-400 mt-1">{stat.progressLabel}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}




        
