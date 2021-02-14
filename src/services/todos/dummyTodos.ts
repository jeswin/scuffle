import { Todo } from "../../types";

export const todos: Todo[] = [
  {
    id: "t1",
    title: "Get the milk",
    description: "Walk to the nearby store, bargain and buy the milk.",
    tags: ["today", "routine"],
    createdAt: Date.now(),
  },
  {
    id: "t2",
    title: "Exercise for 10 hours",
    description: "Auto added. Do this everyday.",
    tags: ["routine"],
    createdAt: Date.now() - 110000000,
  },
  {
    id: "t3",
    title: "Feed the lions",
    description: "Buy some meat. Feed the lions. Sleep next to them.",
    tags: ["zoo", "danger", "skunkworks"],
    createdAt: Date.now() - 210000000,
  },
  {
    id: "t4",
    title: "Lorem ipsum must sit somewhere",
    description: "Walk to the nearby store, bargain and buy the milk.",
    tags: ["today", "routine"],
    createdAt: Date.now(),
  },
  {
    id: "t5",
    title: "Create gitsta markdown notes",
    description: "Auto added. Do this everyday.",
    tags: ["routine", "skunkworks"],
    createdAt: Date.now() - 110000000,
  },
  {
    id: "t6",
    title: "Discuss the Secure ScuttleButt API",
    description: "Buy some meat. Feed the lions. Sleep next to them.",
    tags: ["zoo", "danger", "skunkworks"],
    createdAt: Date.now() - 210000000,
  },
  {
    id: "t7",
    title: "Solid Discussion",
    description: "Walk to the nearby store, bargain and buy the milk.",
    tags: ["today", "routine"],
    createdAt: Date.now(),
  },
  {
    id: "t8",
    title: "Blah blah go to the park",
    description: "Auto added. Do this everyday.",
    tags: ["routine", "skunkworks"],
    createdAt: Date.now() - 110000000,
  },
];
