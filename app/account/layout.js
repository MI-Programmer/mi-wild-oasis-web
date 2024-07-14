import SideNavigation from "@/app/_components/SideNavigation";

const Layout = ({ children }) => {
  return (
    <div className="grid h-full grid-cols-[4rem_1fr] gap-6 md:grid-cols-[10rem_1fr] lg:grid-cols-[16rem_1fr] lg:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default Layout;
