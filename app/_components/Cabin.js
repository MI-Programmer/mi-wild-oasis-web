import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import TextExpander from "@/app/_components/TextExpander";

const Cabin = ({ cabin }) => {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="mb-10 grid gap-4 border border-primary-800 px-4 py-3 sm:mb-14 sm:px-6 md:mb-16 lg:mb-24 lg:grid-cols-[3fr_4fr] lg:gap-20 lg:px-10">
      <div className="relative aspect-video -translate-x-0 sm:scale-90 md:scale-75 lg:aspect-auto lg:-translate-x-3 lg:scale-[1.15]">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="mb-3 w-full translate-x-0 bg-primary-950 p-0 text-center text-4xl font-black text-accent-100 sm:text-5xl md:text-6xl lg:mb-5 lg:w-[150%] lg:translate-x-[-254px] lg:p-6 lg:pb-1 lg:text-left lg:text-7xl">
          Cabin {name}
        </h3>

        <p className="mb-10 text-sm text-primary-300 sm:text-base lg:text-lg">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-4 flex flex-col gap-4 md:mb-5 lg:mb-7">
          <li className="flex items-center gap-3">
            <UsersIcon className="h-4 w-4 text-primary-600 lg:h-5 lg:w-5" />
            <span className="text-base lg:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="h-4 w-4 text-primary-600 lg:h-5 lg:w-5" />
            <span className="text-base lg:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-4 w-4 text-primary-600 lg:h-5 lg:w-5" />
            <span className="text-base lg:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cabin;
