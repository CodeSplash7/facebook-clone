import { sortOptions } from "./sort-options";
import { SortOption } from "./types";

export default function SortDropdown({
  setShowSortDropdown,
  showSortDropdown,
  sortOption,
  setSortOption,
}: {
  setShowSortDropdown: (show: boolean) => void;
  showSortDropdown: boolean;
  sortOption: SortOption;
  setSortOption: (sortOption: SortOption) => void;
}) {
  return (
    <div className="p-4 border-b border-gray-200 relative">
      <button
        onClick={() => setShowSortDropdown(!showSortDropdown)}
        className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
      >
        <span>{sortOptions[sortOption].label}</span>
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
          <path d="M6 8l-4-4h8l-4 4z" />
        </svg>
      </button>

      {showSortDropdown && (
        <div className="absolute top-full left-4 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10 min-w-80">
          {/* Dropdown arrow */}
          <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>

          {Object.entries(sortOptions).map(([key, option]) => (
            <button
              key={key}
              onClick={() => {
                setSortOption(key as SortOption);
                setShowSortDropdown(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 block"
            >
              <div className="font-semibold text-sm text-gray-900">
                {option.label}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {option.description}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
