import { Bookmark, Note, ScuffleEntity, Todo } from "../../types";
import TodoListItem from "../todos/components/TodoListItem";
import { ForgoRenderArgs, rerender } from "forgo";
import groupEntitiesByDate from "../../utils/groupEntitiesByDate";
import { iconsDefault as icons } from "../../icons";
import BookmarksListItem from "../bookmarks/components/BookmarksListItem";
import NotesListItem from "../notes/components/NotesListItem";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export type ItemsByDateProps = {
  completeTodo: (todo: Todo) => void;
  items: {
    bookmarks: Bookmark[];
    notes: Note[];
    todos: Todo[];
  };
};

export default function ItemsByDate(props: ItemsByDateProps) {
  return {
    render(props: ItemsByDateProps, { update }: ForgoRenderArgs) {
      function onCompleteTodo(todo: Todo) {
        props.completeTodo(todo);
        update();
      }

      const groupedTodos = Array.from(
        groupEntitiesByDate<Todo>([[props.items.todos, (x) => x.createdAt]], {
          mergePast: true,
        }).entries()
      );

      const groupedItems = Array.from(
        groupEntitiesByDate<ScuffleEntity>([
          [props.items.bookmarks, (x) => x.createdAt],
          [props.items.notes, (x) => x.createdAt],
        ]).entries()
      );

      return (
        <div>
          {groupedTodos.length > 0 ? (
            <>
              <SectionHeading type="h2">Get these done...</SectionHeading>
              <div className="pb-2 rounded-md">
                {groupedTodos.map(([timeString, items]) => (
                  <Section className="last:mb-6">
                    <SectionHeading type="h3" icon={icons.access_time}>
                      {timeString}
                    </SectionHeading>
                    <ul>
                      {items.map((todo: Todo) => (
                        <TodoListItem
                          key={todo.id}
                          todo={todo}
                          onCompleteTodo={onCompleteTodo}
                        />
                      ))}
                    </ul>
                  </Section>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
          {groupedItems.length > 0 ? (
            <>
              <SectionHeading type="h2">
                Bookmarks, Notes and Files
              </SectionHeading>
              {groupedItems.map(([timeString, items]) => (
                <Section>
                  <SectionHeading type="h3" icon={icons.access_time}>
                    {timeString}
                  </SectionHeading>
                  <ul>
                    {(items.filter(
                      (x) => x.type === "bookmark"
                    ) as Bookmark[]).map((bookmark: Bookmark) => (
                      <BookmarksListItem
                        key={bookmark.id}
                        bookmark={bookmark}
                        summarize={true}
                      />
                    ))}
                    {(items.filter((x) => x.type === "note") as Note[]).map(
                      (note: Note) => (
                        <NotesListItem
                          key={note.id}
                          note={note}
                          summarize={true}
                        />
                      )
                    )}
                  </ul>
                </Section>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      );
    },
  };
}
