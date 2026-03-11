import { FileText } from "lucide-react";
import "./BasicInformation.css";

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
  };
  updateField: (field: string, value: any) => void;
  errors: Record<string, string>;
}

function BasicInformation({
  formData,
  updateField,
  errors,
}: Props) {

  const toggleIndicator = (value: string) => {
    const updated = formData.indicators.includes(value)
      ? formData.indicators.filter((v) => v !== value)
      : [...formData.indicators, value];

    updateField("indicators", updated);
  };

  return (
    <div className="basic-info">
      <div className="section-header">
        <div className="section-title">
          <FileText size={20} color="#9ca3af" />
          <div>
            <h2>Basic Information</h2>
            <p>Core project details and categorization</p>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="grid-2">
          <div>
            <label>
              Initiative Name <span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.initiativeName}
              onChange={(e) =>
                updateField("initiativeName", e.target.value)
              }
            />
            {errors.initiativeName && (
              <p className="error-text">{errors.initiativeName}</p>
            )}
          </div>

          <div>
            <label>
              Entity <span className="required">*</span>
            </label>
            <select
              value={formData.entity}
              onChange={(e) =>
                updateField("entity", e.target.value)
              }
            >
              <option value="">Select Entity</option>
              <option>Environment Agency Abu Dhabi</option>
              <option>Abu Dhabi National oil Company</option>
              <option>Dubai Electricity and Water Authority</option>
              <option>Masdar</option>
              <option>Abu Dhabi Distribution Company</option>
            </select>
            {errors.entity && (
              <p className="error-text">{errors.entity}</p>
            )}
          </div>
        </div>

        <div>
          <label>Scope</label>
          <input
            type="text"
            placeholder="Breif Scope description (Max 500 Charcters)"
            value={formData.scope}
            onChange={(e) =>
              updateField("scope", e.target.value)
            }
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            rows={4}
            placeholder="Detailed project Description (Max 5000 Characters)"
            value={formData.description}
            onChange={(e) =>
              updateField("description", e.target.value)
            }
          />
        </div>

        <div className="grid-2">
          <div>
            <label>Supporting Entity</label>
            <input
              type="text"
              value={formData.supportingEntity}
              onChange={(e) =>
                updateField("supportingEntity", e.target.value)
              }
            />
          </div>

          <div>
            <label>Initiative Source</label>
            <input
              type="text"
              placeholder="Source origin of initiative (max 300 Characters)"
              value={formData.initiativeSource}
              onChange={(e) =>
                updateField("initiativeSource", e.target.value)
              }
            />
          </div>
        </div>

        <div>
          <label>Strategic Objective</label>
          <textarea
            rows={3}
            placeholder="Strategic Objective and Alignment (max 1500 Characters)"
            value={formData.strategicObjective}
            onChange={(e) =>
              updateField("strategicObjective", e.target.value)
            }
          />
        </div>

        <div className="grid-2">
          <div>
            <label>
              Project Sector <span className="required">*</span>
            </label>
            <select
              value={formData.projectSector}
              onChange={(e) =>
                updateField("projectSector", e.target.value)
              }
            >
              <option value="">Select sector</option>
              <option>Renewable Energy</option>
              <option>Energy Efficiency</option>
              <option>Transporation</option>
              <option>Buildings</option>
              <option>Industry</option>
              <option>Waste Agriculture</option>
              <option>Forestry</option>
              <option>Others</option>
            </select>
            {errors.projectSector && (
              <p className="error-text">{errors.projectSector}</p>
            )}
          </div>

          <div>
            <label>
              Type of Initiative <span className="required">*</span>
            </label>
            <select
              value={formData.typeOfInitiative}
              onChange={(e) =>
                updateField("typeOfInitiative", e.target.value)
              }
            >
              <option value="">Select type</option>
              <option>InfraStructure Development</option>
              <option>Technology Implementation</option>
              <option>Policy Implementation</option>
              <option>Capcity Building</option>
              <option>ReSearch&Development</option>
              <option>Public Awareness</option>
              <option>Others</option>
            </select>
            {errors.typeOfInitiative && (
              <p className="error-text">{errors.typeOfInitiative}</p>
            )}
          </div>
        </div>

        <div>
          <label>Indicators and Targets 2023–2027</label>
          <div className="grid-2-small">
            {[
              "Energy Efficiency",
              "Air Quality Improvement",
              "Green Building Standards",
              "Climate Adaptation",
              "Renewable Energy Capacity",
               "Water Conservation",
              "Sustainable Transportation",
              "GHG Emission Reduction",
              "Waste Reduction",
              "Circular Economy"

            ].map((item) => (
              <label key={item} className="checkbox-row">
                <input
                  type="checkbox"
                  checked={formData.indicators.includes(item)}
                  onChange={() => toggleIndicator(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default BasicInformation;
