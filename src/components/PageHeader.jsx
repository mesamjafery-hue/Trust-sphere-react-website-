export default function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="page-title mb-2">{title}</h2>
        <p className="page-copy mb-0">{description}</p>
      </div>
      {action}
    </div>
  );
}
