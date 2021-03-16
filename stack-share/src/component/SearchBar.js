import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  const initStack = ["JavaScript", "Python", "React", "Java", "Spring"];
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState(initStack);

  const handleSearch = () => {
    if (tags.includes(query)) {
      return;
    } else {
      setTags([...tags, query]);
      setQuery("");
      console.log(tags);
    }
  };

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="search-bar-input"
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
