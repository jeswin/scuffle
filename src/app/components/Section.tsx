import { ForgoNode } from "forgo";
import * as forgo from "forgo";
import { getClassName } from "../../utils/uiUtils.js";

export type SectionProps = {
  className?: string;
  children?: ForgoNode | ForgoNode[];
};

export default function Section(initialProps: SectionProps) {
  return {
    render(props: SectionProps) {
      return (
        <div className={getClassName("mb-8", props.className)}>
          {props.children}
        </div>
      );
    },
  };
}
