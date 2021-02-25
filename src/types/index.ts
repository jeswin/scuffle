export type CommandParserResult = {
  response: string[];
};

export type JwtData = {
  jwt: string;
  userId: string;
  providerUserId: string;
  provider: string;
};

export type ScuffleEntityBase = {
  type: string;
  createdAt: number;
  tags?: string[];
};

export type Tag = {
  name: string;
};

export type TagInfo = {
  tag: Tag;
  count: number;
};

export type Todo = {
  type: "todo",
  id: string;
  title: string;
  description?: string;
  due?: {
    year: number;
    month: number;
    date: number;
  };
} & ScuffleEntityBase;

export type Note = {
  type: "note",
  id: string;
  title: string;
  text: string;
} & ScuffleEntityBase;

export type Bookmark = {
  type: "bookmark",
  id: string;
  url: string;
  title?: string;
} & ScuffleEntityBase;

export type ScuffleEntity = Todo | Note | Bookmark;
