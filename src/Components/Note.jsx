import React from "react";
import deleteIcon from '../assets/delete.svg';

let timer = 500,
  timeout;

function Note(props) {
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
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="p-4">
      <div
        className="flex flex-col w-64 p-4 shadow-lg h-52 rounded-2xl"
        style={{ backgroundColor: props.note.color }}
      >
        <textarea
          className="h-full text-lg font-medium text-black placeholder-gray-500 bg-transparent resize-none focus:outline-none"
          defaultValue={props.note.text}
          onChange={(event) => updateText(event.target.value, props.note.id)}
          placeholder="Write your note..."
        />
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-gray-700">{formatDate(props.note.time)}</p>
          <img
            src={deleteIcon}
            alt="Delete"
            className="cursor-pointer hover:text-red-600"
            onClick={() => props.deleteNote(props.note.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
