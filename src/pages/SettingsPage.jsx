import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

export default function SettingsPage() {
  const {
    state: { settings },
    updateSettings,
    resetAllData,
  } = useAppContext();
  const [organizationName, setOrganizationName] = useState(settings.organizationName);
  const [dashboardGreeting, setDashboardGreeting] = useState(settings.dashboardGreeting);

  function handleSubmit(event) {
    event.preventDefault();
    updateSettings({ organizationName, dashboardGreeting });
  }

  return (
    <>
      <PageHeader
        eyebrow="Settings"
        title="Profile & settings"
        description="Customize trust preferences, switch themes, and clear stored data when needed."
      />
      <div className="row g-4">
        <div className="col-12 col-xl-7">
          <div className="glass-card h-100">
            <h3 className="section-title">Organization preferences</h3>
            <form className="vstack gap-3" onSubmit={handleSubmit}>
              <div>
                <label className="form-label fw-semibold" htmlFor="organizationName">
                  Organization name
                </label>
                <input
                  id="organizationName"
                  className="form-control"
                  value={organizationName}
                  onChange={(event) => setOrganizationName(event.target.value)}
                />
              </div>
              <div>
                <label className="form-label fw-semibold" htmlFor="dashboardGreeting">
                  Dashboard greeting
                </label>
                <textarea
                  id="dashboardGreeting"
                  className="form-control"
                  rows="4"
                  value={dashboardGreeting}
                  onChange={(event) => setDashboardGreeting(event.target.value)}
                />
              </div>
              <div>
                <label className="form-label fw-semibold" htmlFor="themeSelect">
                  Theme mode
                </label>
                <select
                  id="themeSelect"
                  className="form-select"
                  value={settings.theme}
                  onChange={(event) => updateSettings({ theme: event.target.value })}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div className="form-check">
                <input
                  id="notifications"
                  className="form-check-input"
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(event) => updateSettings({ notifications: event.target.checked })}
                />
                <label className="form-check-label" htmlFor="notifications">
                  Enable internal reminders and donation alerts
                </label>
              </div>
              <button className="btn btn-primary align-self-start" type="submit">
                Save preferences
              </button>
            </form>
          </div>
        </div>
        <div className="col-12 col-xl-5">
          <div className="glass-card h-100">
            <h3 className="section-title">Storage controls</h3>
            <p className="section-copy">
              Use the reset option to restore the app to its seeded demo data and clear all edits.
            </p>
            <button className="btn btn-outline-danger" type="button" onClick={resetAllData}>
              Clear stored data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
