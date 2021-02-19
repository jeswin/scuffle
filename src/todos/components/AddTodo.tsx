import { addTodo } from "../actions";
import {
  ForgoRef,
  rerender,
  ForgoAfterRenderArgs,
  ForgoRenderArgs,
} from "forgo";
import Checkbox from "../../components/Checkbox";
import { JSX } from "forgo/jsx-runtime";

export type AddTodoProps = {
  collapsed: boolean;
};

export default function AddTodo(props: AddTodoProps) {
  let points = 3;
  let collapsed = props.collapsed;
  let taskText = "";
  let focusedOnce = false;
  let taskTextElement: ForgoRef<HTMLTextAreaElement> = {};

  return {
    render(props: AddTodoProps, args: ForgoRenderArgs) {
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

      function updateView(fn: () => void) {
        fn();
        rerender(args.element);
      }

      return (
        <>
          {collapsed ? (
            <button
              className="rounded-full bg-green-600 text-white py-2 px-4 text-sm focus:outline-none"
              onclick={onOpenTodoBox}
            >
              + Add Todo
            </button>
          ) : (
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow sm:rounded-lg sm:overflow-hidden">
                      <div className="bg-white pl-3 pr-3">
                        <div className="px-4 py-3 bg-white space-y-3 sm:p-6">
                          <div className="border-b p-2">
                            <Checkbox className="align-top" />
                            <textarea
                              ref={taskTextElement}
                              placeholder="Type a description..."
                              className="focus:outline-none"
                              rows={1}
                            ></textarea>
                          </div>
                          <div className="flex space-x-4 border-b p-2">
                            <div style={{ width: "50px" }}>Tags</div>
                            <div>
                              <input
                                type="text"
                                className="focus:outline-none"
                                placeholder="starting typing tags..."
                              />
                            </div>
                          </div>
                          <div className="flex space-x-4 border-b p-2">
                            <div style={{ width: "50px" }}>Due?</div>
                            <div>
                              <input
                                type="text"
                                className="focus:outline-none"
                                placeholder="add a date maybe"
                              />
                            </div>
                          </div>
                          <div className="flex space-x-4 p-2">
                            <div style={{ width: "50px" }}>Points</div>
                            <div>
                              <input
                                type="range"
                                min="1"
                                max="11"
                                value={points}
                                onchange={(e) =>
                                  updateView(() => {
                                    points = parseInt(e.currentTarget.value);
                                  })
                                }
                              />
                              <span className="pl-3 text-sm text-gray-600 inline-block align-top">
                                {points} points
                              </span>
                              <p className="text-sm text-gray-400">
                                Optional. How many points do you get for
                                finishing this?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                        <button className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                          Add this Todo
                        </button>
                        <button className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
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
