import { addTodo } from "../actions";
import {
  ForgoRef,
  rerender,
  ForgoAfterRenderArgs,
  ForgoRenderArgs,
} from "forgo";
import { JSX } from "forgo/jsx-runtime";

export type AddTodoProps = {
  collapsed: boolean;
};

export default function AddTodo(props: AddTodoProps) {
  let collapsed = props.collapsed;
  let taskText = "";
  let points = 0;
  let focusedOnce = false;
  let taskTextElement: ForgoRef<HTMLTextAreaElement> = {};

  return {
    render(props: AddTodoProps, args: ForgoRenderArgs) {
      /*
    If the user enters multiple lines, the first line becomes the title.
    And the rest becomes the description.
    TODO: Add support for tags in title and description.
    Perhaps give more prominence to title tags?
  */
      function onAddTodoClick() {
        const taskTextParts = taskText.split("\n").filter((x) => x);
        if (taskTextParts.length) {
          const title = taskTextParts[0];
          const description =
            taskTextParts.length > 1
              ? taskTextParts.slice(1).join("\n")
              : undefined;

          addTodo(title, description);
        }
        taskText = "";
        rerender(args.element);
      }

      function onPointsChange(e: JSX.TargetedEvent<HTMLInputElement>) {
        points = parseInt(e.currentTarget.value);
        rerender(args.element);
      }

      function onOpenTodoBox() {
        collapsed = false;
        rerender(args.element);
      }

      function collapseControl() {
        taskText = "";
        collapsed = true;
        rerender(args.element);
      }

      return (
        <>
          {collapsed ? (
            <button
              className="rounded-full bg-green-600 text-white py-2 px-4 text-sm"
              onclick={onOpenTodoBox}
            >
              + Add Todo
            </button>
          ) : (
            <div>
              <div>
                <div>
                  <ul>
                    <li>
                      <input type="checkbox" disabled={true} />
                      <textarea
                        ref={taskTextElement}
                        onchange={(e) => (taskText = e.currentTarget.value)}
                        placeholder="Type a description..."
                        value={taskText}
                      ></textarea>
                    </li>
                    <li>
                      <label>Tags</label>
                      <input placeholder="start typing tags..." type="text" />
                    </li>
                    <li>
                      <label>Due on</label>
                      <input placeholder="select a date..." type="text" />
                    </li>
                    <li>
                      <label>Points?</label>
                      <div>
                        <div>
                          <input
                            type="range"
                            min="0"
                            max="25"
                            defaultValue="0"
                            id="points"
                            onchange={onPointsChange}
                          />
                        </div>
                        <p>
                          {points === 0
                            ? "Optional. How many points do you get for finishing this?"
                            : `${points} points for finishing this`}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    {/* <Button color="primary" onclick={onAddTodoClick}>
                      Add this todo
                    </Button>
                    <Button color="standard" onclick={collapseControl}>
                      Cancel
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    },

    afterRender(props: AddTodoProps, args: ForgoAfterRenderArgs) {
      if (!focusedOnce && !collapsed && taskTextElement.value) {
        focusedOnce = true;
        taskTextElement.value.focus();
        rerender(args.element);
      }
    },
  };
}
