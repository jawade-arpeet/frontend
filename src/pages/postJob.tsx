import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function PostJob() {
  return (
    <main className="px-6 py-8 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-semibold">Post a Job</h1>
      <form className="grid lg:grid-cols-2 gap-x-4 gap-y-3  mt-4">
        <Label>
          <span>Job Title</span>
          <Input
            placeholder="Ex. Full Stack Developer"
            type="text"
            name="jobTitle"
            className="mt-1.5"
          />
        </Label>
        <Label>
          <span>Company Name</span>
          <Input
            placeholder="Ex. Cred"
            type="text"
            name="companyName"
            className="mt-1.5"
          />
        </Label>
        <Label>
          <span>Minimum Salary</span>
          <Input
            placeholder="Ex. 80000"
            type="text"
            name="minSalary"
            className="mt-1.5"
          />
        </Label>
        <Label>
          <span>Maximum Salary</span>
          <Input
            placeholder="Ex. 120000"
            type="text"
            name="maxSalary"
            className="mt-1.5"
          />
        </Label>
        <Label className="col-span-2">
          <span>Job Description</span>
          <Textarea
            className="mt-1.5 scrollbar-hidden .scrollbar-hidden::-webkit-scrollbar"
            rows={5}
            placeholder="Ex. We are seeking a talented Full Stack Developer to join our dynamic team. The ideal candidate will have a strong background in both front-end and back-end development, with a passion for building scalable and efficient web applications. You will be responsible for designing, developing, and maintaining our software solutions, working closely with our product and design teams to deliver an exceptional user experience.
            "
            name="jobDescription"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </Label>
        <Button className="col-span-2 w-fit mx-auto">Post Job</Button>
      </form>
    </main>
  );
}
