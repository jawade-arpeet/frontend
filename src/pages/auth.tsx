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
      <form className="mt-2 space-y-1 max-w-sm mx-auto">
        <Input placeholder={"Email"} type="email" name="email" />
        <Input placeholder={"Password"} type="password" name="password" />
        <Button type="submit" className="w-full mt-1.5">
          Login
        </Button>
      </form>
    </>
  );
}

export function SignUp() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center mt-20">Sign Up</h1>
      <form className="mt-3 space-y-1 max-w-sm mx-auto">
        <Input placeholder={"First Name"} type="text" name="firstName" />
        <Input placeholder={"Last Name"} type="text" name="lastName" />
        <Input placeholder={"Email"} type="email" name="email" />
        <Input placeholder={"Password"} type="password" name="password" />
        <Button type="submit" className="w-full mt-1.5">
          Sign Up
        </Button>
      </form>
    </>
  );
}
