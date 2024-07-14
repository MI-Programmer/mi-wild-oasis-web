import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

const Page = () => {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-5xl font-normal tracking-tight text-primary-50 sm:text-6xl md:text-7xl lg:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-4 py-3 text-xs font-bold text-primary-800 transition-all hover:bg-accent-600 sm:px-5 sm:py-4 sm:text-base md:px-8 md:py-6 md:text-lg md:font-semibold"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
};

export default Page;
