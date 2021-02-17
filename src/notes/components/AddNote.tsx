import { ForgoRef, CSSProperties, rerender, ForgoAfterRenderArgs } from "forgo";
import { ForgoRenderArgs } from "forgo";
import { addNote } from "../actions";

export type AddNoteProps = {
  style?: CSSProperties;
  collapsed: boolean;
};

export default function AddNote(props: AddNoteProps) {
  let firstTimeLoad = true;
  let collapsed = props.collapsed;
  let noteTextareaRef: ForgoRef<HTMLTextAreaElement> = {};
  let noteTitleRef: ForgoRef<HTMLInputElement> = {};
  let noteTextareaPlaceholderRef: ForgoRef<HTMLTextAreaElement> = {};
  let noteText = "";

  return {
    render(props: AddNoteProps, args: ForgoRenderArgs) {
      function onPlaceholderClick() {
        if (collapsed) {
          collapsed = false;
          rerender(args.element);
        }
      }

      function showNoteEditor() {
        collapsed = false;
        noteText = (noteTextareaPlaceholderRef.value as HTMLTextAreaElement)
          .value;
        rerender(args.element);
      }

      function saveNote(e: MouseEvent) {
        addNote(
          (noteTitleRef.value as HTMLInputElement).value,
          (noteTextareaRef.value as HTMLTextAreaElement).value
        );
        collapsed = true;
        rerender(args.element);
        e.stopPropagation();
      }

      return (
        <div onclick={onPlaceholderClick}>
          {!collapsed ? (
            <div className="p-4 mt-6 mb-4 rounded-md border border-gray-400">
              <input
                className="focus:outline-none w-full font-bold text-lg mb-2"
                key="note_title"
                ref={noteTitleRef}
                placeholder="Title"
              />
              <br />
              <textarea
                className="focus:outline-none w-full"
                key="note_contents"
                ref={noteTextareaRef}
                rows={collapsed ? 1 : 6}
                placeholder="Add a note..."
              >
                {noteText}
              </textarea>
              <button
                className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                onclick={saveNote}
              >
                Save Note
              </button>
            </div>
          ) : (
            <div className="pt-3 pr-2 pb-2 pl-2 mt-6 mb-8 rounded-md border border-gray-400 max-w-3xl">
              <i className="material-icons">notes</i>
              <textarea
                className="focus:outline-none ml-4 resize-none"
                key="note_contents_placeholder"
                ref={noteTextareaPlaceholderRef}
                rows={1}
                onfocus={() => showNoteEditor()}
                onclick={() => showNoteEditor()}
                oncontextmenu={() => showNoteEditor()}
                onkeypress={() => showNoteEditor()}
                placeholder="Add a note..."
              ></textarea>
            </div>
          )}
        </div>
      );
    },
    afterRender(props: AddNoteProps, args: ForgoAfterRenderArgs) {
      if (firstTimeLoad && noteTextareaRef.value) {
        firstTimeLoad = false;
        noteTextareaRef.value.focus();
      }
    },
  };
}
