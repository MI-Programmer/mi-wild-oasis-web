"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, pendingLabel }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-5 py-3 text-sm font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 md:text-base lg:px-8 lg:py-4"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
};

export default SubmitButton;
