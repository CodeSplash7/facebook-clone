export default function formatPostDate(hoursAgo: number): string {
  const now = new Date();
  const postDate = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);
  const currentYear = now.getFullYear();
  const postYear = postDate.getFullYear();

  if (postYear < currentYear) {
    return postDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } else {
    return postDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
}
