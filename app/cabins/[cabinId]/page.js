import { Suspense } from "react";

import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";
import { getCabin, getCabins } from "@/app/_lib/data-service";

export const generateMetadata = async ({ params }) => {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
};

export const generateStaticParams = async () => {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
};

const Page = async ({ params }) => {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="mx-auto mt-0 max-w-6xl sm:mt-2 lg:mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="mb-6 text-center text-3xl font-semibold text-accent-400 sm:text-4xl lg:mb-10 lg:text-5xl">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
