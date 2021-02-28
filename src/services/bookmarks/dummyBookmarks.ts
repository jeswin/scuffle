import { Bookmark } from "../../types";

export const bookmarks: Bookmark[] = [
  {
    id: "b1",
    type: "bookmark",
    createdAt: Date.now(),
    title:
      "Brain Drain: The Mere Presence of One’s Own Smartphone Reduces Available Cognitive Capacity",
    url: "https://www.journals.uchicago.edu/doi/abs/10.1086/691462",
    tags: ["interesting", "skunkworks", "unread"],
    words: 12440,
    sharing: {
      saves: 33,
    },
  },
  {
    id: "b1a",
    type: "bookmark",
    createdAt: Date.now() - 2000000,
    title: "Why Christopher Nolan Actually Blew Up A Real Plane For Tenet",
    url:
      "https://www.cinemablend.com/news/2546992/why-christopher-nolan-actually-blew-up-a-real-plane-for-tenet",
    tags: ["movies", "unread"],
    sharing: {
      saves: 12,
    },
  },
  {
    id: "b2",
    type: "bookmark",
    createdAt: Date.now() - 2000000,
    title: "Building a custom scissor lamp",
    url: "https://www.youtube.com/watch?v=fUq7htzSmGY",
    tags: ["funny", "unread"],
    sharing: {
      saves: 132,
    },
    content: {
      type: "video",
      provider: "youtube",
    },
  },
  {
    id: "b3",
    type: "bookmark",
    createdAt: Date.now() - 2000000,
    title: "The age-old strategy of buying cheap shares is faltering",
    url:
      "https://www.economist.com/graphic-detail/2020/09/19/the-age-old-strategy-of-buying-cheap-shares-is-faltering",
    tags: ["business", "skunkworks"],
    words: 1304,
  },
  {
    id: "b3a",
    type: "bookmark",
    createdAt: Date.now() - 2000000,
    title: "I Paid Celebrities To Say THIS about Bass...",
    url: "https://www.youtube.com/watch?v=GzhAgldy0WA",
    tags: ["funny", "unread"],
    sharing: {
      saves: 223,
    },
    content: {
      type: "video",
      provider: "youtube",
    },
  },
  {
    id: "b4",
    type: "bookmark",
    createdAt: Date.now() - 10000000,
    title: "Giant Pacific Octopus",
    url:
      "https://www.nationalgeographic.com/animals/invertebrates/g/giant-pacific-octopus/",
    tags: ["nature"],
  },
  {
    id: "b5",
    type: "bookmark",
    createdAt: Date.now() - 50000000,
    title: "Iron, How Did They Make It? Part I, Mining",
    url:
      "https://acoup.blog/2020/09/18/collections-iron-how-did-they-make-it-part-i-mining/",
    tags: ["movies"],
    sharing: {
      saves: 8,
    },
  },
  {
    id: "b6",
    type: "bookmark",
    createdAt: Date.now() - 50000000,
    title: "gitsta-org/gitsta-todo",
    url: "https://github.com/gitsta-org/gitsta-todo",
    tags: ["movies"],
  },
  {
    id: "b7",
    type: "bookmark",
    createdAt: Date.now(),
    title: "Exclusive: America's true unemployment rate",
    url:
      "https://www.axios.com/americas-true-unemployment-rate-6e34decb-c274-4feb-a4af-ffac8cf5840d.html",
    tags: ["interesting", "links"],
    words: 4430,
    sharing: {
      saves: 24,
    },
  },
  {
    id: "b8",
    type: "bookmark",
    createdAt: Date.now() - 2000000,
    title: "Early Work",
    url: "http://paulgraham.com/early.html",
    tags: ["links", "unread"],
  },
  {
    id: "b9",
    type: "bookmark",
    createdAt: Date.now() - 20000000,
    title: "A Special Supplement: Reflections on Violence",
    url:
      "https://www.nybooks.com/articles/1969/02/27/a-special-supplement-reflections-on-violence/",
    tags: ["links"],
  },
  {
    id: "b10",
    type: "bookmark",
    createdAt: Date.now() - 100000000,
    title: "The biggest thing I learned launching Zapier",
    url: "https://mikeknoop.com/biggest-thing-learned-launching-zapier/",
    tags: ["links", "unread"],
  },
  {
    id: "b11",
    type: "bookmark",
    createdAt: Date.now() - 500000000,
    title:
      "Hey is a wildly opinionated new email service from the makers of BaseCamp",
    url:
      "https://www.theverge.com/2020/6/15/21286466/hey-email-basecamp-price-availability-platforms-launch",
    tags: ["links"],
  },
  {
    id: "b12",
    type: "bookmark",
    createdAt: Date.now() - 5000000000,
    title: "The Long Road To HTTP/3",
    url: "https://scorpil.com/post/the-long-road-to-http3/",
    tags: ["links"],
  },
];
