// design/DividendCalendar.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar
import { ReactComponent as CalendarIcon } from "../assets/calendar.svg"; // Example icon import

const DividendCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Dividend Calendar
      </h1>
      <p className="text-lg mb-6 text-center text-gray-600">
        Explore upcoming dividend dates.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <CalendarIcon className="w-6 h-6 mr-2 text-gray-500" />
          <span className="text-gray-500">Select a Date:</span>
        </div>
        <Calendar
          onChange={onChange}
          value={date}
          className="react-calendar"
          calendarType="US"
        />
      </div>
      <p className="text-sm text-center mt-4 text-gray-600">
        Click on a date to view details.
      </p>
    </div>
  );
};

export default DividendCalendar;
