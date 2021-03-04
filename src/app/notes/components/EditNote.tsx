import { ForgoRef, CSSProperties, rerender, ForgoAfterRenderArgs } from "forgo";
import { ForgoRenderArgs } from "forgo";
import { addNote } from "../actions";
import { iconsDefault as icons } from "../../../icons";
import PlaceholderTextBox from "../../components/PlaceholderTextBox";

export type EditNoteProps = {
  style?: CSSProperties;
  mode: "collapsed" | "edit" | "expanded";
};

export default function AddNote(props: EditNoteProps) {
  let firstTimeLoad = true;
  let mode = props.mode;
  let noteTextRef: ForgoRef<HTMLTextAreaElement> = {};
  let noteTitleRef: ForgoRef<HTMLInputElement> = {};
  let expandedNoteTextRef: ForgoRef<HTMLTextAreaElement> = {};
  let expandedNoteTitleRef: ForgoRef<HTMLInputElement> = {};
  let placeholderNoteTextRef: ForgoRef<HTMLInputElement> = {};
  let noteTitle = "";
  let noteText = "";

  return {
    render(props: EditNoteProps, args: ForgoRenderArgs) {
      function showNoteEditor() {
        mode = "edit";
        noteText = (placeholderNoteTextRef.value as HTMLInputElement).value;
        rerender(args.element);
      }

      function saveNote(e: MouseEvent) {
        [noteTitle, noteText] =
          mode === "expanded"
            ? [
                (expandedNoteTitleRef.value as HTMLInputElement).value,
                (expandedNoteTextRef.value as HTMLTextAreaElement).value,
              ]
            : [
                (noteTitleRef.value as HTMLInputElement).value,
                (noteTextRef.value as HTMLTextAreaElement).value,
              ];

        addNote(noteTitle, noteText);
        mode = "collapsed";
        rerender(args.element);
        e.stopPropagation();
      }

      function expandEditor(e: MouseEvent) {
        noteTitle = (noteTitleRef.value as HTMLInputElement).value;
        noteText = (noteTextRef.value as HTMLTextAreaElement).value;
        mode = "expanded";
        rerender(args.element);
        e.stopPropagation();
      }

      return (
        <div>
          {mode === "edit" ? (
            <div className="p-4 mb-8 rounded-md border border-gray-400">
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
                ref={noteTextRef}
                rows={6}
                placeholder="Add a note..."
              >
                {noteText}
              </textarea>
              <div className="flex">
                <div className="flex-grow">
                  <button
                    className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                    onclick={saveNote}
                  >
                    Save Note
                  </button>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    class="mt-3"
                    onclick={expandEditor}
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g>
                        <path d="M20,12L20,12c-0.55,0-1,0.45-1,1v6H5V5h6c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2 h14c1.1,0,2-0.9,2-2v-6C21,12.45,20.55,12,20,12z" />
                        <path d="M20.5,3h-5.29c-0.45,0-0.67,0.54-0.35,0.85l1.94,1.94L9,13.59C8.61,13.98,8.61,14.61,9,15h0c0.39,0.39,1.02,0.39,1.41,0 l7.79-7.79l1.94,1.94C20.46,9.46,21,9.24,21,8.79V3.5C21,3.22,20.78,3,20.5,3z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          ) : mode === "expanded" ? (
            <div>
              <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-40 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"></div>
              <div className="fixed top-0 left-0 right-0 bottom-0 p-8 w-full h-screen z-50 overflow-hidden  opacity-100 flex flex-col items-center justify-center">
                <div className="p-8 mt-6 mb-4 w-full bg-white rounded-md border border-gray-400 flex flex-col h-full">
                  <input
                    className="focus:outline-none w-full font-bold text-lg mb-2"
                    key="note_title"
                    ref={expandedNoteTitleRef}
                    placeholder="Title"
                    value={noteTitle}
                  />
                  <textarea
                    className="focus:outline-none resize-none w-full flex-grow"
                    key="note_contents"
                    ref={expandedNoteTextRef}
                    rows={6}
                    placeholder="Add a note..."
                  >
                    {noteText}
                  </textarea>
                  <div className="flex mt-4">
                    <div className="flex-grow">
                      <button
                        className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                        onclick={saveNote}
                      >
                        Save Note
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <PlaceholderTextBox
              icon={icons.notes}
              ref={placeholderNoteTextRef}
              onClick={showNoteEditor}
              placeholder="Add a note..."
            />
          )}
        </div>
      );
    },
    afterRender(props: EditNoteProps, args: ForgoAfterRenderArgs) {
      if (firstTimeLoad && noteTextRef.value) {
        firstTimeLoad = false;
        noteTextRef.value.focus();
      }
    },
  };
}
