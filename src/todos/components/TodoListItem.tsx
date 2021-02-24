import { Todo } from "../../types";
import { colorForString } from "../../modules/colors";
import { Link } from "forgo-router";
import { ForgoAfterRenderArgs, ForgoRenderArgs, rerender } from "forgo";
import Checkbox from "../../components/Checkbox";
import ProcessingIcon from "../../components/ProcessingIcon";

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
        <li key={todo.id} className="align-middle my-2 -ml-1 flex text-sm">
          <Checkbox onChange={onCheckboxClick} checked={isChecked} />
          <span className="inline-block">
            {!isChecked ? (
              <span className="inline-block pt-0.5 mr-2">{todo.title}</span>
            ) : (
              <span className="inline-block w-12 h-2">
                <ProcessingIcon />
              </span>
            )}
            {!isChecked ? (
              todo.tags ? (
                <span className="inline-block">
                  {todo.tags.map((tag) => {
                    const [bg, fg] = colorForString(tag);
                    return (
                      <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className="link rounded-md font-thin mt-0.5 px-3 py-1 mr-1 text-xs"
                        style={{
                          backgroundColor: bg,
                          color: fg,
                        }}
                      >
                        #{tag}
                      </Link>
                    );
                  })}
                </span>
              ) : (
                <></>
              )
            ) : (
              <span className="inline-block pt-1">
                <span className="text-gray-500 -ml-4">
                  completing in {secondsLeft}s...
                </span>{" "}
                <a href="#" onclick={onCancelClick}>
                  cancel
                </a>
              </span>
            )}
          </span>
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
