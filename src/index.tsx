import { mount } from "forgo";
import App from "./App";

function startApp() {
  mount(<App />, "#root");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((window as any).cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
