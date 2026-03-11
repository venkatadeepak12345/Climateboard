import { Calendar } from "lucide-react";
import "./TimelineManagement.css";

interface Props {
  formData: {
    projectManagerName: string;
    projectManagerEmail: string;
    projectManagerPhone: string;
    startDate: string;
    endDate: string;
  };
  updateField: (field: string, value: unknown) => void;
  errors: Record<string, string>;
}

export function TimelineManagement({
  formData,
  updateField,
  errors,
}: Props) {
  return (
    <div className="timeline-management">
      <div className="timeline-header">
        <h2>Timeline & Project Management</h2>
        <p>Project schedule and management details</p>
      </div>

      <div className="timeline-sections">
        {/* Project Manager */}
        <div className="grid-3">
          <div>
            <label>
              Project Manager Name <span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.projectManagerName}
              onChange={(e) =>
                updateField("projectManagerName", e.target.value)
              }
              className={errors.projectManagerName ? "input-error" : ""}
            />
            {errors.projectManagerName && (
              <p className="error-text">{errors.projectManagerName}</p>
            )}
          </div>

          <div>
            <label>
              Project Manager Email <span className="required">*</span>
            </label>
            <input
              type="email"
              value={formData.projectManagerEmail}
              onChange={(e) =>
                updateField("projectManagerEmail", e.target.value)
              }
              className={errors.projectManagerEmail ? "input-error" : ""}
            />
            {errors.projectManagerEmail && (
              <p className="error-text">{errors.projectManagerEmail}</p>
            )}
          </div>

          <div>
            <label>Project Manager Phone</label>
            <input
              type="tel"
              placeholder="+971-X-XXX-XXXX"
              value={formData.projectManagerPhone}
              onChange={(e) =>
                updateField("projectManagerPhone", e.target.value)
              }
            />
          </div>
        </div>

        {/* Start & End Dates */}
        <div className="grid-2">
          <div>
            <label>
              Start Date <span className="required">*</span>
            </label>
            <div className="date-field">
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  updateField("startDate", e.target.value)
                }
                className={errors.startDate ? "input-error" : ""}
              />
              <Calendar />
            </div>
            {errors.startDate && (
              <p className="error-text">{errors.startDate}</p>
            )}
          </div>

          <div>
            <label>
              End Date <span className="required">*</span>
            </label>
            <div className="date-field">
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  updateField("endDate", e.target.value)
                }
                className={errors.endDate ? "input-error" : ""}
              />
              <Calendar />
            </div>
            {errors.endDate && (
              <p className="error-text">{errors.endDate}</p>
            )}
          </div>
        </div>

        {/* Progress Period (UNCHANGED) */}
        <div className="grid-2">
          <div>
            <label>Progress Report Period – From</label>
            <div className="date-field">
              <input type="date" />
              <Calendar />
            </div>
          </div>

          <div>
            <label>Progress Report Period – To</label>
            <div className="date-field">
              <input type="date" />
              <Calendar />
            </div>
          </div>
        </div>

        {/* Phase & Status (UNCHANGED) */}
        <div className="grid-2">
          <div>
            <label>Project Phase</label>
            <select defaultValue="">
              <option value="" disabled>
                Select phase
              </option>
              <option>Planning</option>
              <option>Implementation</option>
              <option>Monitoring</option>
              <option>Completed</option>
            </select>
          </div>

          <div>
            <label>Status</label>
            <select defaultValue="">
              <option value="" disabled>
                Select status
              </option>
              <option>Active</option>
              <option>On Hold</option>
              <option>Delayed</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
