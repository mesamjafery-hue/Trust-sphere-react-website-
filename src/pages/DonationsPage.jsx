import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value);
}

const fields = [
  { name: "amount", label: "Amount", type: "number" },
  { name: "donorName", label: "Donor name", type: "text" },
  { name: "purpose", label: "Purpose", type: "text" },
  { name: "date", label: "Date", type: "date" },
];

export default function DonationsPage() {
  const {
    state: { donations },
    donations: donationActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Donations"
        title="Donation management"
        description="Add, review, update, and delete donation records with local storage persistence."
      />
      <EntitySection
        title="Donation records"
        description="Store every contribution with its donor, date, and fundraising purpose."
        fields={fields}
        items={donations}
        onCreate={donationActions.create}
        onUpdate={donationActions.update}
        onDelete={donationActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.donorName}</div>
            <div className="entity-meta">
              {formatCurrency(Number(item.amount || 0))} · {item.purpose}
            </div>
            <div className="entity-subtle">Donation date: {item.date}</div>
          </>
        )}
      />
    </>
  );
}
