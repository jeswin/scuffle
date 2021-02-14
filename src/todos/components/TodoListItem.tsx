import { Todo } from "../../types";
import { colorForString } from "../../modules/colors";
import { StylesDictionary } from "../../types/ui";
import { Link } from "forgo-router";
import { ForgoAfterRenderArgs, ForgoRenderArgs, rerender } from "forgo";

export type TodoListItemProps = {
  todo: Todo;
  onCompleteTodo: (todo: Todo) => void;
};

const styles: StylesDictionary = {
  li: { padding: "0.5em", width: "100%", height: "1.5em" },
  checkboxWrapper: { float: "left", marginTop: "-2px" },
  checkbox: { marginRight: "0.8em", display: "block", float: "left" },
  text: {
    fontSize: "0.9em",
    marginRight: "0.5em",
    display: "block",
    float: "left",
  },
  waiting: { marginTop: "-4px", display: "block", float: "left" },
  completingText: {
    marginLeft: "1em",
    display: "block",
    float: "left",
    fontSize: "0.8em",
  },
  tagsWrapper: { float: "left" },
};

export default function TodoListItem({
  todo: todo,
  onCompleteTodo: completeTodo,
}: TodoListItemProps) {
  let secondsLeft: number | undefined;
  let isChecked = false;
  let timerState: { timeout?: number } = {};

  return {
    render(props: TodoListItemProps, args: ForgoRenderArgs) {
      function cancelTimeout() {
        if (timerState.timeout) {
          secondsLeft = undefined;
          window.clearTimeout(timerState.timeout);
          timerState.timeout = undefined;
          rerender(args.element);
        }
      }

      function onCheckboxClick() {
        const newCheckedState = !isChecked;
        isChecked = newCheckedState;
        cancelTimeout();
        rerender(args.element);
      }

      function onCancelClick(e: MouseEvent) {
        isChecked = false;
        cancelTimeout();
        e.preventDefault();
        rerender(args.element);
      }

      return (
        <li key={todo.id} style={{ ...styles.li }}>
          <div style={{ ...styles.checkboxWrapper }}>
            <input
              type="checkbox"
              onchange={onCheckboxClick}
              style={{ ...styles.checkbox }}
              checked={isChecked}
            />
          </div>
          {!isChecked ? (
            <span
              style={{
                ...styles.text,
              }}
            >
              {todo.title}
            </span>
          ) : (
            <span style={{ ...styles.waiting }}>
              <img src="/img/loading-row.gif" alt="loading" />
            </span>
          )}
          {!isChecked ? (
            todo.tags ? (
              <div style={{ ...styles.tagsWrapper }}>
                {todo.tags.map((tag) => {
                  const [bg, fg] = colorForString(tag);
                  return (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="link"
                      style={{
                        backgroundColor: bg,
                        color: fg,
                      }}
                    >
                      #{tag}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <></>
            )
          ) : (
            <span
              style={{
                ...styles.completingText,
              }}
            >
              <span style={{ color: "gray" }}>
                completing in {secondsLeft}s...
              </span>{" "}
              <a href="#" onclick={onCancelClick}>
                cancel
              </a>
            </span>
          )}
        </li>
      );
    },
    afterRender(props: TodoListItemProps, args: ForgoAfterRenderArgs) {
      if (secondsLeft !== undefined) {
        if (secondsLeft === 0) {
          completeTodo(todo);
        } else {
          timerState.timeout = window.setTimeout(() => {
            secondsLeft =
              secondsLeft !== undefined ? secondsLeft - 1 : undefined;
          }, 1000);
        }
      } else {
        if (isChecked) {
          secondsLeft = 5;
        }
      }
      rerender(args.element);
    },
  };
}
