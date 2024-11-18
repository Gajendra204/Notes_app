import React from "react";
import Sidebar from "./Sidebar";
import NoteContainer from "./NoteContainer";

const HomePage = ({ notes, addNote, deleteNote, updateText }) => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar addNote={addNote} />
      
      {/* NoteContainer */}
      <div className="flex-grow p-4 bg-gray-100 bg-gray-800">
        <NoteContainer
          notes={notes}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
    </div>
  );
};

export default HomePage;
