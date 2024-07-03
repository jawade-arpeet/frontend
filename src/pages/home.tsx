import { Banner } from "../components/home/banner";
import { Header } from "../components/home/header";
import { JobListings } from "../components/home/jobListings";
import { LeftSidebar } from "../components/home/left-sidebar";
import { RightSidebar } from "../components/home/right-sidebar";

export function Home() {
  return (
    <main>
      <Header />
      <section className="px-6">
        <Banner />
        <section className="grid lg:grid-cols-5 grid-cols-1 gap-x-4">
          <LeftSidebar />
          <JobListings />
          <RightSidebar />
        </section>
      </section>
    </main>
  );
}
