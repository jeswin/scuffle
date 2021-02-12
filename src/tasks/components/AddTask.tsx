import { addTask } from "../actions";
import Button from "../../components/Button";
import { FormEvent, StylesDictionary } from "../../types/ui";
import { ForgoRef, rerender, ForgoAfterRenderArgs, ForgoRenderArgs  } from "forgo";
import { JSX } from "forgo/jsx-runtime";

export type AddTaskProps = {
  collapsed: boolean;
};

const styles: StylesDictionary = {
  wrappperBorder: {
    padding: "1em 2em",
    border: "1px solid lightgray",
    maxWidth: "500px",
    borderRadius: "4px",
  },
  formRow: {
    borderBottom: "1px solid lightgray",
    padding: "0.5em",
    display: "flex",
  },
  textarea: {
    marginLeft: "1em",
    outline: "none",
    border: "none",
    resize: "none",
  },
  textInput: {
    marginLeft: "1em",
    outline: "none",
    border: "none",
  },
  selectInput: {
    marginLeft: "1em",
  },
  rangeInput: {
    outline: "none",
    marginLeft: "1em",
  },
  buttonsRow: {
    marginTop: "6px",
  },
  label: {
    textAlign: "right",
    display: "inline-block",
    width: "64px",
    fontSize: "14px",
    marginRight: "1em",
  },
  formSubtext: {
    color: "gray",
    fontSize: "12px",
    marginLeft: "14px",
    padding: "0px",
    marginBottom: "0px",
  },
};

export default function AddTask(props: AddTaskProps) {
  let collapsed = props.collapsed;
  let taskText = "";
  let points = 0;
  let focusedOnce = false;
  let taskTextElement: ForgoRef<HTMLTextAreaElement>;

  return {
    render(props: AddTaskProps, args: ForgoRenderArgs) {
      /*
    If the user enters multiple lines, the first line becomes the title.
    And the rest becomes the description.
    TODO: Add support for tags in title and description.
    Perhaps give more prominence to title tags?
  */
      function onAddTaskClick() {
        const taskTextParts = taskText.split("\n").filter((x) => x);
        if (taskTextParts.length) {
          const title = taskTextParts[0];
          const description =
            taskTextParts.length > 1
              ? taskTextParts.slice(1).join("\n")
              : undefined;

          addTask(title, description);
        }
        taskText = "";
        rerender(args.element);
      }

      function onPointsChange(e: JSX.TargetedEvent<HTMLInputElement>) {
        points = parseInt(e.currentTarget.value);
        rerender(args.element);
      }

      function onOpenTasksBox() {
        collapsed = false;
        rerender(args.element);
      }

      function collapseControl() {
        taskText = "";
        collapsed = false;
        rerender(args.element);
      }

      return (
        <>
          {collapsed ? (
            <Button color="primary" onclick={onOpenTasksBox}>
              + Add Task
            </Button>
          ) : (
            <div style={{ marginBottom: "1em" }}>
              <div style={{ marginBottom: "12px" }}>
                <div
                  style={{
                    ...styles.wrappperBorder,
                  }}
                >
                  <ul>
                    <li style={{ ...styles.formRow, display: "flex" }}>
                      <input type="checkbox" disabled={true} />
                      <textarea
                        ref={taskTextElement}
                        style={{
                          ...styles.textarea,
                          flexGrow: 100,
                        }}
                        onchange={(e) => (taskText = e.currentTarget.value)}
                        placeholder="Type a description..."
                        value={taskText}
                      ></textarea>
                    </li>
                    <li style={{ ...styles.formRow }}>
                      <label
                        style={{
                          ...styles.label,
                        }}
                      >
                        Tags
                      </label>
                      <input
                        style={{
                          ...styles.textInput,
                        }}
                        placeholder="start typing tags..."
                        type="text"
                      />
                    </li>
                    <li style={{ ...styles.formRow }}>
                      <label
                        style={{
                          ...styles.label,
                        }}
                      >
                        Due on
                      </label>
                      <input
                        style={{
                          ...styles.textInput,
                        }}
                        placeholder="select a date..."
                        type="text"
                      />
                    </li>
                    <li style={{ ...styles.formRow, borderBottom: "none" }}>
                      <label
                        style={{
                          ...styles.label,
                          paddingTop: "6px",
                        }}
                      >
                        Points?
                      </label>
                      <div>
                        <div style={{ paddingTop: "4px" }}>
                          <input
                            style={{ ...styles.rangeInput }}
                            type="range"
                            min="0"
                            max="25"
                            defaultValue="0"
                            id="points"
                            onchange={onPointsChange}
                          />
                        </div>
                        <p style={{ ...styles.formSubtext }}>
                          {points === 0
                            ? "Optional. How many points do you get for finishing this?"
                            : `${points} points for finishing this`}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div style={{ ...styles.buttonsRow }}>
                    <Button
                      color="primary"
                      style={{ marginRight: "6px" }}
                      onclick={onAddTaskClick}
                    >
                      Add this task
                    </Button>
                    <Button color="standard" onclick={collapseControl}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    },

    afterRender(props: AddTaskProps, args: ForgoAfterRenderArgs) {
      if (!focusedOnce && !collapsed && taskTextElement.value) {
        focusedOnce = true;
        taskTextElement.value.focus();
        rerender(args.element);
      }
    },
  };
}
