import React from "react";
import { SiNotion } from "react-icons/si";

interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  jobTitle: string;
  companyName: string;
  location: string;
  employmentType: string;
}

export function JobCard({}: JobCardProps) {
  return (
    <div className="flex items-center border border-gray-400 rounded-md p-4 mt-2">
      <div className="basis-1/6">
        <SiNotion size={32} />
      </div>
      <div>
        <h1 className="text-sm font-medium text-gray-600">Company Name</h1>
        <h2 className="font-semibold">Job Title</h2>
        <div className="flex items-start text-sm text-gray-500 gap-x-2">
          <p>Employement Type</p>
          <p>Location</p>
        </div>
      </div>
    </div>
  );
}
