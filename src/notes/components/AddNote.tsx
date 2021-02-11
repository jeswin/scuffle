import { ForgoRef, CSSProperties, rerender } from "forgo";
import { ForgoRenderArgs } from "forgo/jsx-runtime";
import Button from "../../components/Button";
import * as commonStyles from "../../styles";

export type AddNoteProps = {
  style?: CSSProperties;
  collapsed: boolean;
};

const containerStyle: CSSProperties = {
  minWidth: "16em",
  maxWidth: "40em",
  border: `1px solid ${commonStyles.standard.border}`,
  borderRadius: commonStyles.borderRadius,
};

const textareaStyle: CSSProperties = {
  resize: "none",
  border: "none",
  outline: "none",
  width: "100%",
};

export default function AddNote(props: AddNoteProps) {
  let firstTimeLoad = true;
  let collapsed = props.collapsed;
  let noteTextareaRef: ForgoRef<HTMLTextAreaElement>;

  return {
    render(props: AddNoteProps, args: ForgoRenderArgs) {
      if (firstTimeLoad && noteTextareaRef.value) {
        firstTimeLoad = false;
        noteTextareaRef.value.focus();
      }

      function onPlaceholderClick() {
        if (collapsed) {
          collapsed = false;
          rerender(args.element);
        }
      }

      function collapse(isCollapsed: boolean) {
        collapsed = isCollapsed;
        rerender(args.element);
      }

      function onEditorClose() {
        collapsed = true;
        noteTextareaRef.value?.focus();
      }

      function focusOnTextArea() {
        noteTextareaRef;
      }

      const condensedStyle = collapsed
        ? { padding: "1em" }
        : { padding: "1em" };

      return (
        <div
          style={{
            ...containerStyle,
            ...condensedStyle,
            ...props.style,
          }}
          onclick={onPlaceholderClick}
        >
          {!collapsed ? (
            <>
              <div>
                <textarea
                  key="note_title"
                  rows={1}
                  placeholder="Title"
                  style={{
                    height: "32px",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    ...textareaStyle,
                  }}
                ></textarea>
              </div>
            </>
          ) : undefined}
          <div
            style={{
              ...(collapsed ? { display: "flex", height: "20px" } : undefined),
            }}
          >
            {collapsed ? (
              <i
                className="material-icons"
                style={{
                  marginTop: "-2px",
                }}
              >
                notes
              </i>
            ) : undefined}
            <textarea
              key="note_contents"
              ref={noteTextareaRef}
              rows={collapsed ? 1 : 6}
              style={{
                ...textareaStyle,
                ...(collapsed ? { marginLeft: "1em" } : undefined),
              }}
              onkeypress={() => collapse(false)}
              placeholder="Add a note..."
            ></textarea>
          </div>
          {!collapsed ? (
            <>
              <div>
                <Button
                  onclick={onEditorClose}
                  style={{ marginLeft: "-4px" }}
                  color="standard"
                >
                  Close
                </Button>
              </div>
              <div>
                <Button
                  onclick={onEditorClose}
                  style={{ marginLeft: "-4px" }}
                  color="standard"
                >
                  Save
                </Button>
              </div>
            </>
          ) : undefined}
        </div>
      );
    },
  };
}
