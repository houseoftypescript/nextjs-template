import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { addZero } from '../../../utils/add-zero';
import CalendarEvent, {
  CalendarEventProps,
} from '../../molecules/CalendarEvent';
import { useState } from 'react';

const months = [
  { short: 'Jan', long: 'January' },
  { short: 'Feb', long: 'February' },
  { short: 'Mar', long: 'March' },
  { short: 'Apr', long: 'April' },
  { short: 'May', long: 'May' },
  { short: 'Jun', long: 'June' },
  { short: 'Jul', long: 'July' },
  { short: 'Aug', long: 'August' },
  { short: 'Sep', long: 'September' },
  { short: 'Oct', long: 'October' },
  { short: 'Nov', long: 'November' },
  { short: 'Dec', long: 'December' },
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const daysByMonths: Record<number, number> = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const generateDaysInMonth = (month: number, year: number) => {
  const firstDateOfMonth = new Date(year, month - 1, 1);
  const firstDayOfMonth = firstDateOfMonth.getDay();
  // Previous Month
  const daysInMonth = Array.from(Array(firstDayOfMonth).keys()).map(
    (value: number, _index: number, array: number[]) => {
      const previousMonth = month === 1 ? 12 : month - 1;
      const previousYear = month === 1 ? year - 1 : year;
      const lastDayOfPreviousMonth = daysByMonths[previousMonth];
      const previousDate = lastDayOfPreviousMonth - array.length + value + 1;
      const day = new Date(
        previousYear,
        previousMonth - 1,
        previousDate
      ).getDay();
      return {
        day,
        date: previousDate,
        month: previousMonth,
        year: previousYear,
      };
    }
  );
  // Current Month
  for (let date = 1; date <= daysByMonths[month]; date++) {
    const day = new Date(year, month - 1, date).getDay();
    daysInMonth.push({ day, date, month, year });
  }
  // Next Month
  const lastDateOfMonth = new Date(year, month - 1, daysByMonths[month]);
  const lastDayOfInitMonth = lastDateOfMonth.getDay();
  if (lastDayOfInitMonth < 6) {
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    for (let i = 0; i < 6 - lastDayOfInitMonth; i++) {
      const day = new Date(nextYear, nextMonth - 1, i + 1).getDay();
      daysInMonth.push({ day, date: i + 1, month: nextMonth, year: nextYear });
    }
  }
  return daysInMonth;
};

type MobileDayProps = {
  day: number;
  date: number;
  month: number;
  year: number;
};

const MobileDay: React.FC<MobileDayProps> = ({ day, date, month, year }) => {
  return (
    <div className="flex items-center justify-between">
      <p>{days[day]}</p>
      <p>
        {addZero(date)}/{addZero(month)}/{year}
      </p>
    </div>
  );
};

type DayProps = {
  day: number;
  date: number;
  month: number;
  year: number;
  initDate: number;
  initMonth: number;
  initYear: number;
  currentMonth: number;
  currentYear: number;
};

const Day: React.FC<DayProps> = ({
  day,
  date,
  month,
  year,
  initDate,
  initMonth,
  initYear,
  currentMonth,
  currentYear,
}) => {
  if (date === initDate && month === initMonth && year === initYear) {
    return (
      <div className="text-right font-bold px-2">
        <div className="hidden md:block">{date}</div>
        <div className="block md:hidden">
          <MobileDay day={day} date={date} month={month} year={year} />
        </div>
      </div>
    );
  }

  if (year !== currentYear) {
    return (
      <div className="text-right text-black/50 px-2">
        <div className="hidden md:block">
          {date}/{month}/{year.toString().slice(2)}
        </div>
        <div className="block md:hidden">
          <MobileDay day={day} date={date} month={month} year={year} />
        </div>
      </div>
    );
  }

  if (month !== currentMonth) {
    return (
      <div className="text-right text-black/50 px-2">
        <div className="hidden md:block">
          {date}/{month}
        </div>
        <div className="block md:hidden">
          <MobileDay day={day} date={date} month={month} year={year} />
        </div>
      </div>
    );
  }

  return (
    <div className="text-right px-2">
      <div className="hidden md:block">{date}</div>
      <div className="block md:hidden">
        <MobileDay day={day} date={date} month={month} year={year} />
      </div>
    </div>
  );
};

export type CalendarProps = { events?: CalendarEventProps[] };

export const Calendar: React.FC<CalendarProps> = ({ events = [] }) => {
  const d = new Date();
  const initDate = d.getDate();
  const initMonth = d.getMonth() + 1;
  const initYear = d.getFullYear();
  const initDaysInMonth = generateDaysInMonth(initMonth, initYear);

  const [month, setMonth] = useState<number>(initMonth);
  const [year, setYear] = useState<number>(initYear);
  const [daysInMonth, setDaysInMonth] = useState(initDaysInMonth);

  const changeMonth = (change: number) => {
    if (month === 12 && change === 1) {
      setMonth(1);
      setYear(year + 1);
    } else if (month === 1 && change === -1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month + change);
    }
    const newDaysInMonth = generateDaysInMonth(month, year);
    setDaysInMonth(newDaysInMonth);
  };

  return (
    <>
      <div className="grid grid-cols-7">
        <div className="col-span-7">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <FormControl>
                <InputLabel id="month-select-label">Month</InputLabel>
                <Select
                  type="number"
                  labelId="month-select-label"
                  id="demo-simple-select"
                  value={month}
                  label="Month"
                  onChange={(event) => {
                    setMonth(parseInt(event.target.value.toString(), 10));
                    const newDaysInMonth = generateDaysInMonth(
                      parseInt(event.target.value.toString(), 10),
                      year
                    );
                    setDaysInMonth(newDaysInMonth);
                  }}
                  size="small"
                >
                  {months.map(({ short, long }, index: number) => (
                    <MenuItem key={`value-${index + 1}`} value={index + 1}>
                      <span className="inline md:hidden">{short}</span>
                      <span className="hidden md:inline">{long}</span>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="flex items-center">
                <IconButton
                  onClick={() => {
                    changeMonth(-1);
                  }}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <p className="font-bold text-md md:text-xl">
                  <span>
                    {month === initMonth && year === initYear
                      ? addZero(initDate)
                      : addZero(1)}{' '}
                  </span>
                  <span className="inline md:hidden">
                    {months[month - 1].short}{' '}
                  </span>
                  <span className="hidden md:inline">
                    {months[month - 1].long}{' '}
                  </span>
                  <span>{year}</span>
                </p>
                <IconButton
                  onClick={() => {
                    changeMonth(1);
                  }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </div>
              <Button
                variant="contained"
                onClick={() => {
                  const initDaysInMonth = generateDaysInMonth(
                    initMonth,
                    initYear
                  );
                  setMonth(initMonth);
                  setYear(initYear);
                  setDaysInMonth(initDaysInMonth);
                }}
              >
                Today
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-t">
        <div className="grid grid-cols-7">
          <div className="col-span-1">
            <p className="text-center p-4 font-medium">Sunday</p>
          </div>
          <div className="col-span-1">
            <p className="text-center p-4 font-medium">Monday</p>
          </div>
          <div className="col-span-1">
            <p className="text-center p-4 font-medium">Tuesday</p>
          </div>
          <div className="col-span-1">
            <p className="text-center p-4 font-medium">Wednesday</p>
          </div>
          <div className="col-span-1">
            <p className="text-center p-4 font-medium">Thursday</p>
          </div>
          <div className="col-span-1">
            <p className="text-center p-4 font-medium">Friday</p>
          </div>
          <div className="col-span-1">
            <p className="text-center p-4 font-medium">Saturday</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7">
        {daysInMonth.map(({ day, date: iDate, month: iMonth, year: iYear }) => {
          return (
            <div
              key={`${iDate}-${iMonth}-${iYear}`}
              className="col-span-1 border-t"
            >
              <div className="py-4 px-2 flex flex-col gap-2">
                <Day
                  day={day}
                  date={iDate}
                  month={iMonth}
                  year={iYear}
                  initDate={initDate}
                  initMonth={initMonth}
                  initYear={initYear}
                  currentMonth={month}
                  currentYear={year}
                />
                {events.map(
                  ({
                    type,
                    date,
                    month,
                    year,
                    description,
                  }: CalendarEventProps) => {
                    return (
                      <CalendarEvent
                        key={`event-${iDate}-${iMonth}-${iYear}`}
                        type={type}
                        date={date}
                        month={month}
                        year={year}
                        iDate={iDate}
                        iMonth={iMonth}
                        iYear={iYear}
                        description={description}
                      />
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Calendar;
