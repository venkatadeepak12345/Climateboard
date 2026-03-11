import React from 'react'
import {
TrendingUp
}from "lucide-react"
import "./DetailedGhg.css"
type Project = {
  project: string;
  sector: string;
  period: string;
  planned: number;
  achieved: number;
  performance: number;
  methodology: string;
  verification: string;
  status: string;
};
const projects: Project[] = [
  {
    project: "Solar Panel Installation",
    sector: "Energy",
    period: "2024 Q1-Q2",
    planned: 1200,
    achieved: 1150,
    performance: 95.8,
    methodology: "Grid Displacement",
    verification: "Verified",
    status: "On Track",
  },
  {
    project:"Wind Farm Development",
    sector:"Energy",
    period:"2024 Q1-Q4",
    planned:5800,
    achieved:6200,
    performance:106.9,
    methodology:"Renewable Energy",
    verification:"Pending",
    status:"Exceeding",
  },
  {
    project:"Electric Vehicle Fleet",
    sector:"Transport",
    period:"2024 Q1-Q3",
    planned:950,
    achieved:820,
    performance:86.3,
    methodology:"Transport Efficiency",
    verification:"Verfied",
    status:"Behind"
  },
  {
    project:"Building Energy Efficiency",
    sector:"Buildings",
    period:"2023 Q4-2024 Q1	",
    planned:750,
    achieved:780,
    performance:104.0,
    methodology:"Energy Efficiency",
    verification:"Verified",
    status:"Completed"
  }
];
const DetailedGhgProject = () => {
  return (
    <div className='bg-white border rounded-xl p-5 mb-5'>
   <h2 className='font-semibold mb-4 flex items-center gap-3'>
              <TrendingUp className='w-6 h-6 text-gray-500'/>
                Detailed GHG Reduction Projects
        </h2>
        <div className='register-table-wrapper'>
        <table className='register-table'>
            <thead>
                <tr>
                <th>Project</th>
                <th>Sector</th>
                <th>Period</th>
                <th>Planned(tCO2e)</th>
                <th>Acheived(tCO2e)</th>
                <th>Performance(%)</th>
                <th>Methodlogy</th>
                <th>Verfication</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((pr,index)=>(
                    <tr key={index}>
                        <td>{pr.project}</td>
                        <td>{pr.sector}</td>
                        <td>{pr.period}</td>
                        <td>{pr.planned}</td>
                        <td>{pr.achieved}</td>
                        <td>{pr.performance}</td>
                        <td>{pr.methodology}</td>
                       <td>
  <span className={`badge badge-${pr.verification.toLowerCase()}`}>
    {pr.verification}
  </span>
</td>
  <td>
  <span
    className={`badge badge-${pr.status.replace(" ", "-").toLowerCase()}`}
  >
    {pr.status}
  </span>
</td>
</tr>
 ))}
</tbody>
 </table>
</div>
 </div>
)
}

export default DetailedGhgProject
