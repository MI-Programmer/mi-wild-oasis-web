import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10 text-center">
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
}
