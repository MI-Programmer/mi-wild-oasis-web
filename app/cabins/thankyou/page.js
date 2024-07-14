import Link from "next/link";

const Page = () => {
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="text-2xl font-semibold sm:text-3xl">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/reservations"
        className="inline-block text-lg text-accent-500 underline sm:text-xl"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
};
export default Page;
