import React, { useState } from "react";
import { Add } from "@mui/icons-material";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-20 h-screen ">
      {/* Plus Icon */}
      <div
        className="p-4 transition-all bg-black rounded-full shadow cursor-pointer hover:bg-gray-500"
        onClick={() => setListOpen(!listOpen)}
      >
        <Add className="text-3xl text-white" />
      </div>

      {/* Color Options */}
      <ul
        className={`relative mt-8 flex flex-col items-center space-y-4 ${
          listOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        {colors.map((color, index) => (
          <li
            key={index}
            className={`w-10 h-10 rounded-full transition-transform transform ${
              listOpen
                ? `scale-100 translate-y-${(index + 1) * 16}`
                : "scale-0 translate-y-0"
            }`}
            style={{
              backgroundColor: color,
              transitionDelay: `${index * 100}ms`, // Staggered animation for classic effect
            }}
            onClick={() => props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
