"use client";

import SubmitButton from "./SubmitButton";
import { updateGuest } from "../_lib/actions";

const UpdateProfileForm = ({ children, guest }) => {
  const { fullName, email, nationalID, nationality, countryFlag } = guest;

  return (
    <form
      className="flex flex-col gap-4 bg-primary-900 px-6 py-8 text-sm sm:px-8 sm:text-base md:gap-6 md:px-10 lg:px-12 lg:text-lg"
      action={updateGuest}
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          name="fullName"
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm outline-none disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 sm:px-5 sm:py-3"
          defaultValue={fullName}
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name="email"
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm outline-none disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 sm:px-5 sm:py-3"
          defaultValue={email}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          )}
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm outline-none sm:px-5 sm:py-3"
          defaultValue={nationalID}
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
