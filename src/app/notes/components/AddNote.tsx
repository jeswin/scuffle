import { ForgoRef, CSSProperties, ForgoRenderArgs, ForgoAfterRenderArgs } from "forgo";
import * as forgo from "forgo";
import { addNote } from "../actions";
import { iconsDefault as icons } from "../../../icons";
import PlaceholderTextBox from "../../components/PlaceholderTextBox";
import Button from "../../components/Button";
import Section from "../../components/Section";

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
    render(props: EditNoteProps, { update }: ForgoRenderArgs) {
      function showNoteEditor() {
        mode = "edit";
        noteText = (placeholderNoteTextRef.value as HTMLInputElement).value;
        update();
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
        update();
        e.stopPropagation();
      }

      function expandEditor(e: MouseEvent) {
        noteTitle = (noteTitleRef.value as HTMLInputElement).value;
        noteText = (noteTextRef.value as HTMLTextAreaElement).value;
        mode = "expanded";
        update();
        e.stopPropagation();
      }

      return (
        <div>
          {mode === "edit" ? (
            <Section className="bg-white shadow rounded-lg">
              <div className="px-8 pt-4 pb-4">
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
              </div>
              <div className="px-4 py-3 bg-gray-50 text-left border border-t border-gray-200 flex">
                <div className="flex-grow">
                  <Button onClick={saveNote} type="primary">
                    Save Note
                  </Button>
                </div>
                <div
                  className="p-2 -mr-2 cursor-pointer"
                  onclick={expandEditor}
                >
                  {icons.open_in_new}
                </div>
              </div>
            </Section>
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
                      <Button onClick={saveNote} type="primary">
                        Save Note
                      </Button>
                    </div>
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
