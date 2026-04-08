import { useMemo, useState } from "react";

function createInitialValues(fields) {
  return Object.fromEntries(fields.map((field) => [field.name, ""]));
}

export default function EntitySection({
  title,
  description,
  fields,
  items,
  onCreate,
  onUpdate,
  onDelete,
  renderSummary,
}) {
  const initialValues = useMemo(() => createInitialValues(fields), [fields]);
  const [formValues, setFormValues] = useState(initialValues);
  const [editingId, setEditingId] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const payload = Object.fromEntries(
      Object.entries(formValues).map(([key, value]) => [key, value.trim()]),
    );

    if (editingId) {
      onUpdate(editingId, payload);
    } else {
      onCreate(payload);
    }

    setFormValues(initialValues);
    setEditingId("");
  }

  function startEdit(item) {
    setEditingId(item.id);
    setFormValues(
      Object.fromEntries(fields.map((field) => [field.name, String(item[field.name] ?? "")])),
    );
  }

  function cancelEdit() {
    setEditingId("");
    setFormValues(initialValues);
  }

  return (
    <section className="row g-4 align-items-start">
      <div className="col-12 col-xl-4">
        <div className="glass-card h-100">
          <h3 className="section-title">{title}</h3>
          <p className="section-copy">{description}</p>
          <form className="vstack gap-3" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.name}>
                <label className="form-label fw-semibold" htmlFor={field.name}>
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    className="form-control"
                    rows="4"
                    value={formValues[field.name]}
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    className="form-control"
                    value={formValues[field.name]}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            ))}
            <div className="d-flex gap-2">
              <button className="btn btn-primary flex-grow-1" type="submit">
                {editingId ? "Update record" : "Add record"}
              </button>
              {editingId ? (
                <button className="btn btn-outline-secondary" type="button" onClick={cancelEdit}>
                  Cancel
                </button>
              ) : null}
            </div>
          </form>
        </div>
      </div>
      <div className="col-12 col-xl-8">
        <div className="glass-card h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="section-title mb-0">Current records</h3>
            <span className="badge text-bg-light">{items.length} items</span>
          </div>
          <div className="vstack gap-3">
            {items.length ? (
              items.map((item) => (
                <article key={item.id} className="entity-row">
                  <div>{renderSummary(item)}</div>
                  <div className="d-flex gap-2 flex-wrap">
                    <button className="btn btn-sm btn-outline-primary" onClick={() => startEdit(item)}>
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">
                No records yet. Add the first one using the form on the left.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
