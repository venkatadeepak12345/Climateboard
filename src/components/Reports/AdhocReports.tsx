import React, { useState } from "react";
import './AdhocReports.css'
const AdhocReports = () => {
  const [fields, setFields] = useState<string[]>([]);

  const toggleField = (field: string) => {
    setFields((prev) =>
      prev.includes(field)
        ? prev.filter((f) => f !== field)
        : [...prev, field]
    );
  };

  return (
    <div className="adhoc-card">
      <h4>Custom Report Builder</h4>
      <p className="subtext">
        Create custom reports by selecting fields and applying filters
      </p>

      {/* Report name */}
      <div className="form-group">
        <label>Report Name</label>
        <input type="text" placeholder="Enter report name" />
      </div>

      {/* Fields */}
      <div className="form-group">
        <label>Select Fields to Include</label>

        <div className="checkbox-grid">
          {[
            "initiative Name",
            "entity Name",
            "project Sector",
            "status",
            "approval State",
            "budget",
            "planned GHG Emission Reduction",
            "emission Reduction Achieved",
            "planned Progress",
            "actual Progress",
            "project Phase",
            "budget Type",
            "start Date",
            "end Date",
          ].map((field) => (
            <label key={field} className="checkbox-item">
              <input
                type="checkbox"
                checked={fields.includes(field)}
                onChange={() => toggleField(field)}
              />
              {field}
            </label>
          ))}
        </div>
      </div>

      {/* Group / Sort */}
      <div className="grid-3">
        <div>
          <label>Group By</label>
          <select>
            <option>Select grouping</option>
             <option>Sector</option>
            <option>Entity</option>
            <option>Status</option>
            <option>Phase</option>
          </select>
        </div>

        <div>
          <label>Sort By</label>
          <select>
            <option>Select sorting</option>
            <option>Name</option>
            <option>Budget</option>
            <option>Progress</option>
            <option>Start Date</option>
           


          </select>
        </div>

        <div>
          <label>Order</label>
          <select>
            <option>Select order</option>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>

      {/* Actions */}
      <div className="actions-row">
        <button className="btn-primary">Generate Report</button>
        <button className="btn-outline">Save Template</button>
      </div>
    </div>
  );
};

export default AdhocReports;
