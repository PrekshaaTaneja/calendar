import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

const CalendarPage = ({ showForm, setShowForm }) => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
    allDay: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 🟢 Fetch all events from backend
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/events");
      const data = await res.json();
      const formatted = data.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
      setEvents(formatted);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🟢 Open modal for new event
  const handleSelectSlot = ({ start, end }) => {
    setForm({
      title: "",
      start: moment(start).format("YYYY-MM-DDTHH:mm"),
      end: moment(end).format("YYYY-MM-DDTHH:mm"),
      description: "",
      allDay: false,
    });
    setIsEditing(false);
    setShowForm(true);
  };

  // 🟢 Open modal for editing
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setForm({
      title: event.title,
      start: moment(event.start).format("YYYY-MM-DDTHH:mm"),
      end: moment(event.end).format("YYYY-MM-DDTHH:mm"),
      description: event.description || "",
      allDay: event.allDay || false,
    });
    setIsEditing(true);
    setShowForm(true);
  };

  // 🟢 Handle Save/Delete actions
  const handleModalSubmit = async (action) => {
    try {
      const payload = {
        title: form.title,
        start: form.start,
        end: form.end,
        description: form.description,
        allDay: form.allDay,
      };

      if (action === "save") {
        if (isEditing && selectedEvent) {
          await fetch(`http://localhost:5000/api/events/${selectedEvent._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        } else {
          await fetch("http://localhost:5000/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        }
      } else if (action === "delete" && selectedEvent) {
        await fetch(`http://localhost:5000/api/events/${selectedEvent._id}`, {
          method: "DELETE",
        });
      }

      setShowForm(false);
      setSelectedEvent(null);
      fetchEvents(); // refresh events
    } catch (err) {
      console.error("Error saving/deleting event:", err);
    }
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Calendar</h2>

      <div className="bg-white rounded-xl shadow-md p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          style={{ height: "75vh" }}
        />
      </div>

      {/* Event Modal */}
      <EventModal
        open={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleModalSubmit}
        form={form}
        setForm={setForm}
        isEditing={isEditing}
      />
    </div>
  );
};

export default CalendarPage;
