import {useState } from "react";
import {ChevronLeft, Save } from "lucide-react";
import {useNavigate } from "react-router-dom";
import BasicInformation from "./forms/BasicInformation";
import {TimelineManagement } from "./forms/TimelineManagement";
import {MetricsBudget } from "./forms/MetricsBudget";
import {ReviewSubmit } from "./forms/ReviewSubmit";
type Errors = Record<string, string>;
export function NewProjectForm() {
const navigate = useNavigate();
const [currentStep, setCurrentStep] = useState(1);
const totalSteps = 4;
const [formData, setFormData] = useState({
    /* Step 1 */
    initiativeName: "",
    entity: "",
    scope: "",
    description: "",
    supportingEntity: "",
    initiativeSource: "",
    strategicObjective: "",
    projectSector: "",
    typeOfInitiative: "",
    indicators: [] as string[],
    /* Step 2 */
    projectManagerName: "",
    projectManagerEmail: "",
    projectManagerPhone: "",
    startDate: "",
    endDate: "",
    /* Step 3 */
    PlannedGHGReduction: "",
    AchievedGHGReduction: "",
    PlannedProgress: 0,
    ActualProgress: 0,
    Budget: "",
    BudgetType: 0,
    BudgetStatus: ""
    });
  const [errors, setErrors] = useState<Errors>({});
  const updateField=(field:string,value:unknown)=>{
    setFormData((prev)=>({...prev,[field]:value}))
    setErrors((prev)=>({...prev,[field]:''}))
  };
  const validateStep1 = () => {
    const newErrors: Errors = {};
    if (!formData.initiativeName.trim())
      newErrors.initiativeName = "Initiative name is required";
    if (!formData.entity)
      newErrors.entity = "Entity is required";
    if (!formData.projectSector)
      newErrors.projectSector = "Project sector is required";
    if (!formData.typeOfInitiative)
      newErrors.typeOfInitiative = "Type of initiative is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
   const validateStep2 = () => {
    const newErrors: Errors = {};
    if (!formData.projectManagerName)
      newErrors.projectManagerName = "Project manager name is required";
    if (!formData.projectManagerEmail)
      newErrors.projectManagerEmail = "Project manager email is required";
    if (!formData.startDate)
      newErrors.startDate = "Start date is required";
    if (!formData.endDate)
      newErrors.endDate = "End date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleCancel = () => navigate("/project/registry");
  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
  };
  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };
  const getCompletionPercentage = () =>
    (currentStep / totalSteps) * 100;
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-sm">
        {/* HEADER */}
        <div className="border-b border-gray-200 px-8 py-6">
          <div className="flex justify-between mb-4">
            <div>
              <h1 className="text-gray-900 mb-1">New Project</h1>
              <p className="text-sm text-gray-500">
                Climate Change Mitigation Project Registration
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={handleCancel}>Cancel</button>
              <button className="flex gap-2 border px-4 py-2 rounded-lg">
                <Save className="w-4 h-4" />
                Save Draft
              </button>
            </div>
          </div>
          {/* PROGRESS BAR */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(getCompletionPercentage())}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-green-600 rounded-full"
                style={{ width: `${getCompletionPercentage()}%` }}
              />
            </div>
          </div>
        </div>
        {/* FORM CONTENT */}
        <div className="p-8">
          {currentStep === 1 && (
            <BasicInformation
              formData={formData}
              updateField={updateField}
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <TimelineManagement
              formData={formData}
              updateField={updateField}
              errors={errors}
            />
          )}
          {currentStep === 3 && <MetricsBudget />}
          {currentStep === 4 && (
            <div className="text-center py-12">
              <h2>Review & Submit</h2>
              <p>Review your project details and submit</p>
              <ReviewSubmit formData={formData} />
            </div>
          )}
        </div>
        {/* FOOTER */}
        <div className="border-t px-8 py-4 flex justify-between">
         <button
  onClick={handlePrevious}
  disabled={currentStep === 1}
  className="flex items-center gap-2 px-4 py-2 rounded-lg
             border border-gray-300 text-gray-700
             hover:bg-gray-100
             disabled:opacity-50 disabled:cursor-not-allowed"
>
  <ChevronLeft className="w-4 h-4" />
  Previous
</button>
{currentStep !== totalSteps && (
  <button
    onClick={handleNext}
    className="flex items-center gap-2 px-6 py-2 rounded-lg
               bg-green-600 text-white
               hover:bg-green-700
               disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    Next
    <ChevronLeft className="w-4 h-4 rotate-180" />
  </button>
)}
        </div>
      </div>
    </div>
  );
}
