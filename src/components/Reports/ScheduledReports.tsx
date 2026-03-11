import { Settings } from 'lucide-react'
import React from 'react'
const ScheduledReports = () => {
  return (
    <div>
        <h3 className="flex items-center gap-2 text-gray-900 font-semibold">
    <Settings className="w-6 h-6 text-gray-600" />
    Scheduled Reports
        </h3>
        <p className="text-sm text-gray-500">
            Set up automatic report generation and email delivery
        </p>
         <div className="flex flex-col items-center justify-center py-16 text-center">
             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 mb-3">
        <Settings className="w-6 h-6 text-gray-600" />
             </div>
             <div>
        <h3 className="text-gray-900 text-lg font-semibold mb-2">
        No Scheduled Reports
        </h3>
        <p className="text-sm text-gray-500 mb-4">
           Configure automatic report generation and delivery schedules
        </p>
        <div className="flex justify-center">
  <button className="flex items-center gap-2 font-semibold text-gray-900 btn-primary">
    <Settings className="h-4 w-4 text-gray-600"/>
    Create Schedule
  </button>
</div>
</div>
</div>
</div>
  )
}
export default ScheduledReports
