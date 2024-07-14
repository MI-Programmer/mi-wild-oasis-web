import { auth } from "../_lib/Auth";

export const metadata = {
  title: "Guest area",
};

const Page = async () => {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="mb-7 text-lg font-semibold text-accent-400 md:text-2xl">
      Your reservations, {firstName}
    </h2>
  );
};

export default Page;
