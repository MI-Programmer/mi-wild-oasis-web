"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";

import { useReservation } from "../_contexts/ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl bg-accent-500 px-4 py-3 text-xs font-medium text-primary-800 shadow-xl shadow-slate-900 sm:gap-3 sm:text-sm md:gap-8 md:rounded-full md:px-8 md:py-5 md:text-base md:font-semibold">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 transition-all hover:bg-accent-600"
        onClick={resetRange}
      >
        <XMarkIcon className="h-3 w-3 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
