import { ForgoRenderArgs, rerender } from "forgo";
import * as forgo from "forgo";
import { iconsDefault } from "../../../icons/index.js";
import * as unicode from "../../../utils/unicode.js";
import Button from "../../components/Button.js";
import Section from "../../components/Section.js";
import SectionHeading from "../../components/SectionHeading.js";
import SelectableArticle from "../../components/SelectableArticle.js";
import rootState from "../../state.js";
import TextField from "../../components/TextField.js";

export type AccountHomeProps = {};

export default function AccountHome(initialProps: AccountHomeProps) {
  let basicPlanSelected = false;
  let proPlanSelected = false;

  return {
    render(props: AccountHomeProps, { update }: ForgoRenderArgs) {
      function onClickBasicPlan() {
        basicPlanSelected = !basicPlanSelected;
        if (basicPlanSelected) {
          proPlanSelected = false;
        }
        update();
      }

      function onClickProPlan() {
        proPlanSelected = !proPlanSelected;
        if (proPlanSelected) {
          basicPlanSelected = false;
        }
        update();
      }

      return (
        <div className="max-w-lg">
          <Section>
            <SectionHeading type="h2">Create an Account</SectionHeading>
            {rootState.profile.type === "none" ? (
              <p className="mb-4">
                By creating an account on Scuffle, your data will be
                continuously backed up. We strongly recommend that you do this,
                since data in the browser could be lost.
              </p>
            ) : (
              <></>
            )}
          </Section>
          <Section className="text-sm">
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
          </Section>
          <Section>
            <SectionHeading type="h3">2. Choose a Plan</SectionHeading>
            <div>
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
          </Section>
          <Section>
            <Button type="highlight">Sign Up {unicode.arrowRight}</Button>
          </Section>
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
