import * as forgo from "forgo";

export default function SettingsIcon() {
  return {
    render() {
      return (
        <div style={{ float: "left" }}>
          <img
            src="/img/profile.jpg"
            alt="profile icon"
            style={{
              width: "32px",
              borderRadius: "100%",
              marginLeft: "0.5em",
              padding: "2px",
              background: "rgba(255, 255, 255, 0.2)",
              marginTop: "2px",
            }}
          />
        </div>
      );
    },
  };
}
