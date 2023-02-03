import { ForgoRenderArgs } from "forgo";
import * as forgo from "forgo";
import { makeIcons } from "../../icons/index.js";

const icons = makeIcons({ viewBox: "0 0 24 24" });

export type SearchBarProps = {};

export default function SearchBar(props: SearchBarProps) {
  return {
    render(props: SearchBarProps, { update }: ForgoRenderArgs) {
      return (
        <div className="border-b pb-2 mb-6 flex text-sm">
          <span className="text-gray-500">{icons.search}</span>
          <input placeholder="Search..." className="ml-2 focus:outline-none" />
        </div>
      );
    },
  };
}
