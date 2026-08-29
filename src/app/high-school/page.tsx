import type { Metadata } from "next";
import { SubjectPage, academicTutors } from "@/components/phase3/services/subject-page";
import serviceImage from "../../../reference/wix/media/333447ba990a-11062b_4817a6cd5bac4c0693280ee8ebca1b86~mv2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | High School Tutoring" },
  openGraph: { title: "Lovemind | High School Tutoring", images: ["/media/logo.png"] },
};

const plans = [
  { name: "Formal", price: "236.99", discount: "15% cheaper than single sessions", sessions: "Eight Sessions" },
  { name: "Remedial", price: "446.99", discount: "Over 20% discount", sessions: "Sixteen Sessions", badge: "Most Popular" },
  { name: "Immersive", price: "628.99", discount: "Over 25% discount", sessions: "Twenty Four Sessions", badge: "Best Value" },
] as const;

export default function HighSchoolPage() {
  return <SubjectPage title="High School Tutoring" level="For every subject" aside="Plus ACT & SAT" tutors={academicTutors} serviceImage={serviceImage} trialName="Trial - High School Tutoring" serviceName="High School Tutoring" servicePrice="$34.99" plansTitle="Find a Plan" plans={plans} />;
}
