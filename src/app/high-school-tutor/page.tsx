import type { Metadata } from "next";
import { JobDetail } from "@/components/phase3/jobs/job-detail";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | High School Tutor" },
  description: "Apply to become a Lovemind Tutor.",
  openGraph: {
    title: "Lovemind | High School Tutor",
    description: "Apply to become a Lovemind Tutor.",
  },
};

export default function HighSchoolTutorPage() {
  return (
    <JobDetail
      title="High School Tutor"
      pay="$19.92/hr"
      required={[
        "High School Diploma within 6 years ago",
        "Minimum High School GPA 3.7",
        "Transportation throughout your county (roughly 30 miles max)",
      ]}
      preferred="High School GPA 4.0 or above"
      transcript="High School Transcript"
    />
  );
}
