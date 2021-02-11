import { CSSProperties, ForgoRenderArgs, rerender } from "forgo";
import * as styles from "../styles";

function getColor(color: string, hovering: boolean) {
  const palette = color === "primary" ? styles.primary : styles.standard;
  return {
    background: palette.bg,
    color: palette.fg,
    border: `1px solid ${palette.bg}`,
    boxShadow: hovering ? `${palette.shadowColor} 0 0 1px 1px` : undefined,
  };
}

export type ButtonProps = {
  className?: string;
  color: "primary" | "standard";
  style: CSSProperties;
  onclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
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
          onmouseenter={() => setHovering(true)}
          onmouseleave={() => setHovering(false)}
          onfocus={() => setHovering(true)}
          onblur={() => setHovering(false)}
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
