import { Todo } from "../../types";
import { colorForString } from "../../modules/colors";
import { StylesDictionary } from "../../types/ui";
import { Link } from "forgo-router";
import { ForgoAfterRenderArgs, ForgoRenderArgs, rerender } from "forgo";
import Checkbox from "../../components/Checkbox";

export type TodoListItemProps = {
  todo: Todo;
  onCompleteTodo: (todo: Todo) => void;
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
        isChecked = !isChecked;
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
        <li key={todo.id} className="align-middle pt-2 pb-2 flex text-sm">
          <Checkbox onChange={onCheckboxClick} checked={isChecked} />
          {!isChecked ? (
            <span className="inline-block pt-1">{todo.title}</span>
          ) : (
            <span className="inline-block w-12 h-2">
              <svg
                version="1.1"
                id="L4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 20 100 100"
                enable-background="new 0 0 0 0"
              >
                <circle fill="gray" stroke="none" cx="6" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"
                  />
                </circle>
                <circle fill="gray" stroke="none" cx="26" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.2"
                  />
                </circle>
                <circle fill="gray" stroke="none" cx="46" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3"
                  />
                </circle>
              </svg>
            </span>
          )}
          {!isChecked ? (
            todo.tags ? (
              <div>
                {todo.tags.map((tag) => {
                  const [bg, fg] = colorForString(tag);
                  return (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="inline-block link rounded-md font-thin mt-0.5 px-3 py-1 ml-1 mr-1 text-xs"
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
            <span className="inline-block pt-1">
              <span className="text-gray-400 -ml-4">
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
            rerender(args.element);
          }, 1000);
        }
      } else {
        if (isChecked) {
          secondsLeft = 5;
          rerender(args.element);
        }
      }
    },
  };
}
