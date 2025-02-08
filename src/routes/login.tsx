import { action, redirect, useSubmission } from "@solidjs/router";
import { login } from "~/lib/session";

const startLogin = action(async (formData: FormData) => {
  "use server";
  const res = await login(formData);
  if (res.user) {
    return redirect("/");
  }
  console.log(res);
  throw res;
});

const Login = () => {
  const { error, pending } = useSubmission(startLogin);
  console.log(error, pending);
  return (
    <div class="flex flex-col">
      <form
        method="post"
        action={startLogin}
        class="flex flex-col justify-center items-center py-10"
      >
        <h2 class="text-4xl font-bold">Welcome Back!</h2>
        <p class="text-center w-11/12">
          We can assign tasks, set deadlines, and track progress effortlessly.
        </p>
        {error}
        <div>{error && <p class="text-red-500">{error}</p>}</div>
        <div class="flex w-full py-4 flex-col">
          <label>Username</label>
          <input
            type="email"
            name="email"
            class="py-3 border border-gray-300 px-3 text-black bg-white outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0"
          />
        </div>
        <div class="flex w-full py-2 flex-col">
          <label>Password</label>
          <input
            type="password"
            name="password"
            class="py-3 border border-gray-300 px-3 text-black bg-white outline-none ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0"
          />
        </div>
        <div class="py-3 flex w-full">
          <button
            // formaction={startLogin}
            type="submit"
            disabled={pending}
            class="px-4 py-3 bg-accent w-full text-center cursor-pointer disabled:opacity/50"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
