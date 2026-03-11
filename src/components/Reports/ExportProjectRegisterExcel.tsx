import * as XLSX from "xlsx";
export const exportProjectRegisterExcel = () => {
  // Create an empty worksheet
  const worksheet = XLSX.utils.aoa_to_sheet([]);
  // Create workbook
  const workbook = XLSX.utils.book_new();
  // Append empty sheet
  XLSX.utils.book_append_sheet(workbook, worksheet, "Project Register");
  // Download Excel file
  XLSX.writeFile(workbook, "Project_Register.xlsx");
};





