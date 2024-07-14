import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

const Page = async ({ params: { bookingId } }) => {
  const { cabinId, numGuests, observations } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-accent-400 md:mb-7 md:text-2xl">
        Edit Reservation #{bookingId}
      </h2>

      <form
        className="flex flex-col gap-5 bg-primary-900 px-6 py-8 text-sm sm:px-12 sm:text-base lg:px-16 lg:text-lg"
        action={updateBooking}
      >
        <input type="hidden" name="bookingId" value={bookingId} />

        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm outline-none sm:px-5 sm:py-3"
            defaultValue={numGuests}
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm outline-none sm:px-5 sm:py-3"
            defaultValue={observations}
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Page;
