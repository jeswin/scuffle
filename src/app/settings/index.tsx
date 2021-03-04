import { matchExactUrl } from "forgo-router";
import SettingsHome from "./components/Home";

export default function SettingsIndex() {
  return {
    render() {
      return matchExactUrl("/settings", () => <SettingsHome />);
    },
  };
}
