import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Philosophy" },
  openGraph: { title: "Lovemind | Philosophy" },
};

export default function PhilosophyPage() {
  return (
    <div className="text-white">
      <header className="bg-[#151515] px-6 py-10 text-center md:py-12">
        <h1 className="text-[36px] font-bold md:text-[48px]">Our Philosophy</h1>
        <div className="mx-auto mt-7 h-0.5 w-36 bg-white max-md:w-28" />
      </header>

      <section className="bg-[#0c80b5] px-6 py-7 md:py-8">
        <div className="mx-auto max-w-[790px]">
          <h2 className="text-center text-[27px] font-normal">Present</h2>
          <div className="mx-auto mt-4 h-0.5 w-8 bg-white" />
          <div className="mt-8 space-y-7 text-[17px] leading-[1.18] md:text-[18px]">
            <p>Intelligence is controlled by your physical and mental health. It has been shown that IQ is limited by physical and mental health. We include many such studies on the <Link href="/results-and-studies" className="underline underline-offset-2">Results and Studies</Link> page.</p>
            <p>IQ is not a perfect measure of intelligence. However, IQ was designed to predict academic performance and the two measures correlate impressively well. IQ also has broader use in predicting occupational performance in combination with factors such as EQ (emotional intelligence).</p>
            <p>Most of us struggle to maintain good health in all aspects, let alone perfect health. The strongest indicator of how we act is the friendly people we have interacted with regularly in the past. This is why friendly therapists are seen regularly to promote healthy behaviors.</p>
            <p>Therapists cannot be with you all the time to provide a positive influence and it can be easy to lose focus of what helps. Therapy can also become too abstract for application to real life. Lovemind solves these problems by providing you with a constant positive influence during the real-life situation of learning and performing in school.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#9f4816] px-6 py-4 md:py-5">
        <div className="mx-auto max-w-[790px]">
          <h2 className="text-center text-[27px] font-normal">Future</h2>
          <div className="mx-auto mt-4 h-0.5 w-8 bg-white" />
          <div className="mt-8 space-y-7 text-[15px] leading-[1.17] md:text-[16px]">
            <p>We hope to build an ecosystem, an economy, for the creation of both philosophies and protocols that enhance the treatment and understanding of the human brain. Just as we have constructed the constructive Theories of Modern Synthesis and Quantum Physics [who may or may not be formalizable (e.g. Godel&apos;s Incompleteness Theorem)] we propagate the need for a Theory of Mind. The problem should not be tackled head-on. The unification of present theories in Neurology, Endocrinology, the more scientific progenitors of Psychology, and Mathematics will yield tangible results. Mathematical biology and biological physics are precursors of these more compact theories.</p>
            <p>The logical processes of ontological remodeling and ethnomethodological flips (as coined by David Chapman) are immensely under-utilized: too long confined to niche philosophical academic spheres. Intentionality, a preference for consciousness over unconsciousness, enables the unification of dimensions: reducing uncertainty by diminishing uncertainty. Thus, the joining of the unconscious to the conscious enhances accuracy or intelligence. Greater consciousness is negatively correlated with existential nihilism and other schools of uni-dimensional extremism and positively correlated with meta-rationality. Higher ratios of consciousness enable acceptance of the entire present state of affairs (worldview, human experience) in the most tautological manner. The necessity of repression reveals the necessity of alternative variables that must be modulated without correlation to the ratio of consciousness. Thus strange loops (coined by Douglas Hofstadter) must be considered in modeling all systems/environments. We must eliminate the variables of human physiology that interfere with the continuation of the human mind. To enhance our speed of productivity we make simulatable assumptions. By communal rationality (which we acknowledge to be the most probable model of rationality) applied symbolically to the evolutionary process of meta-philosophy-we create this market economy. The efficacy of all redundant market systems is due to the Theory of Modern Synthesis. We encourage a market economy that includes all prior concepts as unzipped and prior-optimized (to borrow computer science terminology).</p>
            <p>Abiding by these above values (critical thinking implied) we intend to accelerate the speed of scientific revolution, anthropocentrically defined. To consciously and completely intentionally by mode of acceptance of all responsibility in the most tautological manner we enable the creation of these models in an accelerated evolutionary manner even when doing so forces the creation of what others would designate derogatorily as a statistical artifact, when these models may be an emergent level of more holistic and tautological abstraction. Such levels of abstraction are taken by the greater consciousness to enable the encompassing of previously antagonistic forces into a more Taoist model.</p>
            <p>Mission Statement: To enable our individuals to be their own keepers, if not leaders, in a connected world.</p>
            <p>Goal: To keep our standards above those of the times in which they are employed. To recognize that standards like time only move in one direction, up.</p>
            <p>If you are interested in joining Lovemind&apos;s advisory council, submit your resume and a cover letter of your rationale for how your inclusion will enhance our ability to plan for a sustainable future for humanity. We specifically invite sociologists, psychologists, philosophers, transhumanists, computer scientists, statisticians, psychometricians, psychohistorians, logicians, neurologists, physicians, physical scientists, futurists, prodigies, academic outcasts, and William Gibson (for sake of his prescience) to join our council ecosystem designed in the manner of a think tank. Lovemind&apos;s mission is to improve and formalize human intelligence on a mass scale.</p>
            <a href="mailto:contact@lovemind.net?subject=Advisory%20Council" className="inline-block underline underline-offset-2 transition-colors hover:text-black focus:text-black">contact@lovemind.net</a>
          </div>
        </div>
      </section>
    </div>
  );
}
