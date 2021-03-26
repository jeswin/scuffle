import * as forgo from "forgo";
import { matchExactUrl } from "forgo-router";
import NotesHome from "./components/Home";

export default function NotesIndex() {
  return {
    render() {
      return matchExactUrl("/notes", () => <NotesHome />);
    },
  };
}
