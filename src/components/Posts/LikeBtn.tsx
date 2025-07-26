import { useEffect, useRef } from "react";
import reactions, { Reaction } from "./reactions";

export default function LikeBtn({
  onShowReactions,
  onHideReactions,
  showReactions,
  onReact,
  isModal,
}: {
  onShowReactions: () => void;
  onHideReactions: () => void;
  showReactions: boolean;
  onReact: (reaction: Reaction) => void;
  isModal: boolean;
}) {
  const likeBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hoverInTimeout: NodeJS.Timeout;
    let hoverOutTimeout: NodeJS.Timeout;

    let hasHoveredEnough = false;
    likeBtnRef.current?.addEventListener("mouseenter", () => {
      clearTimeout(hoverOutTimeout);
      hasHoveredEnough = true;
      hoverInTimeout = setTimeout(onShowReactions, 500);
    });

    likeBtnRef.current?.addEventListener("mouseleave", async () => {
      clearTimeout(hoverInTimeout);
      if (hasHoveredEnough) hoverOutTimeout = setTimeout(onHideReactions, 500);
      hasHoveredEnough = false;
    });
  }, [onHideReactions, onShowReactions]);

  return (
    <div
      ref={likeBtnRef}
      onClick={() => {
        onReact("like");
      }}
      className="relative flex-1"
    >
      {showReactions && <Reactions isModal={isModal} onReact={onReact} />}
      <button className="action-button flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 w-full justify-center text-gray-600 transition-colors duration-200">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V9a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        <span className="font-medium">Like</span>
      </button>
    </div>
  );
}

function Reactions({
  onReact,
  isModal,
}: {
  onReact: (reaction: Reaction) => void;
  isModal: boolean;
}) {
  return (
    <div
      style={{ zIndex: isModal ? 9999 : 1 }}
      className="absolute bottom-12 bg-white rounded-full shadow-lg p-[2px] flex gap-1 text-[30px] items-center h-fit"
    >
      {(Object.keys(reactions) as Array<Reaction>).map((i) => (
        <button
          onClick={() => onReact(i)}
          key={i}
          className="reaction-btn w-10 h-10 rounded-full hover:scale-110 transition-transform"
        >
          {reactions[i]}
        </button>
      ))}
    </div>
  );
}
