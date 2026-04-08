import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

const fields = [
  { name: "title", label: "Event title", type: "text" },
  { name: "date", label: "Date", type: "date" },
  { name: "location", label: "Location", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
];

export default function EventsPage() {
  const {
    state: { events },
    events: eventActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Event management"
        description="Create campaigns, orientation sessions, and community events with full edit and delete support."
      />
      <EntitySection
        title="Trust events"
        description="Document upcoming events so your organization can coordinate operations and outreach."
        fields={fields}
        items={events}
        onCreate={eventActions.create}
        onUpdate={eventActions.update}
        onDelete={eventActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.title}</div>
            <div className="entity-meta">
              {item.date} · {item.location}
            </div>
            <div className="entity-subtle">{item.description}</div>
          </>
        )}
      />
    </>
  );
}
