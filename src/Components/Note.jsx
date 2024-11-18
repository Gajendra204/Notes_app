import React from "react";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../assets/delete.svg";

let timer = 500,
  timeout;

function Note(props) {
  const navigate = useNavigate();

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? hrs - 12 : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  return (
    <div className="p-4">
      <div
        className="relative flex flex-col w-64 p-4 shadow-lg h-52 rounded-2xl"
        style={{ backgroundColor: props.note.color }}
        onClick={() => navigate(`/note/${props.note.id}`)} // Navigate to NotePage
      >
        {/* Title Section */}
        <div className="text-lg font-bold text-black truncate">
          {props.note.title || "Untitled Note"}
        </div>
        
        {/* Spacer */}
        <div className="flex-grow" />

        {/* Footer */}
        <div className="absolute flex items-center justify-between bottom-4 left-4 right-4">
          <p className="text-sm text-gray-700">{formatDate(props.note.time)}</p>
          <img
            src={deleteIcon}
            alt="Delete"
            className="cursor-pointer hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation on delete
              props.deleteNote(props.note.id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
