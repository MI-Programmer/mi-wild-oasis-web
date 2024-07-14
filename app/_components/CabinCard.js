import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border border-primary-800">
      <div className="relative flex-1">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex-1 md:flex-grow">
        <div className="bg-primary-950 px-4 pb-2 pt-5 md:px-7 md:pb-4">
          <h3 className="mb-2 text-xl font-semibold text-accent-500 md:mb-3 md:text-2xl">
            Cabin {name}
          </h3>

          <div className="mb-4 flex items-center gap-1 sm:mb-2 sm:gap-3">
            <UsersIcon className="h-4 w-4 text-primary-600 sm:h-5 sm:w-5" />
            <p className="text-xs text-primary-200 sm:text-sm md:text-lg">
              For up to{" "}
              <span className="font-medium sm:font-semibold md:font-bold">
                {maxCapacity}
              </span>{" "}
              guests
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-3">
            {discount > 0 ? (
              <>
                <span className="text-xl font-[350] sm:text-2xl md:text-3xl">
                  ${regularPrice - discount}
                </span>
                <span className="font-medium text-primary-600 line-through sm:font-semibold">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl font-[350] sm:text-2xl md:text-3xl">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="border-t border-t-primary-800 bg-primary-950 text-right">
          <Link
            href={`/cabins/${id}`}
            className="inline-block border-l border-primary-800 px-4 py-2 text-xs transition-all hover:bg-accent-600 hover:text-primary-900 sm:text-base md:px-6 md:py-4"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
