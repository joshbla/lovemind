import type { Metadata } from "next";
import { JobDetail } from "@/components/phase3/jobs/job-detail";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Undergraduate Tutor" },
  description: "Apply to become a Lovemind Tutor.",
  openGraph: {
    title: "Lovemind | Undergraduate Tutor",
    description: "Apply to become a Lovemind Tutor.",
  },
};

export default function UndergraduateTutorPage() {
  return (
    <JobDetail
      title="Undergraduate Tutor"
      pay="$24.31/hr"
      required={[
        "Associate's degree or GE’s completed within 6 years ago",
        "Minimum General Education GPA 3.7 (average)",
        "Transportation throughout your county (roughly 30 miles max)",
      ]}
      preferred="General Education GPA 4.0 or above"
      transcript="Undergraduate Transcript"
    />
  );
}
