import { matchExactUrl } from "forgo-router";
import SettingsHome from "./components/Home";
import Account from "./components/Account";

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
