import { mount } from "forgo";
import * as forgo from "forgo";
import App from "./app";

function ready(fn: () => void) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() => {
  mount(<App />, document.getElementById("root"));
});
