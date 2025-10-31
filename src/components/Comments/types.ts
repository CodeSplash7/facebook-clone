export interface Comment {
  id: number;
  user: string;
  text: string;
  time: Date;
  likes: number;
  replies: Reply[];
  isLiked: boolean;
  avatar: string;
}

export interface Reply {
  id: number;
  user: string;
  text: string;
  time: string;
  likes: number;
  isLiked: boolean;
  avatar: string;
  replyingTo: string;
}

export type SortOption = "most-relevant" | "newest" | "all";
