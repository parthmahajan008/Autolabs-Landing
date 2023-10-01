import Navbar from "./_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <main className="h-full pl-[10px] pt-[90px]">{children}</main>
    </div>
  );
};
export default HomeLayout;
