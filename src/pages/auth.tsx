import { useLocation } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
export function AuthLayout() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <main className="lg:flex h-screen">
      <section className="hidden lg:block lg:basis-1/2 bg-zinc-950 text-zinc-50 py-6 px-8">
        <a href="/" className="font-semibold text-2xl">
          scout
        </a>
      </section>
      <section className="lg:basis-1/2 py-6 px-8">
        <div className="flex items-center justify-between lg:justify-end">
          <a href="/" className="lg:hidden font-semibold text-2xl">
            scout
          </a>
          <a
            href={`/${pathname === "/login" ? "signup" : "login"}`}
            className="font-medium text-sm"
          >
            {`${pathname === "/login" ? "Sign Up" : "Login"}`}
          </a>
        </div>
        {pathname === "/login" ? <Login /> : <SignUp />}
      </section>
    </main>
  );
}

export function Login() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center mt-20">Login</h1>
      <p className="text-sm text-gray-600 text-center mt-1">
        Your Career Journey Continues Here.
      </p>
      <form className="flex flex-col gap-y-1.5 mt-2.5 max-w-sm mx-auto">
        <Input placeholder={"Email"} type="email" name="email" />
        <Input placeholder={"Password"} type="password" name="password" />
        <a href="/" className="text-xs font-medium block text-right my-1">
          Forgot Password?
        </a>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </>
  );
}

export function SignUp() {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-4xl font-semibold text-center mt-20 tracking-tight">
        Create an account
      </h1>
      <p className="text-sm text-gray-600 text-center mt-1">
        Discover Your Next Opportunity with Scout.
      </p>
      <form className="mt-3 space-y-1 ">
        <Input placeholder={"First Name"} type="text" name="firstName" />
        <Input placeholder={"Last Name"} type="text" name="lastName" />
        <Input placeholder={"Email"} type="email" name="email" />
        <Input placeholder={"Password"} type="password" name="password" />
        <Button type="submit" className="w-full mt-1.5">
          Sign Up
        </Button>
      </form>
      <p className="text-xs font-light text-center mt-2 w-5/6 mx-auto text-gray-600">
        By clicking continue, you agree to our{" "}
        <span className="underline">Terms of Service</span> and{" "}
        <span className="underline">Privacy Policy.</span>
      </p>
    </div>
  );
}
