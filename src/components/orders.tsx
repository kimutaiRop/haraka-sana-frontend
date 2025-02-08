import { redirect } from "@solidjs/router";

const Orders = () => {
  return (
    <div class="flex flex-col w-full h-full p-2 bg-secondary">
      <div class="flex justify-between items-center py-4">
        <div class="flex space-x-3 items-center ">
          <span class="p-2 bg-accent">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </span>
          <h6 class="font-semibold text-xl">Transaction</h6>
        </div>
        <div class="flex items-center gap-4">
          <form
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              redirect("/?search=" + e.currentTarget.search.value);
            }}
            class="relative"
          >
            <button title="Search" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 absolute left-2 top-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>

            <input
              name="search"
              type="search"
              class="py-2 px-8 border"
              placeholder="Search"
            />
          </form>
          <button class="px-4 py-2 flex items-center gap-2 border">
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>

            <span>Filter</span>
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="grid grid-cols-8 odd:bg-background/70 px-2 py-3">
          <span>Id</span>
          <span>Category</span>
          <span>Dates</span>
          <span>Origin</span>
          <span>Destination</span>
          <span>Weight</span>
          <span>Status</span>
          <span class="justify-end items-end flex">Action</span>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div class="grid grid-cols-8 odd:bg-background/100 px-2 py-3">
            <span>#6458J-2</span>
            <span>Fashions</span>
            <span>09/09/24</span>
            <span>Jakarta, Ind</span>
            <span>Bandung,Ind</span>
            <span>8.9 kg</span>
            <span>Delivery</span>
            <span class="justify-end items-end flex">
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
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
