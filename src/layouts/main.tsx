import { JSX } from "solid-js";
import Header from "~/components/header";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div class="min-h-screen">
      <Header />
      <div class="max-w-(--breakpoint-2xl) mx-auto w-full py-3">{children}</div>
    </div>
  );
};

export default MainLayout;
