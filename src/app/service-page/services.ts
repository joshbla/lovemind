import type { StaticImageData } from "next/image";
import chineseTutoringImage from "../../../reference/wix/media/ee1b029e8bad-11062b_3a9735e70c9f4c4e995cb9803b1e0ded~mv2.jpeg";
import highSchoolTutoringImage from "../../../reference/wix/media/333447ba990a-11062b_4817a6cd5bac4c0693280ee8ebca1b86~mv2.jpg";
import undergraduateTutoringImage from "../../../reference/wix/media/265110aa15d4-11062b_35b37fde58cf4793b431665e2fd3190f~mv2.jpg";

const chineseDescription = [
  "Our Chinese language tutoring service is designed to provide students with a high-quality and personalized learning experience. Our tutor is a native Chinese speaker with a doctorate in education, ensuring that they have both a deep understanding of the language and the skills and knowledge necessary to effectively teach it.",
  "During each tutoring session, our tutor will work with students to identify their specific learning needs and goals, and will tailor the lesson plan to address these objectives. They will use a variety of teaching techniques, including interactive exercises, authentic materials, and real-life scenarios, to help students develop their listening, speaking, reading, and writing skills.",
  "In addition to language skills, our tutor will also focus on cultural understanding and communication strategies, helping students to become more confident and effective communicators in a variety of settings.",
  "To ensure that students are making progress, our tutor will provide regular feedback and assessments, and will work with students to develop a customized study plan to help them stay on track.",
  "Overall, our Chinese language tutoring service is designed to provide students with the skills and confidence they need to succeed in their studies and in their future endeavors.",
] as const;

const chineseMetadataDescription = chineseDescription.join("\n\n");

type Service = {
  title: string;
  metadataTitle: string;
  duration: "1 hr";
  price: string;
  venue: string;
  image: StaticImageData;
  description: readonly string[];
  metadataDescription?: string;
};

export const services = {
  "chinese-tutoring": {
    title: "Chinese Tutoring",
    metadataTitle: "Chinese Tutoring | Lovemind",
    duration: "1 hr",
    price: "$49.99",
    venue: "Customer's Place",
    image: chineseTutoringImage,
    description: chineseDescription,
    metadataDescription: chineseMetadataDescription,
  },
  "high-school-tutoring": {
    title: "High School Tutoring",
    metadataTitle: "High School Tutoring | Lovemind",
    duration: "1 hr",
    price: "$34.99",
    venue: "Marriott Library, University of Utah",
    image: highSchoolTutoringImage,
    description: [],
  },
  "trial-chinese-tutoring": {
    title: "Trial - Chinese Tutoring",
    metadataTitle: "Trial - Chinese Tutoring | Lovemind",
    duration: "1 hr",
    price: "Free",
    venue: "Customer's Place",
    image: chineseTutoringImage,
    description: chineseDescription,
    metadataDescription: chineseMetadataDescription,
  },
  "trial-high-school-tutoring": {
    title: "Trial - High School Tutoring",
    metadataTitle: "Trial - High School Tutoring | Lovemind",
    duration: "1 hr",
    price: "Free",
    venue: "Marriott Library, University of Utah",
    image: highSchoolTutoringImage,
    description: [],
  },
  "trial-undergraduate-tutoring": {
    title: "Trial - Undergraduate Tutoring",
    metadataTitle: "Trial - Undergraduate Tutoring | Lovemind",
    duration: "1 hr",
    price: "Free",
    venue: "Marriott Library, University of Utah",
    image: undergraduateTutoringImage,
    description: [],
  },
  "undergraduate-tutoring": {
    title: "Undergraduate Tutoring",
    metadataTitle: "Undergraduate Tutoring | Lovemind",
    duration: "1 hr",
    price: "$39.99",
    venue: "Marriott Library, University of Utah",
    image: undergraduateTutoringImage,
    description: [],
  },
} as const satisfies Record<string, Service>;

export type ServiceSlug = keyof typeof services;

export const serviceSlugs = Object.keys(services) as ServiceSlug[];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return Object.hasOwn(services, slug);
}
