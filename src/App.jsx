import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotePage from "./Components/NotePage";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const updateText = (text, id, title = "") => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, text, title } : note
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              notes={notes}
              addNote={addNote}
              deleteNote={deleteNote}
              updateText={updateText}
            />
          }
        />
        <Route
          path="/note/:id"
          element={
            <NotePage
              notes={notes}
              updateText={updateText}
              deleteNote={deleteNote}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
