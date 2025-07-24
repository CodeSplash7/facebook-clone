import { PostData } from "./types";

const postsData: PostData[] = [
  {
    id: 1,
    user: "John Doe",
    avatar: "bg-blue-500",
    hoursAgo: 2,
    isRecommended: true,
    text: "Just had the most amazing sunset view from my balcony! Nature never ceases to amaze me. 🌅",
    media: "bg-gradient-to-r from-orange-400 to-pink-600",
    likes: { like: 0, love: 0, laugh: 0, care: 0, wow: 0, sad: 0, angry: 0 },
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    user: "Sarah Wilson",
    avatar: "bg-green-500",
    hoursAgo: 4,
    isRecommended: false,
    text: "Excited to share that I just finished my first marathon! 26.2 miles of pure determination. Thanks to everyone who supported me along the way! 🏃‍♀️💪",
    media: "bg-gradient-to-r from-green-400 to-blue-500",
    likes: { like: 0, love: 0, laugh: 0, care: 0, wow: 0, sad: 0, angry: 0 },
    comments: 24,
    shares: 12,
  },
  {
    id: 3,
    user: "Mike Chen",
    avatar: "bg-purple-500",
    hoursAgo: 6,
    isRecommended: true,
    text: "Trying out a new recipe today - homemade pasta with garlic butter sauce. The kitchen smells incredible! 🍝",
    media: "bg-gradient-to-r from-yellow-400 to-red-500",
    likes: { like: 0, love: 0, laugh: 0, care: 0, wow: 0, sad: 0, angry: 0 },
    comments: 15,
    shares: 5,
  },
  {
    id: 4,
    user: "Emily Rodriguez",
    avatar: "bg-pink-500",
    hoursAgo: 8760, // More than a year ago
    isRecommended: false,
    text: "Beautiful day at the local farmers market! Got some fresh vegetables and flowers. Supporting local businesses feels so good! 🌻🥕",
    media: "bg-gradient-to-r from-green-300 to-yellow-400",
    likes: { like: 0, love: 0, laugh: 0, care: 0, wow: 0, sad: 0, angry: 0 },
    comments: 12,
    shares: 7,
  },
];

export default postsData;
