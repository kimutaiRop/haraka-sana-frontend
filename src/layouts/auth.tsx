import { JSX } from "solid-js";
import truck from "~/assets/truck.png";
import pattern from "~/assets/pattern.png";
import login from "~/assets/login.png";
import logo from "~/assets/logo.svg";

const AuthLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div class=" w-full max-w-(--breakpoint-2xl) mx-auto  min-h-screen px-2 ">
      <div class="grid grid-cols-2 gap-4 justify-center h-full">
        <div class="flex flex-col py-10 h-full justify-between">
          <div>
            <img src={logo} class="h-14" />
          </div>
          <div class="py-10">
            <h2 class="uppercase text-5xl leading-normal font-semibold tracking-wide w-10/12 ">
              Let's log in now to access exclusive features
            </h2>
          </div>
          <div class="py-6">
            <p class="leading-relaxed  w-10/12 ">
              Enter the Dashboard for Warehouse Management. Streamline
              operations, optimize resources, and enhance productivity.
              Seamlessly navigate through data and tasks for streamlined
              warehouse management.
            </p>
          </div>
          <div class="py-10 ">
            <div class="grid grid-cols-2 aspect-[10/4]  rounded-4xl overflow-hidden bg-accent">
              <div class="bg-gradient-to-br from-[#987AED] via-70% via-accent to-75% to-transparent">
                <img src={truck} class="w-full h-full object-cover" />
              </div>
              <div class=" from-[#987AED] bg-accent">
                <div
                  class="h-full w-full bg-no-repeat bg-cover bg-blend-color bg-top"
                  style={{ "background-image": `url(${pattern})` }}
                >
                  <div class="w-full bg-accent/75 h-full p-5 gap-5 flex flex-col">
                    <h2 class="text-6xl font-medium">GET FREE DEMO</h2>
                    <p>Explore dashboard , Click here!</p>
                    <div class="flex">
                      <a
                        href="/"
                        class="bg-[#17B26A] py-2 px-7 text-2xl hover:cursor-pointer"
                      >
                        View Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 w-full ">
          <div
            class="w-full bg-cover h-full bg-center rounded-4xl overflow-hidden flex flex-col justify-center items-center"
            style={{
              "background-image": `url(${login})`,
            }}
          >
            <div class="max-w-md min-w-md mx-auto p-6 rounded-xl bg-black/20 backdrop-blur-md border">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
