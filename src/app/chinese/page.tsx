import type { Metadata } from "next";
import { SubjectPage } from "@/components/phase3/services/subject-page";
import serviceImage from "../../../reference/wix/media/ee1b029e8bad-11062b_3a9735e70c9f4c4e995cb9803b1e0ded~mv2.jpeg";
import decorativeImage from "../../../reference/wix/media/e47b72c4b419-11062b_2cc11ab6f649437c91e7e88543a4f6d6~mv2.jpg";
import tutorImage from "../../../reference/wix/media/5f2be3a0943e-990592_80e92b2919cf41e591c394ff7cbd1dda~mv2.png";
import world from "../../../reference/wix/media/bdb8e9c4fc4f-990592_8ff5f570d9a94584be058d4a39c55652~mv2.png";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Chinese Tutoring" },
  openGraph: { title: "Lovemind | Chinese Tutoring", images: ["/media/logo.png"] },
};

const tutors = [{ image: tutorImage, imageAlt: "IMG_8025_edited.png", credential: "Doctorate of Education", name: "Dr. Xinming Ren", biography: "Graduated from St. Cloud State University in 2017", subject: "Geography", subjectImage: world }] as const;
const plans = [{ name: "10 Sessions Chinese", price: "400", discount: "Save 20%", sessions: "Chinese Tutoring" }] as const;

export default function ChinesePage() {
  return <SubjectPage title="Chinese Tutoring" level="For every level" tutors={tutors} serviceImage={serviceImage} trialName="Trial - Chinese Tutoring" serviceName="Chinese Tutoring" servicePrice="$49.99" plansTitle="Save with a Plan" plans={plans} decorativeImage={decorativeImage} />;
}
