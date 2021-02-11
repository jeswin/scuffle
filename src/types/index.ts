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

export type Task = {
  id: string;
  title: string;
  description?: string;
  due?: {
    year: number;
    month: number;
    day: number;
  };
} & ScuffleEntityBase;

export type Note = {
  id: string;
  title: string;
  text: string;
} & ScuffleEntityBase;

export type Bookmark = {
  id: string;
  url: string;
  title?: string;
} & ScuffleEntityBase;

export type Gallery = {
  id: string;
  name: string;
} & ScuffleEntityBase;

export type DirInfo = {
  type: "dir";
  name: string;
  path: string;
  createdAt: string;
  updatedAt: string;
  children: (DirInfo | FileInfo)[];
} & ScuffleEntityBase;

export type FileInfo = {
  type: "file";
  name: string;
  path: string;
  createdAt: string;
  updatedAt: string;
  size: number;
} & ScuffleEntityBase;

export type ScuffleEntity =
  | Task
  | Note
  | Bookmark
  | Gallery
  | DirInfo
  | FileInfo;

