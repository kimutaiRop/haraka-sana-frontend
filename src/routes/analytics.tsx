import { clientOnly } from "@solidjs/start";

const IncomeChart = clientOnly(() => import("~/components/income"));
const RadialBar = clientOnly(() => import("~/components/radial-bar"));
const MixedChart = clientOnly(() => import("~/components/mixed-chart"));

const Analytics = () => {
  return (
    <div class="grid grid-cols-3 gap-6 py-4">
      <div class="bg-secondary flex flex-col p-4 gap-5 justify-between">
        <div class=" flex space-x-2 items-start">
          <span class="p-2 bg-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
            </svg>
          </span>
          <div>
            <span>Income</span>
            <h2 class="font-semibold text-2xl">Total Income</h2>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <h2 class="font-semibold text-5xl">$1046.00 </h2>
          <span>
            <span class="text-accent">+21%</span> vs last month
          </span>
        </div>
        <IncomeChart />
      </div>
      <div class="bg-secondary grid grid-cols-7 p-4 gap-5 justify-center">
        <div class="flex flex-col justify-between items-center col-span-3">
          <div class=" flex space-x-2 items-start w-full">
            <span class="p-2 bg-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
              </svg>
            </span>
            <div>
              <span>Analytic</span>
              <h2 class="font-semibold text-2xl">Orders</h2>
            </div>
          </div>
          <div class="flex  flex-col  space-y-2 text-left w-full">
            <span class="tetxt-left">Total</span>
            <h2 class="font-semibold text-xl">$397.00</h2>
            <span>
              <span class="text-accent">+21%</span> vs last month
            </span>
          </div>
          <div></div>
        </div>
        <div class="col-span-4 justify-center items-center flex">
          <RadialBar />
        </div>
      </div>
      <div class="bg-secondary flex flex-col p-4 gap-5 justify-between">
        <div class=" flex space-x-2 items-start">
          <span class="p-2 bg-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
            </svg>
          </span>
          <div>
            <span>Income</span>
            <h2 class="font-semibold text-2xl">Highest Area</h2>
          </div>
        </div>

        <MixedChart />
      </div>
    </div>
  );
};

export default Analytics;
