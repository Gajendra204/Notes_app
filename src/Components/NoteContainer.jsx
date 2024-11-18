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
    <div className="flex flex-col h-screen p-6 ">
      {/* Header and search section */}
      <div className="flex items-center justify-between mb-6">
        {/* "Your Notes" Heading */}
        <h2 className="pl-4 text-3xl font-semibold text-white ">Your Notes</h2>

        {/* Search and Filter Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 text-lg font-medium text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="p-3 text-lg font-medium text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="#fe9b72">Coral Pink</option>
            <option value="#fec971">Peach Yellow</option>
            <option value="#00d4fe">Sky Blue</option>
            <option value="#b693fd">Lavender Purple</option>
            <option value="#e4ee91">Light Lime Green</option>
          </select>
        </div>
      </div>

      {/* Notes Display */}
      <div className="flex flex-wrap gap-6 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-rounded-md">
        {notes.length > 0 ? (
          notes.map((item) => (
            <div
              key={item.id}
              className="transition-all duration-200 transform rounded-md hover:scale-102 hover:shadow-lg"
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
            <h3 className="text-xl">No Notes Found</h3>
            <p className="mt-2">Try searching or creating a new note.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
