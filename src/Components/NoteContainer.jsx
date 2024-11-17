import React, { useState } from "react";
import Note from "./Note";

const NoteContainer = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterColor, setFilterColor] = useState("All");

  // Reverse the notes array
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverseArray(props.notes).filter((note) => {
    const matchesSearch = note.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesColor = filterColor === "All" || note.color === filterColor;
    return matchesSearch && matchesColor;
  });

  return (
    <div className="flex flex-col h-screen p-4">
      <h2 className="mb-4 text-2xl font-semibold">Notes</h2>

      {/* Static Search and Filter Section */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 mb-4 bg-white shadow-sm">
        {/* Search Bar */}
        <div className="relative w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search notes..."
          />
          <span className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">
            <i className="fas fa-search"></i> {/* FontAwesome Search Icon */}
          </span>
        </div>

        {/* Color Filter Dropdown */}
        <select
          value={filterColor}
          onChange={(e) => setFilterColor(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All</option>
          <option value="#fe9b72">Coral Pink</option>
          <option value="#fec971">Peach Yellow</option>
          <option value="#00d4fe">Sky Blue</option>
          <option value="#b693fd">Lavender Purple</option>
          <option value="#e4ee91">Light Lime Green</option>
        </select>
      </div>

      {/* Notes Display */}
      <div className="flex flex-wrap flex-1 gap-4 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-rounded-2xl">
        {notes.length > 0 ? (
          notes.map((item) => (
            <div
              key={item.id}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Note
                note={item}
                deleteNote={props.deleteNote}
                updateText={props.updateText}
              />
            </div>
          ))
        ) : (
          <div className="w-full text-center text-gray-500">
            <h3 className="text-xl">No Notes found</h3>
            <p className="mt-2">Try searching or creating a new note.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
