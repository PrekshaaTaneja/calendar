import React from "react";

const Sidebar = ({ onAddEventClick }) => {
  return (
    <aside className="w-64 bg-white shadow-md h-full p-4 flex flex-col justify-between">
      <div>
        <button
          onClick={onAddEventClick}
          className="w-full bg-blue-600 text-white rounded-lg py-2 mb-4 hover:bg-blue-700"
        >
          + Create
        </button>

        <div className="mt-6">
          <h3 className="text-gray-500 font-semibold mb-2">My Calendars</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Work</li>
            <li className="hover:text-blue-600 cursor-pointer">Personal</li>
            <li className="hover:text-blue-600 cursor-pointer">Tasks</li>
          </ul>
        </div>
      </div>

      <div className="text-sm text-gray-400 text-center mt-6">
        © 2025 Google Calendar Clone
      </div>
    </aside>
  );
};

export default Sidebar;
