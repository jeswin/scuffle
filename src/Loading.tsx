export default function Loading() {
  return {
    render() {
      return (
        <div
          id="loader"
          style={{
            position: "fixed",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            zIndex: 9999,
            background: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/img/spinner.gif" alt="spinner" />
        </div>
      );
    },
  };
}
