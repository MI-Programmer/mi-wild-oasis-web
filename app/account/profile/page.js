import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { auth } from "@/app/_lib/Auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update profile",
};

const Page = async () => {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-accent-400 lg:text-2xl">
        Update your guest profile
      </h2>

      <p className="mb-5 text-sm text-primary-200 md:mb-8 md:text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm outline-none sm:px-5 sm:py-3"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
};

export default Page;
