import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CalendarPage from "./components/CalendarPage";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onAddEventClick={() => setShowForm(true)} />
        <CalendarPage showForm={showForm} setShowForm={setShowForm} />
      </div>
    </div>
  );
};

export default App;
