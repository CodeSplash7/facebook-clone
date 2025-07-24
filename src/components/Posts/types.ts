export type PostData = {
  id: number;
  user: string;
  avatar: string;
  hoursAgo: number;
  isRecommended: boolean;
  text: string;
  media: string;
  likes: {
    like: number;
    love: number;
    laugh: number;
    care: number;
    wow: number;
    sad: number;
    angry: number;
  };
  comments: number;
  shares: number;
};
