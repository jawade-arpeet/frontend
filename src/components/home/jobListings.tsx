import { JobCard } from "./jobCard";

export function JobListings() {
  return (
    <section className="col-span-2 lg:col-span-3 mt-2">
      <h1 className="text-xl font-semibold">Jobs</h1>
      <JobCard jobTitle="" employmentType="" location="" companyName="" />
    </section>
  );
}
