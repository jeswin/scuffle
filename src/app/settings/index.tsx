import * as forgo from "forgo";
import { matchExactUrl } from "forgo-router";
import SettingsHome from "./components/Home.js";
import Account from "./components/Account.js";

export default function SettingsIndex() {
  return {
    render() {
      return (
        matchExactUrl("/settings", () => <SettingsHome />) ||
        matchExactUrl("/settings/account", () => <Account />)
      );
    },
  };
}
