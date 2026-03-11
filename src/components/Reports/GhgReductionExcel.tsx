import * as XLSX from "xlsx"
export const GhgReductionExcel=()=>{
    // Create an empty worksheet
    const worksheet=XLSX.utils.aoa_to_sheet([])
    // Create workbook
    const workbook=XLSX.utils.book_new();
    // Append empty sheet
    XLSX.utils.book_append_sheet(workbook,worksheet,"Ghg Reduction");
    // Download Excel file
    XLSX.writeFile(workbook,"Ghg_Reduction.xlsx");
}