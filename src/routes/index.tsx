import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
const ScatterPlot = clientOnly(() => import("~/components/scatter-plot"));
const BarChart = clientOnly(() => import("~/components/barchart"));
const Sparkline = clientOnly(() => import("~/components/sparkline"));
const TrackLocation = clientOnly(() => import("~/components/track-location"));
import truck from "~/assets/long-truck.png";
import pattern from "~/assets/pattern.png";
import Orders from "~/components/orders";
export default function Home() {
  return (
    <div class="w-full flex flex-col mx-auto  gap-4 py-4">
      <div class="text-center px-4   justify-center grid grid-cols-3 gap-4">
        <div class="col-span-1 grid grid-cols-2 gap-4">
          <div class="w-full aspect-square bg-secondary flex flex-col justify-between py-4">
            <div class="flex space-x-1 p-5 items-center">
              <span class="bg-accent p-1.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_51735)">
                    <path
                      d="M17.5 6.24996L14.1667 7.91663M14.1667 7.91663L13.75 8.12496L10 9.99996M14.1667 7.91663V10.8333M14.1667 7.91663L6.25 3.74996M10 9.99996L2.50001 6.24996M10 9.99996V17.9166M12.9817 2.81829L14.6483 3.69329C16.4408 4.63413 17.3375 5.10413 17.8358 5.94996C18.3333 6.79496 18.3333 7.84746 18.3333 9.95163V10.0491C18.3333 12.1525 18.3333 13.205 17.8358 14.05C17.3375 14.8958 16.4408 15.3666 14.6483 16.3075L12.9817 17.1816C11.5183 17.9491 10.7867 18.3333 10 18.3333C9.21334 18.3333 8.48167 17.95 7.01834 17.1816L5.35167 16.3066C3.55917 15.3658 2.6625 14.8958 2.16417 14.05C1.66667 13.205 1.66667 12.1525 1.66667 10.05V9.95246C1.66667 7.84829 1.66667 6.79579 2.16417 5.95079C2.6625 5.10496 3.55917 4.63413 5.35167 3.69413L7.01834 2.81913C8.48167 2.05079 9.21334 1.66663 10 1.66663C10.7867 1.66663 11.5183 2.04996 12.9817 2.81829Z"
                      stroke="#FCFCFD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_51735">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span class="text-lg">Total Shipment</span>
            </div>
            <div class="grid grid-cols-2 py-2 px-2 items-center">
              <h2 class="font-bold text-5xl">433</h2>
              <Sparkline color="#43A506" />
            </div>
            <div class="w-full flex justify-left px-4">
              <p>
                <span class="text-accent text-md">+21% </span>vs last month
              </p>
            </div>
          </div>
          <div class="w-full aspect-square bg-secondary flex flex-col justify-between py-4">
            <div class="flex space-x-1 p-5 items-center">
              <span class="bg-accent p-1.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_51735)">
                    <path
                      d="M17.5 6.24996L14.1667 7.91663M14.1667 7.91663L13.75 8.12496L10 9.99996M14.1667 7.91663V10.8333M14.1667 7.91663L6.25 3.74996M10 9.99996L2.50001 6.24996M10 9.99996V17.9166M12.9817 2.81829L14.6483 3.69329C16.4408 4.63413 17.3375 5.10413 17.8358 5.94996C18.3333 6.79496 18.3333 7.84746 18.3333 9.95163V10.0491C18.3333 12.1525 18.3333 13.205 17.8358 14.05C17.3375 14.8958 16.4408 15.3666 14.6483 16.3075L12.9817 17.1816C11.5183 17.9491 10.7867 18.3333 10 18.3333C9.21334 18.3333 8.48167 17.95 7.01834 17.1816L5.35167 16.3066C3.55917 15.3658 2.6625 14.8958 2.16417 14.05C1.66667 13.205 1.66667 12.1525 1.66667 10.05V9.95246C1.66667 7.84829 1.66667 6.79579 2.16417 5.95079C2.6625 5.10496 3.55917 4.63413 5.35167 3.69413L7.01834 2.81913C8.48167 2.05079 9.21334 1.66663 10 1.66663C10.7867 1.66663 11.5183 2.04996 12.9817 2.81829Z"
                      stroke="#FCFCFD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_51735">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span class="text-lg">Complete</span>
            </div>
            <div class="grid grid-cols-2 py-2 px-2 items-center">
              <h2 class="font-bold text-5xl">110</h2>
              <Sparkline color="#43A506" />
            </div>
            <div class="w-full flex justify-left px-4">
              <p>
                <span class="text-accent text-md">+21% </span>vs last month
              </p>
            </div>
          </div>
          <div class="w-full aspect-square bg-secondary flex flex-col justify-between py-4">
            <div class="flex space-x-1 p-5 items-center">
              <span class="bg-accent p-1.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_51735)">
                    <path
                      d="M17.5 6.24996L14.1667 7.91663M14.1667 7.91663L13.75 8.12496L10 9.99996M14.1667 7.91663V10.8333M14.1667 7.91663L6.25 3.74996M10 9.99996L2.50001 6.24996M10 9.99996V17.9166M12.9817 2.81829L14.6483 3.69329C16.4408 4.63413 17.3375 5.10413 17.8358 5.94996C18.3333 6.79496 18.3333 7.84746 18.3333 9.95163V10.0491C18.3333 12.1525 18.3333 13.205 17.8358 14.05C17.3375 14.8958 16.4408 15.3666 14.6483 16.3075L12.9817 17.1816C11.5183 17.9491 10.7867 18.3333 10 18.3333C9.21334 18.3333 8.48167 17.95 7.01834 17.1816L5.35167 16.3066C3.55917 15.3658 2.6625 14.8958 2.16417 14.05C1.66667 13.205 1.66667 12.1525 1.66667 10.05V9.95246C1.66667 7.84829 1.66667 6.79579 2.16417 5.95079C2.6625 5.10496 3.55917 4.63413 5.35167 3.69413L7.01834 2.81913C8.48167 2.05079 9.21334 1.66663 10 1.66663C10.7867 1.66663 11.5183 2.04996 12.9817 2.81829Z"
                      stroke="#FCFCFD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_51735">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span class="text-lg">Pending</span>
            </div>
            <div class="grid grid-cols-2 py-2 px-2 items-center">
              <h2 class="font-bold text-5xl">134</h2>
              <Sparkline color="#43A506" />
            </div>
            <div class="w-full flex justify-left px-4">
              <p>
                <span class="text-accent text-md">+21% </span>vs last month
              </p>
            </div>
          </div>
          <div class="w-full aspect-square bg-secondary flex flex-col justify-between py-4">
            <div class="flex space-x-1 p-5 items-center">
              <span class="bg-accent p-1.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_51735)">
                    <path
                      d="M17.5 6.24996L14.1667 7.91663M14.1667 7.91663L13.75 8.12496L10 9.99996M14.1667 7.91663V10.8333M14.1667 7.91663L6.25 3.74996M10 9.99996L2.50001 6.24996M10 9.99996V17.9166M12.9817 2.81829L14.6483 3.69329C16.4408 4.63413 17.3375 5.10413 17.8358 5.94996C18.3333 6.79496 18.3333 7.84746 18.3333 9.95163V10.0491C18.3333 12.1525 18.3333 13.205 17.8358 14.05C17.3375 14.8958 16.4408 15.3666 14.6483 16.3075L12.9817 17.1816C11.5183 17.9491 10.7867 18.3333 10 18.3333C9.21334 18.3333 8.48167 17.95 7.01834 17.1816L5.35167 16.3066C3.55917 15.3658 2.6625 14.8958 2.16417 14.05C1.66667 13.205 1.66667 12.1525 1.66667 10.05V9.95246C1.66667 7.84829 1.66667 6.79579 2.16417 5.95079C2.6625 5.10496 3.55917 4.63413 5.35167 3.69413L7.01834 2.81913C8.48167 2.05079 9.21334 1.66663 10 1.66663C10.7867 1.66663 11.5183 2.04996 12.9817 2.81829Z"
                      stroke="#FCFCFD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_51735">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span class="text-lg">Refund</span>
            </div>
            <div class="grid grid-cols-2 py-2 px-2 items-center">
              <h2 class="font-bold text-5xl">24</h2>
              <Sparkline color="#ED7777" />
            </div>
            <div class="w-full flex justify-left px-4">
              <p>
                <span class="text-accent text-md">-10% </span>vs last month
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-2 flex flex-col h-full bg-secondary">
          <div class="flex flex-col">
            <div class="flex justify-between p-3">
              <div class="flex space-x-2 items-center">
                <span class="bg-accent p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                </span>

                <h2 class="text-accent font-semibold text-2xl">
                  Shipment Analytics{" "}
                </h2>
              </div>
              <div class="bg-background  py-2 px-2">
                <A href="/" class="px-7 py-1">
                  7 DAYS
                </A>
                <A href="/" class="px-7 py-1">
                  7 DAYS
                </A>
                <A href="/" class="px-7 py-1 bg-accent">
                  7 DAYS
                </A>
              </div>
            </div>
          </div>
          <div class="w-full h-full flex-grow pb-4">
            <ScatterPlot />
          </div>
        </div>
      </div>
      <div class="text-center items-start  px-4 grid grid-cols-3 gap-4">
        <div class="col-span-1 w-full aspect-[8/10] bg-secondary flex flex-col p-4">
          <div class="w-full h-full p-2 flex flex-col">
            <div class="flex justify-between items-center">
              <div class="flex space-x-2  items-center">
                <span class="bg-accent p-2 rounded ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.4567 0.041626H13.21C13.9592 0.041626 14.5833 0.041626 15.0783 0.108293C15.6017 0.178293 16.0742 0.333293 16.4533 0.712459C16.8333 1.09246 16.9883 1.56496 17.0583 2.08746C17.125 2.58329 17.125 3.20829 17.125 3.95663V16.7083H17.3333C17.4991 16.7083 17.6581 16.7741 17.7753 16.8913C17.8925 17.0086 17.9583 17.1675 17.9583 17.3333C17.9583 17.4991 17.8925 17.658 17.7753 17.7752C17.6581 17.8924 17.4991 17.9583 17.3333 17.9583H0.666672C0.500911 17.9583 0.34194 17.8924 0.22473 17.7752C0.10752 17.658 0.0416718 17.4991 0.0416718 17.3333C0.0416718 17.1675 0.10752 17.0086 0.22473 16.8913C0.34194 16.7741 0.500911 16.7083 0.666672 16.7083H0.875005V6.45663C0.875005 5.70829 0.875005 5.08329 0.941672 4.58829C1.01167 4.06496 1.16667 3.59246 1.54584 3.21329C1.92584 2.83329 2.39834 2.67829 2.92084 2.60829C3.41667 2.54163 4.04167 2.54163 4.79 2.54163H7.565C7.6075 1.81329 7.74251 1.18329 8.21251 0.712459C8.59251 0.333293 9.06501 0.179126 9.5875 0.108293C10.0833 0.041626 10.7083 0.041626 11.4567 0.041626ZM8.1725 3.79163H4.83334C4.03 3.79163 3.49001 3.79329 3.08751 3.84746C2.70334 3.89913 2.53834 3.98829 2.43001 4.09746C2.32167 4.20579 2.23251 4.36996 2.18001 4.75413C2.12751 5.15663 2.12501 5.69663 2.12501 6.49996V16.7083H5.875V14.8333C5.875 14.6675 5.94085 14.5086 6.05806 14.3913C6.17527 14.2741 6.33424 14.2083 6.5 14.2083C6.66577 14.2083 6.82474 14.2741 6.94195 14.3913C7.05916 14.5086 7.125 14.6675 7.125 14.8333V16.7083H10.875V6.49996C10.875 5.69663 10.8733 5.15663 10.82 4.75413C10.7675 4.36996 10.6783 4.20496 10.57 4.09663C10.4617 3.98829 10.2967 3.89913 9.91167 3.84663C9.51084 3.79329 8.9725 3.79163 8.1725 3.79163ZM12.125 16.7083V6.45663C12.125 5.70829 12.125 5.08329 12.0583 4.58829C11.9883 4.06496 11.8333 3.59246 11.4533 3.21329C11.0742 2.83329 10.6017 2.67829 10.0783 2.60829C9.72417 2.56079 9.30334 2.54663 8.82001 2.54329C8.86167 1.95996 8.95334 1.74079 9.09667 1.59663C9.205 1.48829 9.37 1.39913 9.755 1.34663C10.1567 1.29329 10.6967 1.29163 11.5 1.29163H13.1667C13.97 1.29163 14.51 1.29329 14.9125 1.34746C15.2967 1.39913 15.4617 1.48829 15.57 1.59746C15.6783 1.70579 15.7675 1.86996 15.82 2.25413C15.8733 2.65663 15.875 3.19663 15.875 3.99996V16.7083H12.125ZM3.37501 5.66663C3.37501 5.50087 3.44085 5.34189 3.55806 5.22468C3.67527 5.10747 3.83424 5.04163 4.00001 5.04163H9C9.16576 5.04163 9.32474 5.10747 9.44195 5.22468C9.55916 5.34189 9.625 5.50087 9.625 5.66663C9.625 5.83239 9.55916 5.99136 9.44195 6.10857C9.32474 6.22578 9.16576 6.29163 9 6.29163H4.00001C3.83424 6.29163 3.67527 6.22578 3.55806 6.10857C3.44085 5.99136 3.37501 5.83239 3.37501 5.66663ZM3.37501 8.16663C3.37501 8.00087 3.44085 7.84189 3.55806 7.72468C3.67527 7.60747 3.83424 7.54163 4.00001 7.54163H9C9.16576 7.54163 9.32474 7.60747 9.44195 7.72468C9.55916 7.84189 9.625 8.00087 9.625 8.16663C9.625 8.33239 9.55916 8.49136 9.44195 8.60857C9.32474 8.72578 9.16576 8.79163 9 8.79163H4.00001C3.83424 8.79163 3.67527 8.72578 3.55806 8.60857C3.44085 8.49136 3.37501 8.33239 3.37501 8.16663ZM3.37501 10.6666C3.37501 10.5009 3.44085 10.3419 3.55806 10.2247C3.67527 10.1075 3.83424 10.0416 4.00001 10.0416H9C9.16576 10.0416 9.32474 10.1075 9.44195 10.2247C9.55916 10.3419 9.625 10.5009 9.625 10.6666C9.625 10.8324 9.55916 10.9914 9.44195 11.1086C9.32474 11.2258 9.16576 11.2916 9 11.2916H4.00001C3.83424 11.2916 3.67527 11.2258 3.55806 11.1086C3.44085 10.9914 3.37501 10.8324 3.37501 10.6666Z"
                      fill="#FCFCFD"
                    />
                  </svg>
                </span>
                <h2 class="font-semibold">Popular City</h2>
              </div>
            </div>
            <div class="flex-grow pb-2">
              <BarChart />
            </div>
            <div class="flex justify-between items-center pt-3">
              <p class="text-left">
                Displays data for this month and you can display anything you
                want
              </p>
              <button class="border-2 border-accent text-accent px-5 py-2 whitespace-nowrap">
                View Detail
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-2 grid grid-cols-2 gap-4">
          <div class="col-span-1 w-full aspect-[14/10] bg-secondary flex flex-col justify-between py-4">
            <TrackLocation />
          </div>
          <div
            class="col-span-1  w-full bg-cover bg-bottom aspect-[14/10] bg-rotated"
            style={{ "background-image": `url(${pattern})` }}
          >
            <div class="w-full  h-full bg-[#085D3A]/90 justify-between py-4 grid grid-cols-2">
              <div class="w-full flex flex-col p-3 gap-4 justify-between">
                <div class="flex items-start gap-2">
                  <span class="bg-accent p-1 rounded-full">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      class="w-7 h-7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.075 2.12422C14.615 1.86589 14.125 1.84089 13.6075 1.90506C13.1158 1.96672 12.5166 2.12172 11.7975 2.30922L10.115 2.74589C9.39581 2.93339 8.79748 3.08839 8.33998 3.27422C7.85748 3.46922 7.44081 3.73089 7.17081 4.18506C6.89915 4.64172 6.87248 5.13006 6.93998 5.64006C7.00415 6.12089 7.16498 6.70422 7.35665 7.39922L7.80915 9.03589C8.00081 9.73172 8.16248 10.3142 8.35498 10.7609C8.55915 11.2359 8.83165 11.6401 9.29498 11.9001C9.75498 12.1576 10.245 12.1834 10.7633 12.1184C11.255 12.0576 11.8541 11.9017 12.5733 11.7142L14.2558 11.2776C14.975 11.0909 15.5733 10.9351 16.0308 10.7492C16.5133 10.5542 16.93 10.2926 17.2 9.83839C17.4716 9.38172 17.4983 8.89339 17.4308 8.38422C17.3666 7.90339 17.2058 7.31922 17.0141 6.62422L16.5616 4.98756C16.37 4.29256 16.2083 3.70922 16.0158 3.26256C15.8116 2.78756 15.5375 2.38339 15.075 2.12422ZM12.0716 3.52922C12.8425 3.32922 13.3616 3.19589 13.7633 3.14589C14.1475 3.09756 14.3316 3.14006 14.4658 3.21506C14.5966 3.28839 14.7225 3.41589 14.8683 3.75672C15.0225 4.11506 15.1625 4.61422 15.3691 5.36256L15.7975 6.91506C16.005 7.66339 16.1416 8.16339 16.1925 8.54839C16.2408 8.91422 16.1975 9.08006 16.1258 9.19922C16.0533 9.32172 15.9216 9.44589 15.5633 9.59089C15.19 9.74172 14.6716 9.87839 13.9008 10.0784L12.3008 10.4942C11.53 10.6942 11.0108 10.8276 10.6091 10.8776C10.2241 10.9267 10.0408 10.8842 9.90665 10.8092C9.77581 10.7359 9.64998 10.6076 9.50415 10.2676C9.34998 9.90922 9.20998 9.40922 9.00331 8.66089L8.57498 7.10922C8.36748 6.35922 8.23081 5.86006 8.17998 5.47589C8.13165 5.10922 8.17498 4.94422 8.24665 4.82422C8.31915 4.70172 8.45081 4.57756 8.80915 4.43256C9.18248 4.28172 9.70081 4.14589 10.4716 3.94506L12.0716 3.52922Z"
                        fill="#FCFCFD"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.66664 3.93753C2.50877 3.89883 2.34202 3.92315 2.20178 4.00535C2.06154 4.08755 1.95884 4.22116 1.91548 4.37782C1.87211 4.53448 1.89148 4.70187 1.96949 4.84449C2.0475 4.9871 2.178 5.09371 2.33331 5.1417L3.75248 5.53587C4.10748 5.6342 4.37164 5.90253 4.46164 6.22837L6.08831 12.1142C6.02537 12.1267 5.96284 12.1411 5.90081 12.1575C4.25331 12.585 3.24664 14.2425 3.69831 15.88C4.14831 17.5092 5.85998 18.4484 7.50081 18.0217C8.93748 17.6492 9.88664 16.3417 9.80664 14.9284L16.8233 13.105C16.9028 13.0844 16.9774 13.0483 17.0429 12.9989C17.1084 12.9494 17.1635 12.8875 17.2051 12.8168C17.2467 12.746 17.2739 12.6677 17.2853 12.5864C17.2966 12.5051 17.2919 12.4224 17.2712 12.3429C17.2506 12.2635 17.2145 12.1889 17.1651 12.1234C17.1156 12.0579 17.0537 12.0028 16.983 11.9612C16.9122 11.9196 16.8339 11.8923 16.7526 11.881C16.6713 11.8696 16.5886 11.8744 16.5091 11.895L9.47748 13.7225C9.26712 13.3205 8.97105 12.9696 8.6102 12.6946C8.24936 12.4196 7.83252 12.2271 7.38914 12.1309L5.66664 5.89503C5.56091 5.51991 5.3598 5.17858 5.0829 4.90431C4.806 4.63003 4.46276 4.43218 4.08664 4.33003L2.66664 3.93753ZM6.21581 13.3667C7.22581 13.105 8.23914 13.6909 8.49914 14.6325C8.75748 15.5659 8.19081 16.5517 7.18748 16.8125C6.17748 17.075 5.16414 16.4884 4.90414 15.5467C4.64581 14.6134 5.21248 13.6275 6.21581 13.3667Z"
                        fill="#FCFCFD"
                      />
                    </svg>
                  </span>
                  <div class="items-center text-left flex flex-col gap-2">
                    <h2 class="font-semibold text-xl">Delivery Vehicles</h2>
                    <p class="text-sm">Minim dolor in amet nulla laboris </p>
                  </div>
                </div>
                <div class="w-full text-left">
                  <h5 class="font-semibold text-5xl">765</h5>
                  <span>+5% vs last week</span>
                </div>
                <div class="flex ">
                  <A href="" class="px-5 py-2 bg-accent border gap-2 flex">
                    <span class="">View Detail</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </A>
                </div>
              </div>
              <div class="w-full">
                <img
                  alt="truck"
                  class="h-full w-auto object-right object-cover"
                  src={truck}
                />
              </div>
            </div>
          </div>
          <div class="col-span-2 w-full">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
}
