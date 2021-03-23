import { addTodo } from "../actions";
import {
  ForgoRef,
  rerender,
  ForgoAfterRenderArgs,
  ForgoRenderArgs,
} from "forgo";
import Checkbox from "../../components/Checkbox";
import { JSX } from "forgo/jsx-runtime";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Section from "../../components/Section";

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
    render(props: AddTodoProps, { update }: ForgoRenderArgs) {
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
        update();
      }

      function onPointsChange(e: JSX.TargetedEvent<HTMLInputElement>) {
        points = parseInt(e.currentTarget.value);
        update();
      }

      function onOpenTodoBox() {
        collapsed = false;
        update();
      }

      function collapseControl() {
        taskText = "";
        collapsed = true;
        update();
      }

      function updateView(fn: () => void) {
        fn();
        update();
      }

      return (
        <>
          {collapsed ? (
            <Section>
              <Button type="primary" onClick={onOpenTodoBox}>
                + Add Todo
              </Button>
            </Section>
          ) : (
            <Section className="max-w-2xl bg-white shadow rounded-lg">
              <div className="px-8 pt-4 pb-4 flex-row space-y-4">
                <div className="border-b p-2">
                  <Checkbox className="mr-2" />
                  <textarea
                    ref={taskTextElement}
                    placeholder="Type a description..."
                    className="focus:outline-none"
                    rows={1}
                  ></textarea>
                </div>
                <TextField
                  labelWidth="64px"
                  label="Tags"
                  underlineLabel
                  type="text"
                  placeholder="starting typing tags..."
                />
                <TextField
                  labelWidth="64px"
                  label="Due?"
                  underlineLabel
                  type="text"
                  placeholder="add a date maybe"
                />

                <div className="flex">
                  <div style={{ width: "64px" }}>Points</div>
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
                      Optional. How many points do you get for finishing this?
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-left border border-t border-gray-200">
                <Button type="primary">Add this Todo</Button>
                <Button onClick={collapseControl}>Cancel</Button>
              </div>
            </Section>
          )}
        </>
      );
    },

    afterRender(props: AddTodoProps, { update }: ForgoAfterRenderArgs) {
      if (!focusedOnce && !collapsed && taskTextElement.value) {
        focusedOnce = true;
        taskTextElement.value.focus();
        update();
      }
    },
  };
}
