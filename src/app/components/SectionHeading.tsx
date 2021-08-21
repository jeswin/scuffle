import { ForgoComponent, ForgoNode } from "forgo";
import * as forgo from "forgo";

export type SectionHeadingProps = {
  type: "h1" | "h2" | "h3";
  icon?: ForgoComponent<any>;
  children?: ForgoNode | ForgoNode[];
};

export default function SectionHeading(initialProps: SectionHeadingProps) {
  return {
    render(props: SectionHeadingProps) {
      return props.type === "h1" ? (
        <h1 className={`mb-6 font-sans font-bold text-md`}>{props.children}</h1>
      ) : props.type === "h2" ? (
        <h2 className={`mb-6 font-serif font-bold text-md`}>
          {props.children}
        </h2>
      ) : (
        <div className="flex mb-6 items-center">
          {props.icon || <></>}
          {props.icon ? (
            <h3 className="pl-2 text-sm font-bold">{props.children}</h3>
          ) : (
            <h3 className="text-sm font-bold">{props.children}</h3>
          )}
        </div>
      );
    },
  };
}
