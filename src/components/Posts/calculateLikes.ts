export default function calculateLikes(likesObj: Record<string, number>) {
  return Object.values(likesObj).reduce((a, b) => a + b);
}
