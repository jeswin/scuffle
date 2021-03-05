import { iconsDefault } from "../../../icons";
import Button from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";
import SelectableArticle from "../../components/SelectableArticle";
import rootState from "../../state";
import * as unicodeChars from "../../../utils/unicode";

export default function AccountHome() {
  return {
    render() {
      return (
        <div className="max-w-lg">
          <SectionHeading type="h2">Create an Account</SectionHeading>
          {rootState.profile.type === "none" ? (
            <p className="mb-4">
              By creating an account on Scuffle, your data will be continuously
              backed up. We strongly recommend that you do this, since data in
              the browser could be lost.
            </p>
          ) : (
            <></>
          )}
          <SectionHeading type="h3">Choose a Plan</SectionHeading>
          <div className="mt-4">
            <ul>
              <li>
                <SelectableArticle
                  title="Basic"
                  list={{
                    items: [
                      "100MB of storage",
                      "Limited access to Git UI",
                      "Community support",
                    ],
                    cols: 1,
                    bullet: iconsDefault.check,
                  }}
                  footer={{
                    left: (
                      <p>
                        <span className="font-bold text-md">Free</span>
                      </p>
                    ),
                    right: (
                      <Button type="highlight">
                        Select Plan {unicodeChars.arrowRight}
                      </Button>
                    ),
                  }}
                  selected={true}
                />
              </li>
              <li>
                <SelectableArticle
                  title="Scuffle Pro"
                  list={{
                    cols: 2,
                    bullet: iconsDefault.check,
                    items: [
                      "10GB of storage",
                      "Full access to Git UI",
                      "API Access",
                      "Email Support",
                      "Better bandwidth",
                      "Discord Invite",
                    ],
                  }}
                  footer={{
                    left: (
                      <p>
                        <span className="font-bold text-md">$3.99</span>{" "}
                        <span className="text-gray-600">per month</span>
                      </p>
                    ),
                    right: (
                      <Button type="highlight">
                        Select Plan {unicodeChars.arrowRight}
                      </Button>
                    ),
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="pl-2 text-xs max-w-sm flex">
            <p className="pr-1">*</p>
            <p>
              Scuffle is Open Source and supported by our paid members.
              <br /> We encourage you to sign up for our Pro plan.
            </p>
          </div>
        </div>
      );
    },
  };
}
