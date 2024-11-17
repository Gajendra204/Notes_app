import React from "react";
import Note from "./Note";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverseArray(props.notes);

  return (
    <div className="p-4 note-container">
      <h2 className="mb-4 text-2xl font-semibold">Notes</h2>
      <div className="note-container_notes flex flex-wrap gap-4 overflow-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-rounded-2xl">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3 className="text-xl text-gray-500">No Notes present</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
