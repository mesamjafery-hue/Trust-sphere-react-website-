import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import BeneficiariesPage from "./pages/BeneficiariesPage";
import DashboardPage from "./pages/DashboardPage";
import DonationsPage from "./pages/DonationsPage";
import EventsPage from "./pages/EventsPage";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";
import VolunteersPage from "./pages/VolunteersPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/beneficiaries" element={<BeneficiariesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/volunteers" element={<VolunteersPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
