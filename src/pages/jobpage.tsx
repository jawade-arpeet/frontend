import { Header } from "../components/home/header";
import { Button } from "../components/ui/button";

export function JobPage() {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto py-12">
        <h1 className="text-3xl font-bold">Job Title</h1>
        <p className="text-gray-500">company name</p>
        <div>
          <div className="flex items-center gap-x-12 text-sm flex-wrap flex-1">
            <p>Remote</p>
            <p>Full Time</p>
            <p>80,000-1,00,000</p>
          </div>
          <p className="text-sm">Hyderabad, Chennai, Pune, Bangalore</p>
        </div>
        <div className="space-x-2 mt-3">
          <Button>Apply Now</Button>
          <Button>Save</Button>
        </div>
        <h1 className="font-semibold mt-4">Minimum qualifications:</h1>
        <ul className="text-sm ml-10 list-disc mt-3">
          <li>Bachelor's degree or equivalent practical experience.</li>
          <li>
            5 years of experience in data analysis and working with datasets.
          </li>
          <li>
            Experience working on counter abuse strategies for online platforms.
            Experience working with Large Language Models.
          </li>
        </ul>
        <h1 className="font-semibold mt-4">Preferred qualifications:</h1>
        <ul className="text-sm ml-10 list-disc mt-3">
          <li>
            Master's degree in data analysis or equivalent practical experience.
          </li>
          <li>Experience working with large datasets.</li>
        </ul>
        <h1 className="font-semibold mt-4">Job Summary</h1>
        <p className="text-sm ml-10 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h1 className="font-semibold mt-4">Reponsibilites</h1>
        <p className="text-sm ml-10 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
    </>
  );
}
