import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

const fields = [
  { name: "name", label: "Volunteer name", type: "text" },
  { name: "role", label: "Role", type: "text" },
  { name: "availability", label: "Availability", type: "text" },
  { name: "contact", label: "Contact", type: "text" },
];

export default function VolunteersPage() {
  const {
    state: { volunteers },
    volunteers: volunteerActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Volunteers"
        title="Volunteer management"
        description="Maintain an active roster of volunteers, their responsibilities, and availability windows."
      />
      <EntitySection
        title="Volunteer roster"
        description="Support internal operations by keeping volunteer assignments clear and editable."
        fields={fields}
        items={volunteers}
        onCreate={volunteerActions.create}
        onUpdate={volunteerActions.update}
        onDelete={volunteerActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.name}</div>
            <div className="entity-meta">
              {item.role} · {item.availability}
            </div>
            <div className="entity-subtle">{item.contact}</div>
          </>
        )}
      />
    </>
  );
}
