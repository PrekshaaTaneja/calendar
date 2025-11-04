import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

const CalendarPage = ({ showForm, setShowForm }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
    allDay: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // ✅ Navigation & view state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState(Views.MONTH); // default view

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  useEffect(() => {
    if (showForm) {
      setForm({
        title: "",
        start: "",
        end: "",
        description: "",
        allDay: false,
      });
      setIsEditing(false);
      setModalOpen(true);
      setShowForm(false);
    }
  }, [showForm, setShowForm]);

  const handleSelectSlot = ({ start, end }) => {
    setForm({
      title: "",
      start: moment(start).format("YYYY-MM-DDTHH:mm"),
      end: moment(end).format("YYYY-MM-DDTHH:mm"),
      description: "",
      allDay: false,
    });
    setIsEditing(false);
    setModalOpen(true);
  };

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
    setModalOpen(true);
  };

  const handleSaveEvent = async (actionType) => {
    if (actionType === "delete") {
      await fetch(`http://localhost:5000/api/events/${selectedEvent._id}`, {
        method: "DELETE",
      });
      setEvents(events.filter((e) => e._id !== selectedEvent._id));
      setModalOpen(false);
      return;
    }

    const eventData = {
      title: form.title,
      description: form.description,
      start: new Date(form.start),
      end: new Date(form.end),
      allDay: form.allDay,
    };

    if (isEditing) {
      const res = await fetch(
        `http://localhost:5000/api/events/${selectedEvent._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventData),
        }
      );
      const updated = await res.json();
      setEvents(events.map((e) => (e._id === updated._id ? updated : e)));
    } else {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
      const created = await res.json();
      setEvents([...events, created]);
    }

    setModalOpen(false);
  };

  return (
    <div className="flex-1 bg-gray-100 p-6 relative">
      <div className="bg-white p-4 rounded shadow">
        <Calendar
          localizer={localizer}
          events={events.map((e) => ({
            ...e,
            start: new Date(e.start),
            end: new Date(e.end),
          }))}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          // ✅ Controlled navigation
          date={currentDate}
          onNavigate={(newDate) => setCurrentDate(newDate)}
          // ✅ Controlled view switching
          view={currentView}
          onView={(newView) => setCurrentView(newView)}
          views={["month", "week", "day", "agenda"]}
          style={{ height: "80vh" }}
        />
      </div>

      <EventModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSaveEvent}
        form={form}
        setForm={setForm}
        isEditing={isEditing}
      />
    </div>
  );
};

export default CalendarPage;
