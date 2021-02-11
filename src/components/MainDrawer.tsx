import { CSSProperties } from "forgo";
import { navigateTo } from "forgo-router";
import { loadRecentTags } from "../actions";
import SettingsIcon from "./SettingsIcon";
import TagCloud from "./TagCloud";
import state from "../state";
import { bindToStateProps } from "forgo-state/dist";

const styles: {
  [name: string]: CSSProperties;
} = {
  drawer: {
    background: "#eee",
    height: "100%",
    position: "fixed",
    maxWidth: "280px",
    cursor: "pointer",
  },
  li: { fontWeight: "bold", fontSize: "0.9em", padding: "1em", height: "24px" },
  icon: { marginRight: "12px", float: "left" },
  listItemName: {
    display: "block",
    float: "left",
    paddingTop: "4px",
  },
};

export default function MainDrawer() {
  loadRecentTags();

  const component = {
    render() {
      return (
        <>
          <div style={{ ...styles.drawer }}>
            <header style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  paddingTop: "1em",
                  marginLeft: "1em",
                  marginRight: "1em",
                }}
              >
                <SettingsIcon />
              </div>
              <section>
                <h1
                  style={{
                    fontSize: "20px",
                    paddingTop: "2px",
                    fontWeight: "normal",
                    marginBottom: 0,
                  }}
                >
                  Jeswin's Scuffle
                </h1>
                <h2
                  style={{
                    fontSize: "14px",
                    paddingLeft: "2px",
                    marginTop: "2px",
                    fontWeight: "lighter",
                  }}
                >
                  My Computer
                </h2>
              </section>
            </header>
            <ul style={{ paddingLeft: "1em" }}>
              <li onClick={() => navigateTo("/tasks")} style={styles.li}>
                <i className="material-icons" style={{ ...styles.icon }}>
                  add_task
                </i>
                <span style={{ ...styles.listItemName }}>Tasks</span>
              </li>
              <li onClick={() => navigateTo("/notes")} style={styles.li}>
                <i className="material-icons" style={{ ...styles.icon }}>
                  notes
                </i>
                <span style={{ ...styles.listItemName }}>Notes</span>
              </li>
              <li onClick={() => navigateTo("/bookmarks")} style={styles.li}>
                <i className="material-icons" style={{ ...styles.icon }}>
                  bookmark
                </i>
                <span style={{ ...styles.listItemName }}>Bookmarks</span>
              </li>
              <li style={styles.li} onClick={() => navigateTo("/file")}>
                <i className="material-icons" style={{ ...styles.icon }}>
                  folder
                </i>
                <span style={{ ...styles.listItemName }}>Files</span>
              </li>
              <li style={styles.li}>
                <i className="material-icons" style={{ ...styles.icon }}>
                  list_alt
                </i>
                <span style={{ ...styles.listItemName }}>Lists</span>
              </li>
              <li style={styles.li}>
                <i className="material-icons" style={{ ...styles.icon }}>
                  label
                </i>
                <span style={{ ...styles.listItemName }}>#tags</span>
              </li>
              <li style={styles.li}>
                <i className="material-icons" style={{ ...styles.icon }}>
                  delete
                </i>
                <span style={{ ...styles.listItemName }}>Bin</span>
              </li>
              <li style={styles.li}>
                <i
                  className="material-icons"
                  style={{ ...styles.icon, color: "#cc0000" }}
                >
                  sync_disabled
                </i>
                <span style={{ ...styles.listItemName }}>
                  <span style={{ color: "#cc0000" }}>Not Syncing</span>
                  &nbsp;&nbsp;
                  <a href="#" style={{ color: "#333" }}>
                    Fix
                  </a>
                </span>
              </li>
            </ul>
            <TagCloud tags={state.recentTags} />
          </div>
        </>
      );
    },
  };

  return bindToStateProps([[state, (x) => [x.recentTags]]], component);
}
