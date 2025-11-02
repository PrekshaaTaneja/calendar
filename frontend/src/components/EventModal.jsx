import React from "react";

const EventModal = ({ open, onClose, onSubmit, form, setForm, isEditing }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Dim backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl mx-auto overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            {isEditing ? "Edit event" : "Add event"}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Event title"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Start</label>
              <input
                type="datetime-local"
                value={form.start}
                onChange={(e) => setForm({ ...form, start: e.target.value })}
                className="w-full border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">End</label>
              <input
                type="datetime-local"
                value={form.end}
                onChange={(e) => setForm({ ...form, end: e.target.value })}
                className="w-full border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-200 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add notes, location, or guests"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="allDay"
              type="checkbox"
              checked={form.allDay}
              onChange={(e) => setForm({ ...form, allDay: e.target.checked })}
              className="h-4 w-4"
            />
            <label htmlFor="allDay" className="text-sm text-gray-600">
              All day
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {/* place for subtle helper text */}
          </div>

          <div className="flex items-center gap-3">
            {isEditing && (
              <button
                onClick={() => {
                  // caller should pass delete handler
                  if (typeof onSubmit === "function") onSubmit("delete");
                }}
                className="px-3 py-2 rounded-md bg-red-50 text-red-600 border border-red-100 hover:bg-red-100"
              >
                Delete
              </button>
            )}

            <button
              onClick={onClose}
              className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                // validation: ensure title and start/end exist
                if (!form.title || !form.start || !form.end) return;
                if (typeof onSubmit === "function") onSubmit("save");
              }}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
