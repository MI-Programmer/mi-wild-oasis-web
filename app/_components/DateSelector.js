"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useReservation } from "../_contexts/ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:justify-between lg:gap-0">
      <div className="xs1:w-[450px] xs3:w-[350px] xs2:w-[400px] scale-90 place-self-center overflow-auto sm:w-auto">
        <DayPicker
          className="pt-6 text-sm sm:pt-8 md:pt-10 md:text-base lg:pt-12"
          mode="range"
          onSelect={setRange}
          selected={displayRange}
          min={minBookingLength + 1}
          max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={2}
          disabled={(curDate) =>
            isPast(curDate) ||
            bookedDates.some((booked) => isSameDay(booked, curDate))
          }
        />
      </div>

      <div className="flex h-[52px] items-center justify-between bg-accent-500 px-4 text-primary-800 sm:px-6 md:h-[62px] lg:h-[72px] lg:px-8">
        <div className="flex items-baseline gap-2 sm:gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-sm sm:text-xl lg:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="font-semibold text-primary-700 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-sm sm:text-xl lg:text-2xl">
                ${regularPrice}
              </span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-sm sm:text-xl lg:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-base font-bold uppercase lg:text-lg">
                  Total
                </span>{" "}
                <span className="text-lg font-semibold sm:text-xl lg:text-2xl">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 px-4 py-2 text-xs font-semibold sm:text-sm"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
