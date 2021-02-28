import BookmarksList from "./BookmarksList";
import { Link } from "forgo-router";
import AddBookmark from "./AddBookmark";

export default function TodosHome() {
  return {
    render() {
      return (
        <div>
          <div>
            <AddBookmark collapsed={true} />
          </div>
          <div>
            <BookmarksList />
          </div>
        </div>
      );
    },
  };
}
