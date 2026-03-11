import React from 'react'
import {
    LineChart 
}from "lucide-react"
type Project={
    name:string,
    sector:string,
    achieved:number,
    status:string,
}
const projects:Project[]=[
    {
        name:"Solar Panel Installation",
        sector:"Energy",
        achieved:95.8,
        status:"On Track"

    },
    {
        name:"Wind Farm Development",
        sector:"Energy",
        achieved:106.9,
        status:"Exceeding"
    },
    {
        name:"Electric Vehicle Fleet",
        sector:"Transport",
        achieved:86.3,
        status:"Behind"
    },
    {
        name:"Building Energy Efficiency",
        sector:"Building",
        achieved:104.0,
        status:"Completed"
    }
]

const PerformanceOverview = () => {
  return (
    <div className='bg-white border rounded-xl p-5 mb-5'>
        <h2 className='text text-black-600 font-semibold flex items-center gap-2 mb-4'>
            <LineChart className='w-4 h-4 text-gray-500'/>
            Performance Overview
        </h2>
        <div className='overflow-x-auto'>
            <table className='w-full table-auto border-collapse'>
                <thead>
                    <tr>
                        <th className='border-b border-gray-200 text-left py-2 px-4 text-sm font-medium text-gray-600'>Project Name</th>
                        <th className='border-b border-gray-200 text-left py-2 px-4 text-sm font-medium text-gray-600'>Sector</th>
                        <th className='border-b border-gray-200 text-left py-2 px-4 text-sm font-medium text-gray-600'>Achieved GHG Reduction (tCO₂e)</th>
                        <th className='border-b border-gray-200 text-left py-2 px-4 text-sm font-medium text-gray-600'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project,index)=>(
                        <tr key={index} className={index%2===0?'bg-gray-50':'bg-white'}>
                            <td className='border-b border-gray-200 py-2 px-4 text-sm text-gray-700'>{project.name}</td>
                            <td className='border-b border-gray-200 py-2 px-4 text-sm text-gray-700'>{project.sector}</td>
                            <td className='border-b border-gray-200 py-2 px-4 text-sm text-gray-700'>{project.achieved.toFixed(1)}</td>
                            <td className='border-b border-gray-200 py-2 px-4 text-sm text-gray-700'>{project.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        
    </div>
  )
}

export default PerformanceOverview