import "./MetricsBudget.css";

export function MetricsBudget() {
  return (
    <div className="metrics-budget">
      <div className="metrics-header">
        <h2>Metrics & Budget</h2>
        <p>Performance metrics, targets, and financial information</p>
      </div>

      <div className="metrics-sections">
        {/* GHG Emission Metrics */}
        <div className="grid-2">
          <div>
            <label>Planned GHG Emission Reduction (tCO2e)</label>
            <input type="number" />
          </div>
          <div>
            <label>Emission Reduction Achieved (tCO2e)</label>
            <input type="number" />
          </div>
        </div>

        {/* Progress Metrics */}
        <div className="grid-2">
          <div>
            <label>Planned Progress (%)</label>
            <input type="number" min={0} max={100} />
          </div>
          <div>
            <label>Actual Progress (%)</label>
            <input type="number" min={0} max={100} />
          </div>
        </div>

        {/* Budget Information */}
        <div className="grid-3">
          <div>
            <label>Budget (AED)</label>
            <input type="number" />
          </div>
          <div>
            <label>Budget Type</label>
            <select>
              <option>Select budget type</option>
              <option>Capital</option>
              <option>Operational</option>
              <option>Mixed</option>
            </select>
          </div>
          <div>
            <label>Budget Status</label>
            <select>
              <option>Select budget status</option>
              <option>Allocated</option>
              <option>Partially Spent</option>
              <option>Fully Spent</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        {/* Challenges */}
        <div>
          <label>Challenges</label>
          <textarea rows={4} />
        </div>

        {/* Raise Challenge */}
        <div>
          <label>Raise Challenge to Committee</label>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="raiseChallenge" value="yes" />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="raiseChallenge" value="no" defaultChecked />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Activities */}
        <div>
          <label>Activities, Outcomes & Output</label>
          <textarea rows={4} />
        </div>

        {/* Comments */}
        <div>
          <label>Comments</label>
          <textarea rows={3} />
        </div>
      </div>
    </div>
  );
}
