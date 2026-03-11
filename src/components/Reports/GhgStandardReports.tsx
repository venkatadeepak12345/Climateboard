import React from 'react'
import {
    Download,
    ArrowLeft,
    Target,
    TrendingDown,
    LineChart,
    Calendar
}from "lucide-react"
import DetailedGhgProject from './DetailedGhgProject'
import { exportProjectRegisterExcel } from './ExportProjectRegisterExcel'
import { useNavigate } from 'react-router-dom'
const cards=[
    {
        title:"Planned Reduction",
        value:"8,700 tCO₂e",
        icon:Target,
        color:"bg-blue-100",
    },
    {
        title:"Achieved Reduction",
        value:"8,950 tCO₂e",
        icon:TrendingDown,
        color:"bg-green-100",
    },
    {
        title:"Performance",
        value:"102.9%",
        icon:LineChart,
        color:"bg-purple-100",
    },
    {
        title:"Report Period",
        value:"2024",
        icon:Calendar,
        color:"bg-yellow-100",
    }
]
const GhgStandardReports = () => {
    const navigate=useNavigate();
const handleclick=()=>{
    navigate('/reports');
}
  return (
    <div className='bg-gray-50 min-h-screen'>
        {/* HEADER */}
        <div className='bg-white border-b border-gray-200 px-6 py-6'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <button onClick={handleclick} className='flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50'>
                    <ArrowLeft className='w-4 h-4 text-gray-500'/>
                    Back to Reports
               </button>
                <div>
                    <h2 className='text-xl font-semibold text-gray-900'>
                        GHG Reduction Summary Report
                    </h2>
                    <p className='text-sm text-gray-600'>
                        Greenhouse gas emission reduction performance analysis
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button className='flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50'>
                    <Download className='w-4 h-4 text-gray-500'/>
                    Export PDF
                </button>
                <button onClick={exportProjectRegisterExcel} className='flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50'>
                    <Download className='w-4 h-4 text-gray-500'/>
                    Export Excel
                </button>
            </div>
        </div>
        </div>
        <div className='px-6 py-6'>
        {/* CARDS */}
        <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-4'>
            {cards.map((card)=>(
                <div key={card.title} className='bg-white p-4 rounded-lg shadow'>
                    <div className='flex items-center gap-4'>
                        <div className={`${card.color} p-2 rounded-lg`}>
                            <card.icon className='w-6 h-6 text-gray-700'/>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>{card.title}</p>
                            <h3 className='text-xl font-semibold text-gray-900'>{card.value}</h3>

                        </div>
                    </div>
                </div>
            ))}
            </div>

        </div>
        <DetailedGhgProject/>
    </div>
  )
}
export default GhgStandardReports
