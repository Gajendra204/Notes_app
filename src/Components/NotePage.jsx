import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import Sidebar component

const NotePage = ({ notes, updateText, deleteNote }) => {
  const { id } = useParams(); // Get note ID from URL
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <p className="text-lg text-white">Note not found!</p>
      </div>
    );
  }

  const handleTitleChange = (e) => {
    const updatedNote = { ...note, title: e.target.value };
    updateText(updatedNote.text, updatedNote.id, updatedNote.title);
  };

  const handleContentChange = (e) => {
    const updatedNote = { ...note, text: e.target.value };
    updateText(updatedNote.text, updatedNote.id, updatedNote.title);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar addNote={updateText} />

      {/* Note Container */}
      <div className="flex-1 max-w-4xl p-8 mx-auto ml-20 rounded-lg shadow-lg">
        <div className="w-full">
          {/* Title Section */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-300">
              Title
            </label>
            <input
              type="text"
              className="w-full p-4 mt-2 text-lg text-white transition duration-300 ease-in-out transform bg-gray-700 border border-gray-600 rounded-lg font-lg semibold focus:outline-none focus:ring-2 focus:ring-blue-400 "
              value={note.title || ""}
              onChange={handleTitleChange}
              placeholder="Enter note title..."
            />
          </div>

          {/* Content Section */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-300">
              Content
            </label>
            <textarea
              className="w-full p-4 mt-2 text-lg text-white transform bg-gray-700 border border-gray-600 rounded-lg resize-none h-72 focus:outline-none focus:ring-2 focus:ring-blue-400 "
              value={note.text}
              onChange={handleContentChange}
              placeholder="Write your note here..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            {/* Delete Button */}
            <button
              className="px-6 py-3 font-semibold text-white transition transform bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 hover:scale-105"
              onClick={() => {
                deleteNote(note.id);
                navigate("/"); // Navigate to homepage after deletion
              }}
            >
              Delete Note
            </button>
            {/* Save & Back Button */}
            <button
              className="px-6 py-3 font-semibold text-white transition transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105"
              onClick={() => navigate("/")} // Navigate back to homepage
            >
              Save & Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
