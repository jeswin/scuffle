import { ForgoRenderArgs, rerender } from "forgo";
import { iconsDefault } from "../../../icons";
import * as unicode from "../../../utils/unicode";
import Button from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";
import SelectableArticle from "../../components/SelectableArticle";
import rootState from "../../state";
import TextField from "../../components/TextField";

export type AccountHomeProps = {};

export default function AccountHome(initialProps: AccountHomeProps) {
  let basicPlanSelected = false;
  let proPlanSelected = false;

  return {
    render(props: AccountHomeProps, args: ForgoRenderArgs) {
      function onClickBasicPlan() {
        basicPlanSelected = !basicPlanSelected;
        if (basicPlanSelected) {
          proPlanSelected = false;
        }
        rerender(args.element);
      }

      function onClickProPlan() {
        proPlanSelected = !proPlanSelected;
        if (proPlanSelected) {
          basicPlanSelected = false;
        }
        rerender(args.element);
      }

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
          <div className="mb-4 text-sm">
            <SectionHeading type="h3">1. Username and Password</SectionHeading>
            <div className="flex-row space-y-4">
              <TextField
                type="text"
                label="Username"
                placeholder="Choose a username"
                dark={true}
                labelWidth="80px"
                labelAlign="right"
              />
              <TextField
                label="Email"
                type="text"
                placeholder="Email address"
                dark={true}
                labelWidth="80px"
                labelAlign="right"
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                dark={true}
                labelWidth="80px"
                labelAlign="right"
              />
              <TextField
                label="Repeat It"
                type="password"
                placeholder="Password"
                dark={true}
                labelWidth="80px"
                labelAlign="right"
              />
            </div>
          </div>
          <div>
            <SectionHeading type="h3">2. Choose a Plan</SectionHeading>
            <div className="mt-4">
              <ul>
                <li>
                  <SelectableArticle
                    title="Basic*"
                    list={{
                      items: [
                        "100MB of storage",
                        "Limited access to Git UI",
                        "Community support",
                      ],
                      cols: 1,
                      bullet: (
                        <span className="text-green-600 pr-2">
                          {iconsDefault.check}
                        </span>
                      ),
                    }}
                    highlightOnHover={true}
                    highlightOnSelect={true}
                    selected={basicPlanSelected}
                    footer={{
                      left: (
                        <p>
                          <span className="font-bold text-md">Free</span>
                        </p>
                      ),
                    }}
                    onClick={onClickBasicPlan}
                  />
                </li>
                <li>
                  <SelectableArticle
                    title="Scuffle Pro"
                    list={{
                      cols: 2,
                      bullet: (
                        <span className="text-green-600 pr-2">
                          {iconsDefault.check}
                        </span>
                      ),
                      items: [
                        "10GB of storage",
                        "Full access to Git UI",
                        "API Access",
                        "Email Support",
                        "Better bandwidth",
                        "Discord Invite",
                      ],
                    }}
                    highlightOnHover={true}
                    highlightOnSelect={true}
                    selected={proPlanSelected}
                    footer={{
                      left: (
                        <p>
                          <span className="font-bold text-md">$3.99</span>{" "}
                          <span className="text-gray-600">per month</span>
                        </p>
                      ),
                    }}
                    onClick={onClickProPlan}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4 mb-8">
            <Button type="highlight">Sign Up {unicode.arrowRight}</Button>
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
