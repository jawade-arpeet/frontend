import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function RightSidebar() {
  return (
    <aside className="hidden lg:block lg:col-span-1">
      <div className="border border-gray-400 rounded-md p-4">
        <h1 className="font-semibold text-center">Subscribe</h1>
        <p className="text-xs font-medium text-gray-400 leading-tight">
          Get quick and personalized job alerts by subscribing to our alerts
        </p>
        <form className="space-y-1 mt-2">
          <Input placeholder="Enter your email" type="email" name="email" />
          <Button className="w-full" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </aside>
  );
}
