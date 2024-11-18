import React, { useState } from "react";
import { Add, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  const navigate = useNavigate(); // For navigation

  return (
    <div className="flex flex-col items-center justify-center w-20 h-screen bg-gray-800">
      {/* Home Icon */}
      <div
        className="p-2 mb-6 transition-all bg-gray-800 rounded-full cursor-pointer hover:bg-gray-600"
        onClick={() => navigate("/")} // Navigate to home screen
      >
        <Home className="text-3xl text-white" />
      </div>

      {/* Plus Icon */}
      <div
        className="transition-all rounded-full shadow cursor-pointer hover:bg-gray-500"
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
            className={`w-8 h-8 rounded-full transition-transform transform ${
              listOpen
                ? `scale-100 translate-y-${(index + 1) * 12}` // Animate appearance with smaller scale
                : "scale-0 translate-y-0"
            }`}
            style={{
              backgroundColor: color,
              transitionDelay: `${index * 100}ms`, // Staggered animation for a cascading effect
            }}
            onClick={() => props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
