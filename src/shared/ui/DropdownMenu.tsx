import type { ReactNode } from "react";

export interface DropdownMenuProps<T> {
  list: (ListItem & T)[];
  onSelect: (value: ListItem & T) => void;
  renderItem?: (item: ListItem & T) => ReactNode;
}

interface ListItem {
  key: string;
  value: string | number;
}

export function DropdownMenu<T>({
  list,
  onSelect,
  renderItem,
}: DropdownMenuProps<T>) {
  return (
    <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="multiLevelDropdownButton"
      >
        {list.map((item) => (
          <li
            key={item.value}
            className={`cursor-pointer block ${typeof renderItem === "function" ? "" : "px-4 py-2"} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(item);
            }}
          >
            {typeof renderItem === "function"
              ? renderItem(item)
              : item.key}
          </li>
        ))}
      </ul>
    </div>
  );
}
