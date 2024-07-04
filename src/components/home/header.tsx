import { IoMdMenu } from "react-icons/io";

export function Header() {
  return (
    <header className="px-10 py-6 border-b">
      <nav className="flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold">
          scout
        </a>
        <IoMdMenu size={32} />
      </nav>
    </header>
  );
}
