import OutlinedInput from "../OulinedInput";
import Select from "../select";

export default function UnitForm() {
  return (
    <div>
      <form className="space-y-6">
        <div>
          <OutlinedInput label="Unit name" />
        </div>
        <div>
          <Select
            label="Unit type"
            options={[
              { id: 1, name: "Residential" },
              { id: 2, name: "Commercial" },
            ]}
          />
        </div>
        <div>
          <OutlinedInput label=" Gross Lettable Area (Built up area)" />
        </div>
        <div>
          <OutlinedInput label="Net Lettable Area (Carpet area)" />
        </div>
      </form>
    </div>
  );
}
