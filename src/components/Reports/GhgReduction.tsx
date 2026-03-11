import React from "react";
import {
    Target,
    Download,
}from "lucide-react"
import './GhgReduction.css'
import { GhgReductionExcel } from "./GhgReductionExcel";
type Project={
    sector:string;
    entity:string;
    plannedGhgReduction:string;
    AchievedGHGReduction:string;
    StartDate:string
}
const projects:Project[]=[
    {
        sector:"Renewable Energy",
        entity:"Masdar",
        plannedGhgReduction:"1,50,000",
        AchievedGHGReduction:"4,50,000",
        StartDate:"January15th,2023"
    },
    {
        sector:"Energy Efficiency",
        entity:"Dubai Electricity and Water Authority",
        plannedGhgReduction:"80,000",
        AchievedGHGReduction:"2,00,000",
        StartDate:"June1st,2023"

    }

]

const handlePdf=()=>{
    alert("pdf is success")
}
const GhgReduction=()=>{
    return(
        <div className="bg-white border rounded-xl p-5 mb-8">
            <h3 className="font-semibold mb-4 flex items-center">
                <Target className="w-5 h-5 text-gray-500"/>
                GHG Reduction Report
            </h3>
            <p className="text-sm text-gray-500 mb-6">
                Emissions reduction data by sector and entity (2 records)
            </p>
            <div className="registry-table-wrapper">
        <table className="registry-table">
            <thead>
                <tr>
                    <th>Sector</th>
                    <th>Entity</th>
                    <th>Planned GHG Reduction (tons CO2e)</th>
                    <th>Achieved GHG Reduction (tons CO2e)</th>
                    <th>Start Date</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((p,index)=>(
                    <tr key={index}>
                        <td>{p.sector}</td>
                        <td>{p.entity}</td>
                        <td>{p.plannedGhgReduction}</td>
                        <td>{p.AchievedGHGReduction}</td>
                        <td>{p.StartDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
         <div className="mt-4 flex gap-4">
              <button
  onClick={GhgReductionExcel}
  className="flex items-center gap-2 px-4 py-2 
             bg-green-600 text-white 
             border border-green-600 
             rounded-lg text-sm 
             hover:bg-green-700 
             transition-colors"
>
  <Download className="w-4 h-4 text-white" />
  Export Excel
</button>
<button onClick={handlePdf} className="
flex items-center gap-2 px-4 py-2 bg-green-600 text-white
rounded-lg text-sm hover:bg-green-700 transition-colors">
<Download className="w-4 h-4 text-white" />
Export PDF
    
</button>
</div>
        </div>
    )
}

export default GhgReduction;