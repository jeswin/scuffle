import { Note } from "../../types";
import * as styles from "../../styles";
import { CSSProperties } from "forgo";

const listStyle: CSSProperties = {
  border: "1px solid lightgrey",
  borderRadius: "4px",
  width: "15em",
  alignSelf: "baseline",
  cursor: "pointer",
  margin: "0 2em 2em 0",
  minHeight: "12em",
  maxHeight: "24em",
  paddingBottom: "1em",
  overflow: "hidden",
  boxShadow: styles.standard.shadow,
};

const titleStyle: CSSProperties = {
  padding: "1em",
  fontWeight: "bold",
};

const textStyle: CSSProperties = {
  fontSize: "0.8em",
  lineHeight: "1.4",
  padding: "0 1em 1em 1em",
  fontWeight: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export default function NotesListItem(note: Note & { key: string }) {
  return {
    render() {
      return (
        <li className="item" style={{ ...listStyle }}>
          <div style={titleStyle}>{note.title}</div>
          <div style={textStyle}>{note.text}</div>
        </li>
      );
    },
  };
}
