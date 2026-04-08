import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-shell min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-xl-9">
            <div className="eyebrow">TrustSphere</div>
            <h1 className="landing-title">
              Organize every act of care with one reliable trust management dashboard.
            </h1>
            <p className="landing-copy">
              Manage donations, beneficiary records, volunteer operations, events, and internal
              settings in a polished frontend workflow built for real trust organizations.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-lg btn-primary" to="/dashboard">
                Open Dashboard
              </Link>
              <Link className="btn btn-lg btn-outline-light" to="/search">
                Explore Search Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
