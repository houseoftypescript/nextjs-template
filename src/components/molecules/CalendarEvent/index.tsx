export type CalendarEventProps = {
  type?: string;
  date?: number;
  month?: number;
  year?: number;
  iDate?: number;
  iMonth?: number;
  iYear?: number;
  title?: string;
  description?: string;
};

export const CalendarEvent: React.FC<CalendarEventProps> = ({
  type,
  date,
  month,
  year,
  iDate,
  iMonth,
  iYear,
  description = '',
}) => {
  if (
    (type === 'yearly' && month === iMonth && date === iDate) ||
    (year === iYear && month === iMonth && date === iDate)
  ) {
    return (
      <div
        className="rounded p-2 truncate bg-blue-500 text-white flex items-center gap-2 cursor-pointer"
        onClick={() => {}}
      >
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="text-sm">{description}</div>
      </div>
    );
  }

  return <></>;
};

export default CalendarEvent;
