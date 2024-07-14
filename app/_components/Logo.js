import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      />
      <span className="text-lg font-semibold text-primary-100 sm:text-xl">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
