const reactions = {
  like: "👍",
  love: "❤️",
  laugh: "😂",
  care: "🤗",
  wow: "😮",
  sad: "😢",
  angry: "😠",
};

export type Reaction = keyof typeof reactions;

export default reactions;
