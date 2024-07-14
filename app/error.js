"use client";

const Error = ({ error, reset }) => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-6">
      <h1 className="text-xl font-semibold sm:text-3xl">
        Something went wrong!
      </h1>
      <p className="text-base sm:text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 px-4 py-3 text-base text-primary-800 sm:px-6 sm:text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
};

export default Error;
