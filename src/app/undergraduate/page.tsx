import type { Metadata } from "next";
import { SubjectPage, academicTutors } from "@/components/phase3/services/subject-page";
import serviceImage from "../../../reference/wix/media/265110aa15d4-11062b_35b37fde58cf4793b431665e2fd3190f~mv2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Undergraduate Tutoring" },
  openGraph: { title: "Lovemind | Undergraduate Tutoring", images: ["/media/logo.png"] },
};

const plans = [
  { name: "Formal", price: "270.99", discount: "Over 15% discount", sessions: "Eight Sessions" },
  { name: "Remedial", price: "510.99", discount: "Over 20% discount", sessions: "Sixteen Sessions", badge: "Most Popular" },
  { name: "Immersive", price: "718.99", discount: "Over 25% discount", sessions: "Twenty Four Sessions", badge: "Best Value" },
] as const;

export default function UndergraduatePage() {
  return <SubjectPage title="Undergraduate Tutoring" level="For every subject" tutors={academicTutors} serviceImage={serviceImage} trialName="Trial - Undergraduate Tutoring" serviceName="Undergraduate Tutoring" servicePrice="$39.99" plansTitle="Find a Plan" plans={plans} />;
}
