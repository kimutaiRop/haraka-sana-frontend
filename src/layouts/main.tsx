import { A } from "@solidjs/router";
import { JSX } from "solid-js";
import logo from "~/assets/logo.svg";
const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div class="min-h-screen">
      <header class="w-full py-3 bg-secondary flex  justify-between items-center px-4">
        <div class="px-3">
          <img src={logo} class="h-12" />
        </div>
        <div class="flex space-x-12  px-10  items-center text-[#FCFCFD]/50">
          <A href="/" class="space-x-2 flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              class="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.21 6.66065e-05H6.75C4.9606 0.00271169 3.24525 0.71472 1.97995 1.98002C0.714653 3.24532 0.00264509 4.96067 0 6.75007V13.2501C0.00264509 15.0395 0.714653 16.7548 1.97995 18.0201C3.24525 19.2854 4.9606 19.9974 6.75 20.0001H13.25C15.0394 19.9974 16.7548 19.2854 18.0201 18.0201C19.2853 16.7548 19.9974 15.0395 20 13.2501V6.75007C19.9987 5.86064 19.8219 4.98022 19.4797 4.15925C19.1375 3.33829 18.6367 2.59292 18.0059 1.96586C17.3751 1.3388 16.6268 0.842383 15.8038 0.505054C14.9809 0.167726 14.0994 -0.00388151 13.21 6.66065e-05ZM6.43 14.2301C6.43 14.4422 6.34571 14.6457 6.19569 14.7958C6.04566 14.9458 5.84217 15.0301 5.63 15.0301C5.41783 15.0301 5.21434 14.9458 5.06431 14.7958C4.91429 14.6457 4.83 14.4422 4.83 14.2301V9.13007C4.83 8.91789 4.91429 8.71441 5.06431 8.56438C5.21434 8.41435 5.41783 8.33007 5.63 8.33007C5.84217 8.33007 6.04566 8.41435 6.19569 8.56438C6.34571 8.71441 6.43 8.91789 6.43 9.13007V14.2301ZM10.88 14.2301C10.88 14.3351 10.8593 14.4392 10.8191 14.5362C10.7789 14.6333 10.72 14.7215 10.6457 14.7958C10.5714 14.87 10.4832 14.929 10.3861 14.9692C10.2891 15.0094 10.1851 15.0301 10.08 15.0301C9.97494 15.0301 9.87091 15.0094 9.77385 14.9692C9.67679 14.929 9.5886 14.87 9.51431 14.7958C9.44003 14.7215 9.3811 14.6333 9.3409 14.5362C9.30069 14.4392 9.28 14.3351 9.28 14.2301V5.78007C9.28 5.56789 9.36429 5.36441 9.51431 5.21438C9.66434 5.06435 9.86783 4.98007 10.08 4.98007C10.2922 4.98007 10.4957 5.06435 10.6457 5.21438C10.7957 5.36441 10.88 5.56789 10.88 5.78007V14.2301ZM15.09 14.2301C15.09 14.4422 15.0057 14.6457 14.8557 14.7958C14.7057 14.9458 14.5022 15.0301 14.29 15.0301C14.0778 15.0301 13.8743 14.9458 13.7243 14.7958C13.5743 14.6457 13.49 14.4422 13.49 14.2301V7.82007C13.49 7.60789 13.5743 7.40441 13.7243 7.25438C13.8743 7.10435 14.0778 7.02007 14.29 7.02007C14.5022 7.02007 14.7057 7.10435 14.8557 7.25438C15.0057 7.40441 15.09 7.60789 15.09 7.82007V14.2301Z"
                fill="#FCFCFD"
              />
            </svg>

            <span>Overview</span>
          </A>
          <A href="/" class="space-x-2 flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              class="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.21 6.66065e-05H6.75C4.9606 0.00271169 3.24525 0.71472 1.97995 1.98002C0.714653 3.24532 0.00264509 4.96067 0 6.75007V13.2501C0.00264509 15.0395 0.714653 16.7548 1.97995 18.0201C3.24525 19.2854 4.9606 19.9974 6.75 20.0001H13.25C15.0394 19.9974 16.7548 19.2854 18.0201 18.0201C19.2853 16.7548 19.9974 15.0395 20 13.2501V6.75007C19.9987 5.86064 19.8219 4.98022 19.4797 4.15925C19.1375 3.33829 18.6367 2.59292 18.0059 1.96586C17.3751 1.3388 16.6268 0.842383 15.8038 0.505054C14.9809 0.167726 14.0994 -0.00388151 13.21 6.66065e-05ZM6.43 14.2301C6.43 14.4422 6.34571 14.6457 6.19569 14.7958C6.04566 14.9458 5.84217 15.0301 5.63 15.0301C5.41783 15.0301 5.21434 14.9458 5.06431 14.7958C4.91429 14.6457 4.83 14.4422 4.83 14.2301V9.13007C4.83 8.91789 4.91429 8.71441 5.06431 8.56438C5.21434 8.41435 5.41783 8.33007 5.63 8.33007C5.84217 8.33007 6.04566 8.41435 6.19569 8.56438C6.34571 8.71441 6.43 8.91789 6.43 9.13007V14.2301ZM10.88 14.2301C10.88 14.3351 10.8593 14.4392 10.8191 14.5362C10.7789 14.6333 10.72 14.7215 10.6457 14.7958C10.5714 14.87 10.4832 14.929 10.3861 14.9692C10.2891 15.0094 10.1851 15.0301 10.08 15.0301C9.97494 15.0301 9.87091 15.0094 9.77385 14.9692C9.67679 14.929 9.5886 14.87 9.51431 14.7958C9.44003 14.7215 9.3811 14.6333 9.3409 14.5362C9.30069 14.4392 9.28 14.3351 9.28 14.2301V5.78007C9.28 5.56789 9.36429 5.36441 9.51431 5.21438C9.66434 5.06435 9.86783 4.98007 10.08 4.98007C10.2922 4.98007 10.4957 5.06435 10.6457 5.21438C10.7957 5.36441 10.88 5.56789 10.88 5.78007V14.2301ZM15.09 14.2301C15.09 14.4422 15.0057 14.6457 14.8557 14.7958C14.7057 14.9458 14.5022 15.0301 14.29 15.0301C14.0778 15.0301 13.8743 14.9458 13.7243 14.7958C13.5743 14.6457 13.49 14.4422 13.49 14.2301V7.82007C13.49 7.60789 13.5743 7.40441 13.7243 7.25438C13.8743 7.10435 14.0778 7.02007 14.29 7.02007C14.5022 7.02007 14.7057 7.10435 14.8557 7.25438C15.0057 7.40441 15.09 7.60789 15.09 7.82007V14.2301Z"
                fill="#FCFCFD"
              />
            </svg>

            <span>Analytic </span>
          </A>
          <A href="/" class="space-x-2 flex items-center">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              class="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 0C5.23481 5.66374e-05 4.98049 0.105451 4.793 0.293L0.793 4.293C0.61631 4.46908 0.511807 4.70483 0.5 4.954M0.5 5.008V15C0.5 15.7956 0.816071 16.5587 1.37868 17.1213C1.94129 17.6839 2.70435 18 3.5 18H15.5C16.2956 18 17.0587 17.6839 17.6213 17.1213C18.1839 16.5587 18.5 15.7956 18.5 15V5.008L18.499 4.954C18.4875 4.70497 18.3833 4.46923 18.207 4.293L14.207 0.293C14.0195 0.105451 13.7652 5.66374e-05 13.5 0H5.5M15.086 4L13.086 2H5.914L3.914 4H15.086ZM4.5 9C4.5 8.73478 4.60536 8.48043 4.79289 8.29289C4.98043 8.10536 5.23478 8 5.5 8H9.5C9.76522 8 10.0196 8.10536 10.2071 8.29289C10.3946 8.48043 10.5 8.73478 10.5 9C10.5 9.26522 10.3946 9.51957 10.2071 9.70711C10.0196 9.89464 9.76522 10 9.5 10H5.5C5.23478 10 4.98043 9.89464 4.79289 9.70711C4.60536 9.51957 4.5 9.26522 4.5 9Z"
                fill="#FCFCFD"
              />
            </svg>

            <span>Courier </span>
          </A>
          <A href="/" class="space-x-2 flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              class="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12Z"
                fill="#FCFCFD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 0C9.26522 0 9.51957 0.105357 9.70711 0.292893C9.89464 0.48043 10 0.734784 10 1V2.07C11.496 2.28623 12.8818 2.98059 13.9506 4.04939C15.0194 5.11818 15.7138 6.50405 15.93 8H17C17.2652 8 17.5196 8.10536 17.7071 8.29289C17.8946 8.48043 18 8.73478 18 9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10H15.93C15.7138 11.496 15.0194 12.8818 13.9506 13.9506C12.8818 15.0194 11.496 15.7138 10 15.93V17C10 17.2652 9.89464 17.5196 9.70711 17.7071C9.51957 17.8946 9.26522 18 9 18C8.73478 18 8.48043 17.8946 8.29289 17.7071C8.10536 17.5196 8 17.2652 8 17V15.93C6.50405 15.7138 5.11818 15.0194 4.04939 13.9506C2.98059 12.8818 2.28623 11.496 2.07 10H1C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H2.07C2.28638 6.50411 2.9808 5.11833 4.04956 4.04956C5.11833 2.9808 6.50411 2.28638 8 2.07V1C8 0.734784 8.10536 0.48043 8.29289 0.292893C8.48043 0.105357 8.73478 0 9 0ZM4 9C4 7.67392 4.52678 6.40215 5.46447 5.46447C6.40215 4.52678 7.67392 4 9 4C10.3261 4 11.5979 4.52678 12.5355 5.46447C13.4732 6.40215 14 7.67392 14 9C14 10.3261 13.4732 11.5979 12.5355 12.5355C11.5979 13.4732 10.3261 14 9 14C7.67392 14 6.40215 13.4732 5.46447 12.5355C4.52678 11.5979 4 10.3261 4 9Z"
                fill="#FCFCFD"
              />
            </svg>

            <span>Tracking</span>
          </A>
          <A href="/" class="space-x-2 flex items-center">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              class="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18V4L10 0L20 4V18H14V10H6V18H0ZM7 18V16H9V18H7ZM9 15V13H11V15H9ZM11 18V16H13V18H11Z"
                fill="#FCFCFD"
              />
            </svg>

            <span>Inventory</span>
          </A>
          <A href="/" class="space-x-2 flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              class="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.21 6.66065e-05H6.75C4.9606 0.00271169 3.24525 0.71472 1.97995 1.98002C0.714653 3.24532 0.00264509 4.96067 0 6.75007V13.2501C0.00264509 15.0395 0.714653 16.7548 1.97995 18.0201C3.24525 19.2854 4.9606 19.9974 6.75 20.0001H13.25C15.0394 19.9974 16.7548 19.2854 18.0201 18.0201C19.2853 16.7548 19.9974 15.0395 20 13.2501V6.75007C19.9987 5.86064 19.8219 4.98022 19.4797 4.15925C19.1375 3.33829 18.6367 2.59292 18.0059 1.96586C17.3751 1.3388 16.6268 0.842383 15.8038 0.505054C14.9809 0.167726 14.0994 -0.00388151 13.21 6.66065e-05ZM6.43 14.2301C6.43 14.4422 6.34571 14.6457 6.19569 14.7958C6.04566 14.9458 5.84217 15.0301 5.63 15.0301C5.41783 15.0301 5.21434 14.9458 5.06431 14.7958C4.91429 14.6457 4.83 14.4422 4.83 14.2301V9.13007C4.83 8.91789 4.91429 8.71441 5.06431 8.56438C5.21434 8.41435 5.41783 8.33007 5.63 8.33007C5.84217 8.33007 6.04566 8.41435 6.19569 8.56438C6.34571 8.71441 6.43 8.91789 6.43 9.13007V14.2301ZM10.88 14.2301C10.88 14.3351 10.8593 14.4392 10.8191 14.5362C10.7789 14.6333 10.72 14.7215 10.6457 14.7958C10.5714 14.87 10.4832 14.929 10.3861 14.9692C10.2891 15.0094 10.1851 15.0301 10.08 15.0301C9.97494 15.0301 9.87091 15.0094 9.77385 14.9692C9.67679 14.929 9.5886 14.87 9.51431 14.7958C9.44003 14.7215 9.3811 14.6333 9.3409 14.5362C9.30069 14.4392 9.28 14.3351 9.28 14.2301V5.78007C9.28 5.56789 9.36429 5.36441 9.51431 5.21438C9.66434 5.06435 9.86783 4.98007 10.08 4.98007C10.2922 4.98007 10.4957 5.06435 10.6457 5.21438C10.7957 5.36441 10.88 5.56789 10.88 5.78007V14.2301ZM15.09 14.2301C15.09 14.4422 15.0057 14.6457 14.8557 14.7958C14.7057 14.9458 14.5022 15.0301 14.29 15.0301C14.0778 15.0301 13.8743 14.9458 13.7243 14.7958C13.5743 14.6457 13.49 14.4422 13.49 14.2301V7.82007C13.49 7.60789 13.5743 7.40441 13.7243 7.25438C13.8743 7.10435 14.0778 7.02007 14.29 7.02007C14.5022 7.02007 14.7057 7.10435 14.8557 7.25438C15.0057 7.40441 15.09 7.60789 15.09 7.82007V14.2301Z"
                fill="#FCFCFD"
              />
            </svg>

            <span>Inventory</span>
          </A>
          <A href="/" class="space-x-2 flex items-center">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              class="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 0C14.0304 0 14.5391 0.210714 14.9142 0.585786C15.2893 0.960859 15.5 1.46957 15.5 2V3H17.02C17.3198 3.00004 17.6157 3.06746 17.8859 3.19728C18.1561 3.3271 18.3936 3.51599 18.581 3.75L20.061 5.601C20.3451 5.95569 20.4999 6.39656 20.5 6.851V11C20.5 11.5304 20.2893 12.0391 19.9142 12.4142C19.5391 12.7893 19.0304 13 18.5 13H17.5C17.5 13.7956 17.1839 14.5587 16.6213 15.1213C16.0587 15.6839 15.2956 16 14.5 16C13.7044 16 12.9413 15.6839 12.3787 15.1213C11.8161 14.5587 11.5 13.7956 11.5 13H8.5C8.5 13.394 8.4224 13.7841 8.27164 14.1481C8.12087 14.512 7.8999 14.8427 7.62132 15.1213C7.34274 15.3999 7.01203 15.6209 6.64805 15.7716C6.28407 15.9224 5.89397 16 5.5 16C5.10603 16 4.71593 15.9224 4.35195 15.7716C3.98797 15.6209 3.65726 15.3999 3.37868 15.1213C3.1001 14.8427 2.87913 14.512 2.72836 14.1481C2.5776 13.7841 2.5 13.394 2.5 13C1.96957 13 1.46086 12.7893 1.08579 12.4142C0.710714 12.0391 0.5 11.5304 0.5 11V2C0.5 1.46957 0.710714 0.960859 1.08579 0.585786C1.46086 0.210714 1.96957 0 2.5 0H13.5ZM5.5 12C5.23478 12 4.98043 12.1054 4.79289 12.2929C4.60536 12.4804 4.5 12.7348 4.5 13C4.5 13.2652 4.60536 13.5196 4.79289 13.7071C4.98043 13.8946 5.23478 14 5.5 14C5.76522 14 6.01957 13.8946 6.20711 13.7071C6.39464 13.5196 6.5 13.2652 6.5 13C6.5 12.7348 6.39464 12.4804 6.20711 12.2929C6.01957 12.1054 5.76522 12 5.5 12ZM14.5 12C14.2348 12 13.9804 12.1054 13.7929 12.2929C13.6054 12.4804 13.5 12.7348 13.5 13C13.5 13.2652 13.6054 13.5196 13.7929 13.7071C13.9804 13.8946 14.2348 14 14.5 14C14.7652 14 15.0196 13.8946 15.2071 13.7071C15.3946 13.5196 15.5 13.2652 15.5 13C15.5 12.7348 15.3946 12.4804 15.2071 12.2929C15.0196 12.1054 14.7652 12 14.5 12ZM17.02 5H15.5V9H18.5V6.85L17.02 5Z"
                fill="#FCFCFD"
              />
            </svg>

            <span>Truck</span>
          </A>
        </div>
        <div class="flex space-x-5 px-5 items-center">
          <button class="h-12 aspect-square bg-[#DBFAE6] text-accent flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>
          <div class="flex items-center space-x-3">
            <div class="bg-background rounded-full w-12 h-12"></div>
            <div class="flex flex-col space-x-2">
              <span class="font-semibold">John Doe</span>
              <span class="text-xs">Admin</span>
            </div>
          </div>
        </div>
      </header>
      <div class="max-w-(--breakpoint-2xl) mx-auto w-full py-3">{children}</div>
    </div>
  );
};

export default MainLayout;
