import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarPage = ({ showForm, setShowForm }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  // For navigation
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ title: "", start, end });
    setShowForm(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSaveEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setShowForm(false);
      setNewEvent({ title: "", start: "", end: "" });
    } else {
      alert("Please fill all fields before saving!");
    }
  };

  const handleNext = () => {
    setCurrentDate(moment(currentDate).add(1, "month").toDate());
  };

  const handleBack = () => {
    setCurrentDate(moment(currentDate).subtract(1, "month").toDate());
  };

  const handleNavigate = (date) => {
    setCurrentDate(date);
  };

  return (
    <div className="flex-1 bg-gray-100 p-6">
      {/* Header section with Back/Next buttons */}
      <div className="flex items-center justify-between mb-4">
        {/* <div className="flex items-center gap-2">
          <button
            onClick={handleBack}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Next →
          </button>
        </div> */}
        <h3 className="text-lg font-medium text-gray-700">
          {moment(currentDate).format("MMMM YYYY")}
        </h3>
      </div>

      {/* Calendar */}
      <div className="bg-white p-4 rounded shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          date={currentDate}
          onNavigate={handleNavigate}
          style={{ height: "75vh" }}
        />
      </div>

      {/* Add Event Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add Event</h2>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="w-full border p-2 mb-3 rounded"
            />
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="datetime-local"
              name="start"
              value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
              onChange={handleInputChange}
              className="w-full border p-2 mb-3 rounded"
            />
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="datetime-local"
              name="end"
              value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
              onChange={handleInputChange}
              className="w-full border p-2 mb-3 rounded"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEvent}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
