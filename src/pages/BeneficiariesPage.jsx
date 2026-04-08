import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

const fields = [
  { name: "name", label: "Beneficiary name", type: "text" },
  { name: "category", label: "Category", type: "text" },
  { name: "supportType", label: "Support type", type: "text" },
];

export default function BeneficiariesPage() {
  const {
    state: { beneficiaries },
    beneficiaries: beneficiaryActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Beneficiaries"
        title="Beneficiary management"
        description="Track who is being supported, what kind of help they receive, and keep records up to date."
      />
      <EntitySection
        title="Beneficiary records"
        description="Maintain a current list of individuals, families, and institutions receiving support."
        fields={fields}
        items={beneficiaries}
        onCreate={beneficiaryActions.create}
        onUpdate={beneficiaryActions.update}
        onDelete={beneficiaryActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.name}</div>
            <div className="entity-meta">
              {item.category} · {item.supportType}
            </div>
          </>
        )}
      />
    </>
  );
}
