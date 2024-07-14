import Link from "next/link";

const NotFound = () => {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-xl font-semibold sm:text-3xl">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 px-4 py-3 text-sm text-primary-800 sm:px-6 sm:text-lg"
      >
        Go back home
      </Link>
    </main>
  );
};

export default NotFound;
