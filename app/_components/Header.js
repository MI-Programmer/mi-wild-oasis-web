import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { auth } from "../_lib/Auth";

const Header = async () => {
  const session = await auth();

  return (
    <header className="w-full border-b border-primary-900 px-4 py-4 sm:px-5 md:px-8 md:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation avatar={session?.user?.image} />
      </div>
    </header>
  );
};

export default Header;
