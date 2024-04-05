import { Checkbox } from "@mui/joy";
import OutlinedInput from "../OulinedInput";

export default function BuildingForm() {
  return (
    <div>
      <form className="space-y-6">
        <div>
          <OutlinedInput label="Building Name" />
        </div>
        <div>
          <OutlinedInput label="Number Of floors" />
        </div>
        <div>
          <Checkbox
            className="mb-4 mt-1"
            // onChange={() => {
            //   setHasGroundFloor((prev) => !prev);
            // }}
            // checked={hasGroundFloor}
            label="Does the building include a ground floor?"
          />
        </div>

        <div>
          <Checkbox
            className=" mt-1"
            label="Does the building have a basement?"
            // value={hasBasement}
            // onChange={() => {
            //   setHasBasement((prev) => !prev);
            // }}
          />
        </div>

        <div>
          <OutlinedInput
            className="mb-4"
            placeholder="No. of basement floors"
            type="number"
          />
        </div>
      </form>
    </div>
  );
}
