import { Clock } from "lucide-react";
export function PendingApprovals(){
    return(
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-gray-600"/>
                        <h3 className="text-gray-900">Pending Approvals</h3>

                    </div>
                    <p className="text-sm text-gray-500">Projects awiating Your Review</p>
                </div>

            </div>
            <div className="flex items-center justify-center py-8">
                <p className="text-sm text-gray-500">No Pending Approvals</p>
            </div>
        </div>
    )
}