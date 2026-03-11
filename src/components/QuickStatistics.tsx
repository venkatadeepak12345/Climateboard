import { Zap } from "lucide-react";
export function QuickStatistics(){
    const stats=[
        {label:'GHG Target Achievement',value:'25%',color:'text-green-600'},
        {label:'Projects At risk',value:'1',color:'text-green-600'},
        {label:'Active Sectors',value:'2' ,color:'text-green-600'},
        {label:'Avg Project Budget',value:'2175M',color:'text-green-600'}
        
    ]

return(
    <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-gray-500"/>
                    <h3 className="text-gray-900">Quick Statstics</h3>
                   
                </div>
                <div>
                         <p className="text-sm text-gray-600">Key Performance indicators</p>
                </div>
               

            </div>

        </div>
        <div className="grid grid-cols-2">
            {stats.map((stat,index)=>(
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className={`text-2xl mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className={`text-xs text-gray-600`}>{stat.label}</div>
                    </div>
            ))}
        </div>

    </div>
)
}