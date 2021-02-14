import { CSSProperties, ForgoNode, ForgoRenderArgs, rerender } from "forgo";

function getColor(color: string, hovering: boolean) {
  const palette =
    color === "primary"
      ? { bg: "black", fg: "white" }
      : { bg: "black", fg: "white" };
  return {
    background: palette.bg,
    color: palette.fg,
    border: `1px solid ${palette.bg}`,
    boxShadow: hovering ? `gray 0 0 1px 1px` : undefined,
  };
}

export type ButtonProps = {
  className?: string;
  color: "primary" | "standard";
  style?: CSSProperties;
  onclick?: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  children: ForgoNode | ForgoNode[];
};

export default function Button(props: ButtonProps) {
  let isHovering = false;

  return {
    render(props: ButtonProps, args: ForgoRenderArgs) {
      const { className, color, style, ...otherProps } = props;

      function setHovering(isItHovering: boolean) {
        isHovering = isItHovering;
        rerender(args.element);
      }
      return (
        <button
          className={className ? `${className} ` : "" + color}
          onmouseenter={(e) => setHovering(true)}
          onmouseleave={(e) => setHovering(false)}
          onfocus={(e) => setHovering(true)}
          onblur={(e) => setHovering(false)}
          {...otherProps}
          style={{
            padding: "0.5em 1em",
            borderRadius: "2em",
            borderWidth: "1px",
            cursor: "pointer",
            outline: "none",
            ...getColor(color, isHovering),
            ...style,
          }}
        ></button>
      );
    },
  };
}
