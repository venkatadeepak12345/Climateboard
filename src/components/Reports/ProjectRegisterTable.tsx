import React from "react";
import {
    FileText,
    Download
} from "lucide-react"
import "./ProjectRegisterTable.css"
import { exportProjectRegisterExcel } from "./ExportProjectRegisterExcel";

type Project=
    {
        InitiativeName:string;
        Entity:string;
        sector:string;
        status:string;
        approvalDate:string;
        budget:string;
        plannedGHGReduction:string;


    }

const projects:Project[]=[
    {
        InitiativeName:"Solar Energy Expansion Initiative",
        Entity:"Masdar",
        sector:"Renewable Energy",
        status:"OnTrack",
        approvalDate:"Published",
        budget:"3,50,00,00,000",
        plannedGHGReduction:"15,00,000"
    },
    {
        InitiativeName:"Energy Efficiency in Buildings Program",
        Entity:"Dubai Electricity and Water Authority",
        sector:"Energy Efficiency",
        status:"AtRisk",
        approvalDate:"Published",
        budget:"85,00,00,000",
        plannedGHGReduction:"8,00,000"
    }
]
const handlePdf=()=>{
    alert("pdf is success")
}




const  ProjectRegisterTable=()=>{

    return(
        <div className="bg-white border rounded-xl p-5 mb-8">
            <h3 className="font-semibold mb-4 flex items-center">
               <FileText className="w-5 h-5 text-gray-500"/>
                Project Register Report
            </h3>
            <p className="text-sm text-gray-500">
                Complete list of all projects (2 records)

            </p>
             <div className="registry-table-wrapper">
        <table className="registry-table">
            <thead>
                <tr>
                    <th>InitiativeName</th>
                    <th>Entity</th>
                    <th>Sector</th>
                    <th>Status</th>
                    <th>Approval Date</th>
                    <th>Budget</th>
                    <th>Planned GHG Reduction</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project,index)=>(
                    <tr key={index}>
                        <td>{project.InitiativeName}</td>
                        <td>{project.Entity}</td>
                        <td>{project.sector}</td>
                        <td>
                            <span className={`status ${project.status.toLowerCase()}`}>
                                {project.status}
                            </span>
                        </td>
                        <td>{project.approvalDate}</td>
                        <td>{project.budget}</td>
                        <td>{project.plannedGHGReduction}</td>
                    </tr>
                ))}
            </tbody>
            </table>
             </div>
                <div className="mt-4 flex gap-4">
              <button
  onClick={exportProjectRegisterExcel}
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


             <button
  onClick={handlePdf}
  className="flex items-center gap-2 px-4 py-2 
             bg-green-600 text-white 
             border border-green-600 
             rounded-lg text-sm 
             hover:bg-green-700 
             transition-colors"
>
  <Download className="w-4 h-4 text-white" />
  Export PDF
</button>

        </div>
        </div>

           
       
    )

}
export default ProjectRegisterTable;
