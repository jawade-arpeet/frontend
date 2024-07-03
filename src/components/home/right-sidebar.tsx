import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function RightSidebar() {
  return (
    <aside className="hidden lg:block lg:col-span-1">
      <div>
        <h1>Subsribe</h1>
        <p>
          Get quick and personalized job alerts by subscribing to our alerts
        </p>
        <form>
          <Input placeholder="Enter your email" type="email" name="email" />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </aside>
  );
}
