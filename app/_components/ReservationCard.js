import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";

import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col border border-primary-800 md:flex-row">
      <div className="relative aspect-square h-52 md:h-32">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col gap-3 px-3 py-3 sm:px-6 md:px-3 lg:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold md:text-xl">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-5 items-center rounded-sm bg-yellow-800 px-2 text-xs font-semibold uppercase text-yellow-200 md:h-7 md:px-3 md:font-bold">
              past
            </span>
          ) : (
            <span className="pmd:x-3 flex h-5 items-center rounded-sm bg-green-800 px-2 text-xs font-semibold uppercase text-green-200 md:h-7 md:font-bold">
              upcoming
            </span>
          )}
        </div>

        <p className="text-xs text-primary-300 md:text-base lg:text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="mt-auto flex items-baseline gap-1 sm:gap-2 lg:gap-5">
          <p className="text-base font-semibold text-accent-400 md:text-xl">
            ${totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-xs text-primary-300 sm:text-sm lg:text-lg">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-xs text-primary-400 lg:text-sm">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-row border-primary-800 md:w-[100px] md:flex-col md:border-l">
        {!isPast(startDate) && (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex flex-grow items-center justify-center gap-2 border-primary-800 px-3 py-5 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 md:justify-start md:border-b md:py-0"
            >
              <PencilSquareIcon className="h-4 w-4 text-primary-600 transition-colors group-hover:text-primary-800 md:h-5 md:w-5" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
