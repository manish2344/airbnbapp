// src/components/ui/calendar.js
import React from 'react';
import { format, parse, startOfToday } from 'date-fns';
import { Calendar as ReactCalendar } from 'react-calendar';

export const CalendarComponent = ({ selected, onSelect, ...props }) => {
  return (
    <ReactCalendar
      onChange={onSelect}
      value={selected || startOfToday()}
      {...props}
    />
  );
};
export default CalendarComponent;
