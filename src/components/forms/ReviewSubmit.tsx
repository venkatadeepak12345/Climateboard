import { Route, useNavigate } from "react-router-dom";
import "./ReviewSubmit.css"
import ProjectRegistry from "../ProjectRegistry";
interface Props {
  formData: {
    initiativeName: string;
    entity: string;
    scope: string;
    description: string;
    supportingEntity: string;
    initiativeSource: string;
    strategicObjective: string;
    projectSector: string;
    typeOfInitiative: string;
    indicators: string[];
    projectManagerName: string;
    projectManagerEmail: string;
    projectManagerPhone: string;
    startDate: string;
    endDate: string;
    PlannedGHGReduction:string;
    AchievedGHGReduction:string;
    PlannedProgress: number;
    ActualProgress:number;
    Budget:string;
    BudgetType:number;
    BudgetStatus:string
  };
}
export function ReviewSubmit({ formData }: Props) {
const navigate=useNavigate();
const handleClick = () => {
  navigate("/project/registry", {
    state: formData,
  });
};
  return (
    <div className="review-submit">
      <section className="review-section">
        <h3>Basic Information</h3>
        <div className="review-row">
          <span className="review-label">Initiative Name:</span>
          <span className="review-value">{formData.initiativeName}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Entity:</span>
          <span className="review-value">{formData.entity}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Sector:</span>
          <span className="review-value">{formData.projectSector}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Type:</span>
          <span className="review-value">{formData.typeOfInitiative}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Indicators:</span>
          <div className="review-indicators">
            {formData.indicators.map((i) => (
              <span key={i} className="review-chip">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="review-section">
        <h3>Timeline & Management</h3>
        <div className="review-row">
          <span className="review-label">Manager:</span>
          <span className="review-value">{formData.projectManagerName}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Email:</span>
          <span className="review-value">{formData.projectManagerEmail}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Phone:</span>
          <span className="review-value">{formData.projectManagerPhone}</span>
        </div>
        <div className="review-row">
          <span className="review-label">Start Date:</span>
          <span className="review-value">{formData.startDate}</span>
        </div>
        <div className="review-row">
          <span className="review-label">End Date:</span>
          <span className="review-value">{formData.endDate}</span>
        </div>
      </section>
            <section className="review-section">
        <h3>Metrics</h3>
         <div className="review-row">
            <span className="review-label">Planned GHG Reduction (tons CO2e):</span>
            <span className="review-value">{formData.PlannedGHGReduction}</span>
        </div>
        <div className="review-row">
            <span className="review-label">Achieved GHG Reduction (tons CO2e):</span>
            <span className="review-value">{formData.AchievedGHGReduction}</span>
        </div>
        <div className="review-row">
            <span className="review-label">Planned Progress (%):</span>
            <span className="review-value">{formData.PlannedProgress}</span>
        </div>
        <div className="review-row">
            <span className="review-label">Actual Progress (%):</span>
            <span className="review-value">{formData.ActualProgress}</span>
        </div>
       </section>
       <section className="review-section">
        <h3>Budget</h3>
            <div className="review-row">
            <span className="review-label">Budget Amount:</span>
            <span className="review-value">{formData.Budget}</span>
        </div>
        <div className="review-row">
            <span className="review-label">Budget Type:</span>
            <span className="review-value">{formData.BudgetType}</span>
        </div>
        <div className="review-row">
            <span className="review-label">Budget Status:</span>
            <span className="review-value">{formData.BudgetStatus}</span>
        </div>
     </section>
         <p className="text-sm-gray-600">
            Note: Once submitted, this project will be sent for approval. You can save as draft to continue editing later.
        </p> 
      <div>
           {/* ACTION BUTTONS */}
<div className="review-actions">
  <button onClick={handleClick} className="btn-approval">
    Send for Approval
  </button>
</div>
      </div>
</div>
 );
}
