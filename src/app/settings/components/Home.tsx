import * as forgo from "forgo";
import SectionHeading from "../../components/SectionHeading.js";
import EditableText from "../../components/EditableText.js";
import { iconsDefault as icons } from "../../../icons/index.js";

export default function SettingsHome() {
  return {
    render() {
      return (
        <div>
          <div className="flex">
            <SectionHeading type="h2">Settings</SectionHeading>
            <span className="flex ml-4">
              {icons.edit}
              <span className="text-sm">Edit</span>
            </span>
          </div>
          <EditableText text="hello world" />
        </div>
      );
    },
  };
}
