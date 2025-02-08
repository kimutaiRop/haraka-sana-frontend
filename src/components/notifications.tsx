import { createSignal, onCleanup } from "solid-js";

const Notifications = () => {
  const [open, setOpen] = createSignal(false);

  const toggleOpen = () => {
    const isOpen = !open();
    setOpen(isOpen);
    if (isOpen) {
      document.body.classList.add("body-overflow-hidden"); // Add class to hide overflow
    } else {
      document.body.classList.remove("body-overflow-hidden"); // Remove class to restore overflow
    }
  };

  // Cleanup on unmount
  onCleanup(() => {
    document.body.classList.remove("body-overflow-hidden"); // Remove class on unmount
  });

  return (
    <div class="relative ">
      {/* Notification Button */}
      <button
        onClick={toggleOpen}
        title="Notifications"
        class="h-12 aspect-square bg-[#DBFAE6] text-accent flex items-center justify-center rounded-full"
      >
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

      {/* Notification Panel */}
      {open() && (
        <div
          class="fixed inset-0 z-50 bg-secondary/60 flex justify-end items-end p-4 transition-opacity duration-300"
          onClick={toggleOpen} // Close when clicking outside
        >
          <div
            class="absolute flex flex-col right-6 top-20 -mt-2 w-sm bg-background border border-accent h-[90%] shadow-lg transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div class="flex justify-between items-center p-4">
              <h2 class="text-2xl font-semibold">Notifications</h2>
              <button
                title="close"
                onClick={toggleOpen}
                class="text-accent cursor-pointer"
              >
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
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
