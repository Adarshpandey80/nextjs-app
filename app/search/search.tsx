"use client";

import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const debouncedSearch = useDebouncedCallback((term: string) => {
    console.log("Searching for:", term);
  }, 300);

  return (
    <div className=" flex justify-center align-items-center mt-10">
      <input
         className="border border-gray-300 rounded-md px-4 py-2 w-1/2"
        type="text"
        placeholder="Search..."
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
}


