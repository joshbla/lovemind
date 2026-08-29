export type ResearchEntry = {
  title: string;
  authors: string;
  paragraphs: readonly string[];
  slug?: string;
};

export type ResearchDetail = ResearchEntry & {
  slug: string;
  metadataTitle: string;
  sourceUrl: string;
};

export const researchEntries: readonly ResearchEntry[] = [
  {
    "title": "Effects of the 5-HT2A agonist psilocybin on mismatch negativity generation and AX-continuous performance task: implications for the neuropharmacology of cognitive deficits in schizophrenia",
    "authors": "Umbricht D, Vollenweider FX, Schmid L, Grubel C, Skrabo A, Huber T, Koller R",
    "paragraphs": [
      "This placebo-controlled study investigated effects of the 5-HT(2A) receptor agonist psilocybin on the same measures in 18 healthy volunteers. Psilocybin administration induced significant performance deficits in the AX-CPT, but failed to reduce MMN generation significantly.These results indirectly support evidence that deficient MMN generation in schizophrenia may be a relatively distinct manifestation of deficient NMDAR functioning.",
      "In contrast, secondary pharmacological effects shared by NMDAR antagonists and the 5-HT(2A) agonist (ie disruption of glutamatergic neurotransmission) may be the mechanism underlying impairments in AX-CPT performance observed during both psilocybin and ketamine administration. Comparable deficits in schizophrenia may result from independent dysfunctions of 5-HT(2A) and NMDAR-related neurotransmission."
    ],
    "slug": "-effects-of-the-5-ht2a-agonist-psilocybin-on-mismatch-negativity-generation-and-ax-continuous-performance-task:-implications-for-the-neuropharmacology-of-cognitive-deficits-in-schizophrenia-"
  },
  {
    "title": "Johns Hopkins Study of Psilocybin in Cancer Patients",
    "authors": "Roland Griffiths PhD, William Richards PhD, Matthew Johnson, Ph.D., Una McCann, M.D.",
    "paragraphs": [
      "Cancer patients often develop chronic, clinically significant symptoms of depression and anxiety. Previous studies suggest that psilocybin may decrease depression and anxiety in cancer patients. The effects of psilocybin were studied in 51 cancer patients with life-threatening diagnoses and symptoms of depression and/or anxiety. This randomized, double-blind, cross-over trial investigated the effects of a very low (placebo-like) dose (1 or 3 mg/70 kg) vs. a high dose (22 or 30 mg/70 kg) of psilocybin administered in counterbalanced sequence with 5 weeks between sessions and a 6-month follow-up. Instructions to participants and staff minimized expectancy effects. Participants, staff, and community observers rated participant moods, attitudes, and behaviors throughout the study. High-dose psilocybin produced large decreases in clinician- and self-rated measures of depressed mood and anxiety, along with increases in quality of life, life meaning, and optimism, and decreases in death anxiety.",
      "At 6-month follow-up, these changes were sustained, with about 80% of participants continuing to show clinically significant decreases in depressed mood and anxiety. Participants attributed improvements in attitudes about life/self, mood, relationships, and spirituality to the high-dose experience, with >80% endorsing moderately or greater increased well-being/life satisfaction. Community observer ratings showed corresponding changes. Mystical-type psilocybin experience on session day mediated the effect of psilocybin dose on therapeutic outcomes."
    ],
    "slug": "-johns-hopkins-study-of-psilocybin-in-cancer-patients-"
  },
  {
    "title": "Pilot study of psilocybin treatment for anxiety in patients with advanced-stage cancer",
    "authors": "Grob CS, Danforth AL, Chopra GS, Hagerty M, McKay CR, Halberstadt AL, Greer GR",
    "paragraphs": [
      "Results: Safe physiological and psychological responses were documented during treatment sessions. There were no clinically significant adverse events with psilocybin. The State-Trait Anxiety Inventory trait anxiety subscale demonstrated a significant reduction in anxiety at 1 and 3 months after treatment. The Beck Depression Inventory revealed an improvement of mood that reached significance at 6 months; the Profile of Mood States identified mood improvement after treatment with psilocybin that approached but did not reach significance.",
      "Conclusions: This study established the feasibility and safety of administering moderate doses of psilocybin to patients with advanced-stage cancer and anxiety. Some of the data revealed a positive trend toward improved mood and anxiety. These results support the need for more research in this long-neglected field."
    ],
    "slug": "-pilot-study-of-psilocybin-treatment-for-anxiety-in-patients-with-advanced-stage-cancer-"
  },
  {
    "title": "Psilocybin with psychological support for treatment-resistant depression: an open-label feasibility study",
    "authors": "Robin L Carhart-Harris, Mark Bolstridge, James Rucker, Camilla M J Day , David Erritzoe, Mendel Kaelen, Michael Bloomfield, James A Rickard, Ben Forbes, Amanda Feilding, David Taylor, Steve Pilling, Valerie H Curran, David J Nutt",
    "paragraphs": [
      "Findings: Psilocybin's acute psychedelic effects typically became detectable 30-60 min after dosing, peaked 2-3 h after dosing, and subsided to negligible levels at least 6 h after dosing. Mean self-rated intensity (on a 0-1 scale) was 0·51 (SD 0·36) for the low-dose session and 0·75 (SD 0·27) for the high-dose session. Psilocybin was well tolerated by all of the patients, and no serious or unexpected adverse events occurred. The adverse reactions we noted were transient anxiety during drug onset (all patients), transient confusion or thought disorder (nine patients), mild and transient nausea (four patients), and transient headache (four patients). Relative to baseline, depressive symptoms were markedly reduced 1 week (mean QIDS difference -11·8, 95% CI -9·15 to -14·35, p=0·002, Hedges' g=3·1) and 3 months (-9·2, 95% CI -5·69 to -12·71, p=0·003, Hedges' g=2) after high-dose treatment. Marked and sustained improvements in anxiety and anhedonia were also noted.",
      "Interpretation: This study provides preliminary support for the safety and efficacy of psilocybin for treatment-resistant depression and motivates further trials, with more rigorous designs, to better examine the therapeutic potential of this approach."
    ],
    "slug": "-psilocybin-with-psychological-support-for-treatment-resistant-depression:-an-open-label-feasibility-study-"
  },
  {
    "title": "Renal excretion profiles of psilocin following oral administration of psilocybin: a controlled study in man",
    "authors": "Hasler F, Bourquin D, Brenneisen R, Vollenweider FX",
    "paragraphs": [
      "In a clinical study eight volunteers received psilocybin (PY) in psychoactive oral doses of 212+/-25 microg/kg body weight. To investigate the elimination kinetics of psilocin (PI), the first metabolite of PY, urine was collected for 24 h and PI concentrations were determined by high-performance liquid chromatography with column switching and electrochemical detection (HPLC-ECD). Sample workup included protection of the unstable PI with ascorbic acid, freeze-drying, and extraction with methanol. Peak PI concentrations up to 870 microg/l were measured in urine samples from the 2-4 h collection interval. The PI excretion rate in this period was 55.5+/-33.8 microg/h. The limit of quantitation (10 microg/L) was usually reached 24 h after drug administration.",
      "Within 24 h, 3.4+/-0.9% of the applied dose of PY was excreted as free PI. Addition of beta-glucuronidase to urine samples and incubation for 5 h at 40 degrees C led to twofold higher PI concentrations, although 18+/-7% of the amount of unconjugated PI was decomposed during incubation. We conclude that in humans PI is partially excreted as PI-O-glucuronide and that enzymatic hydrolysis extends the time of detectability for PI in urine samples."
    ],
    "slug": "-renal-excretion-profiles-of-psilocin-following-oral-administration-of-psilocybin:-a-controlled-study-in-man-"
  },
  {
    "title": "Safety, tolerability, and efficacy of psilocybin in 9 patients with obsessive-compulsive disorder",
    "authors": "Francisco A Moreno, Christopher B Wiegand, E Keolani Taitano, Pedro L Delgado",
    "paragraphs": [
      "Conclusions: In a controlled clinical environment, psilocybin was safely used in subjects with OCD and was associated with acute reductions in core OCD symptoms in several subjects."
    ],
    "slug": "-safety,-tolerability,-and-efficacy-of-psilocybin-in-9-patients-with-obsessive-compulsive-disorder-"
  },
  {
    "title": "Acute psychological and physiological effects of psilocybin in healthy humans: a double-blind, placebo-controlled dose-effect study",
    "authors": "Hasler F , Grimberg U, Benz MA, Huber T, Vollenweider FX",
    "paragraphs": [
      "Results: PY dose dependently increased scores of all 5D-ASC core dimensions. Only one subject reacted with transient anxiety to HD PY. Compared with PL, MD and HD PY led to a 50% reduction of performance in the FAIR test. \"General inactivation\", \"emotional excitability\", and \"dreaminess\" were the only domains of the AMRS showing increased scores following MD and HD PY. The mean arterial blood pressure (MAP) was moderately elevated only 60 min following administration of HD PY. Neither EKG nor body temperature was affected by any dose of PY. TSH, ACTH, and CORT plasma levels were elevated during peak effects of HD PY, whereas PRL plasma levels were increased following MD and HD PY.",
      "Conclusion: PY affects core dimensions of altered states of consciousness and physiological parameters in a dose-dependent manner. Our study provided no cause for concern that PY is hazardous with respect to somatic health."
    ],
    "slug": "-acute-psychological-and-physiological-effects-of-psilocybin-in-healthy-humans:-a-double-blind,-placebo-controlled-dose-effect-study-"
  },
  {
    "title": "Chinese students’ implicit theories of intelligence and school performance: Implications for their approach to schoolwork",
    "authors": "Qian Wang,Florrie Fei-Yin Ng",
    "paragraphs": [
      "Highlights",
      "► Chinese students hold distinct beliefs about the changeability of intelligence vs. performance.",
      "► Chinese students view intelligence (vs. performance) as more unchangeable (i.e., fixed).",
      "► Viewing intelligence as fixed predicts Chinese students’ helpless approach to schoolwork.",
      "► Viewing performance as fixed additively and uniquely predicts Chinese students’ helplessness.",
      "► Chinese students’ focus on performance (vs. intelligence) may explain their academic excellence."
    ]
  },
  {
    "title": "Decreased directed functional connectivity in the psychedelic state",
    "authors": "Lionel Barnett,Suresh D. Muthukumaraswamy,Robin L. Carhart-Harris,Anil K. Seth",
    "paragraphs": [
      "Abstract",
      "Neuroimaging studies of the psychedelic state offer a unique window onto the neural basis of conscious perception and selfhood. Despite well understood pharmacological mechanisms of action, the large-scale changes in neural dynamics induced by psychedelic compounds remain poorly understood. Using source-localised, steady-state MEG recordings, we describe changes in functional connectivity following the controlled administration of LSD, psilocybin and low-dose ketamine, as well as, for comparison, the (non-psychedelic) anticonvulsant drug tiagabine. We compare both undirected and directed measures of functional connectivity between placebo and drug conditions. We observe a general decrease in directed functional connectivity for all three psychedelics, as measured by Granger causality, throughout the brain. These data support the view that the psychedelic state involves a breakdown in patterns of functional organisation or information flow in the brain. In the case of LSD, the decrease in directed functional connectivity is coupled with an increase in undirected functional connectivity, which we measure using correlation and coherence. This surprising opposite movement of directed and undirected measures is of more general interest for functional connectivity analyses, which we interpret using analytical modelling. Overall, our results uncover the neural dynamics of information flow in the psychedelic state, and highlight the importance of comparing multiple measures of functional connectivity when analysing time-resolved neuroimaging data."
    ]
  },
  {
    "title": "Does implicit theory of intelligence cause achievement goals? Evidence from an experimental study",
    "authors": "Felix C. Dinger,Oliver Dickhäuser",
    "paragraphs": [
      "Highlights",
      "• We experimentally manipulated implicit theory about the malleability of intelligence.",
      "• Incremental relative to entity condition determined higher mastery goals.",
      "• Incremental relative to entity condition determined lower performance-avoidance goals.",
      "• Effects on mastery goals were mediated by implicit theory of intelligence.",
      "• Results are discussed with regard to theorizing on antecedents of achievement goals."
    ]
  },
  {
    "title": "How you think about your intelligence determines how you feel in school: The role of theories of intelligence on academic emotions",
    "authors": "Ronnel B. King,Dennis M. McInerney,David A. Watkins",
    "paragraphs": [
      "Highlights",
      "► We examine how theories of intelligence predicted academic emotions.",
      "► Entity theories of intelligence were positively related to negative emotions.",
      "► Entity theories of intelligence were unrelated to positive academic emotions.",
      "► Achievement goals and social factors were differentially related to emotions."
    ]
  },
  {
    "title": "Implicit theories and youth mental health problems: A random-effects meta-analysis",
    "authors": "Jessica L. Schleider,Madelaine R. Abel,John R. Weisz",
    "paragraphs": [
      "Highlights",
      "• We explored relations between implicit theories and youth mental health problems.",
      "• We used a random-effects meta-analysis and clustered data analysis techniques.",
      "• Youths holding entity theories showed more pronounced mental health problems.",
      "• Findings suggest value of parsing implicit-theory-mental health links in youths.",
      "• Implicit theories may be promising targets for treatment of youth psychopathology."
    ]
  },
  {
    "title": "Increased activation of indirect semantic associations under psilocybin.",
    "authors": "Manfred Spitzera, Markus Thimm, Leo Hermle, Petra Holzmann, Karl-Artur Kovar, Hans Heimann, Euphrosyne Gouzouli-Mayfrank, Udo Kischka, Frank Schneider",
    "paragraphs": [
      "In conclusion, we have demonstrated the effect of a hallucinogenic agent, known to affect the 5-HT system, on the spread of activation during lexical access. This may serve as an example of how subjective psychopathology, objective psychological mea- surements, and underlying brain physiology (viz., neuromodula- tion) can be linked within a single conceptual framework."
    ],
    "slug": "increased-activation-of-indirect-semantic-associations-under-psilocybin."
  },
  {
    "title": "Increased amygdala responses to emotional faces after psilocybin for treatment-resistant depression",
    "authors": "Leor Roseman,Lysia Demetriou,Matthew B. Wall ...Robin L. Carhart-Harris",
    "paragraphs": [
      "Highlights",
      "• Psilocybin with psychological support was used successfully to treat depression.",
      "• Amygdala responses to fearful faces were increased one day after psilocybin session.",
      "• Increased amygdala responses predicted positive clinical outcomes.",
      "• Psilocybin assisted therapy treats depression by reviving emotional responsiveness."
    ]
  },
  {
    "title": "Individual Experiences in Four Cancer Patients Following Psilocybin-Assisted Psychotherapy",
    "authors": "Tara C. Malone, Sarah E. Mennenga, Jeffrey Guss, Samantha K. Podrebarac, Lindsey T. Owens, Anthony P. Bossis, Alexander B. Belser, Gabrielle Agin-Liebes, Michael P. Bogenschutz, and Stephen Ross",
    "paragraphs": [
      "Previously published results of this trial demonstrated that, in conjunction with psychotherapy, moderate-dose psilocybin produced rapid, robust, and enduring anxiolytic, and anti-depressant effects. Here, we illustrate unique clinical courses described by four participants using quantitative measures of acute and persisting effects of psilocybin, anxiety, depression, quality of life, and spiritual well-being, as well as qualitative interviews, written narratives, and clinician notes.",
      "Although the content of each psilocybin-assisted experience was unique to each participant, several thematic similarities and differences across the various sessions stood out. These four participants’ personal narratives extended beyond the cancer diagnosis itself, frequently revolving around themes of self-compassion and love, acceptance of death, and memories of past trauma, though the specific details or narrative content differ substantially. The results presented here demonstrate the personalized nature of the subjective experiences elicited through treatment with psilocybin, particularly with respect to the spiritual and/or psychological needs of each patient."
    ],
    "slug": "individual-experiences-in-four-cancer-patients-following-psilocybin-assisted-psychotherapy"
  },
  {
    "title": "Invited review The abuse potential of medical psilocybin according to the 8 factors of the Controlled Substances Act",
    "authors": "Matthew W. Johnson,Roland R. Griffiths,Peter S. Hendricks,Jack E. Henningfield",
    "paragraphs": [
      "Highlights",
      "• Psilocybin mushrooms have been used for millennia for spiritual and medical purposes.",
      "• Animal and human studies indicate low abuse and no physical dependence potential.",
      "• Major national surveys indicate low rates of abuse, treatment-seeking and harm.",
      "• Psilocybin may provide therapeutic benefits supporting its development as a new drug.",
      "• Analysis supports the scheduling of psilocybin no more restrictively than Schedule IV."
    ]
  },
  {
    "title": "LSD modulates effective connectivity and neural adaptation mechanisms in an auditory oddball paradigm",
    "authors": "Christopher Timmermann,Meg J. Spriggs,Mendel Kaelen ...Suresh D. Muthukumaraswamy",
    "paragraphs": [
      "Highlights",
      "• LSD decreased the neural response to novel stimuli while increasing it for familiar stimuli.",
      "• DCM revealed a modulation of backward connectivity following LSD administration.",
      "• Intrinsic A1 connectivity was significantly decreased by LSD compared to placebo.",
      "• These mechanisms appear to reflect an overall modulation of sensitivity to environmental stimuli."
    ]
  },
  {
    "title": "Mystical-type experiences occasioned by psilocybin mediate the attribution of personal meaning and spiritual significance 14 months later",
    "authors": "RR Griffiths, WA Richards, MW Johnson, UD McCann, R Jesse",
    "paragraphs": [
      "During sessions, volunteers were encouraged to close their eyes and direct their attention inward. At the 14-month follow-up, 58% and 67%, respectively, of volunteers rated the psilocybin-occasioned experience as being among the five most personally meaningful and among the five most spiritually significant experiences of their lives; 64% indicated that the experience increased well-being or life satisfaction; 58% met criteria for having had a ‘complete’ mystical experience. Correlation and regression analyses indicated a central role of the mystical experience assessed on the session day in the high ratings of personal meaning and spiritual significance at follow-up. Of the measures of personality, affect, quality of life and spirituality assessed across the study, only a scale measuring mystical experience showed a difference from screening.",
      "When administered under supportive conditions, psilocybin occasioned experiences similar to spontaneously occurring mystical experiences that, at 14-month follow-up, were considered by volunteers to be among the most personally meaningful and spiritually significant of their lives."
    ],
    "slug": "mystical-type-experiences-occasioned-by-psilocybin-mediate-the-attribution-of-personal-meaning-and-spiritual-significance-14-months-later"
  },
  {
    "title": "Natural speech algorithm applied to baseline interview data can predict which patients will respond to psilocybin for treatment-resistant depression",
    "authors": "Facundo Carrillo,Mariano Sigman,Diego Fernández Slezak ...Robin L. Carhart-Harris",
    "paragraphs": [
      "Highlights",
      "• Interview data from 17 patients with treatment-resistant depression was recorded.",
      "• Automated Emotional Analysis, a natural language processing method, was used to quantify emotional content of baseline interviews.",
      "• A machine learning algorithm was used to identify patterns in emotional analysis results.",
      "• Detected patterns predict therapeutic effectiveness of psilocybin for treatment-resistant depression."
    ]
  },
  {
    "title": "Original article Associations between IQ and common mental disorders: The 2000 British National Survey of Psychiatric Morbidity",
    "authors": "S. Rajput,A. Hassiotis,M. Richards ...R. Stewart",
    "paragraphs": [
      "Background",
      "Associations have been described between lower IQ and serious mental illness. Associations between common mental disorders (CMDs) and IQ have received little research. The objective of this study was to investigate the association between verbal IQ and CMD symptoms and diagnoses, and to investigate the role of potential mediating and confounding factors.",
      "Method",
      "Data were analysed from a British national survey with an analysed sample of 8054 people aged 16–74 years. Associations between verbal IQ (NART) and mental symptoms/disorders (CIS-R) were analysed with covariates including education, social class, income, debt, problem drinking, life events, physical health and relationship quality.",
      "Results",
      "CMD was associated with lower IQ. This association was stronger for depressive disorder/symptoms than for generalised anxiety disorder/symptoms. The most important covariates were education, social class, income and relationship quality.",
      "Conclusions",
      "The association between lower IQ and CMD is partly accounted for by adverse social/socioeconomic conditions. Stronger associations for depression than anxiety may indicate an effect of IQ on the way mental distress is communicated."
    ]
  },
  {
    "title": "Priority Communication Psilocybin Biases Facial Recognition, Goal-Directed Behavior, and Mood State Toward Positive Relative to Negative Emotions Through Different Serotonergic Subreceptors",
    "authors": "Michael Kometer,André Schmidt,Rosilla Bachmann ...Franz X. Vollenweider",
    "paragraphs": [
      "Background",
      "Serotonin (5-HT) 1A and 2A receptors have been associated with dysfunctional emotional processing biases in mood disorders. These receptors further predominantly mediate the subjective and behavioral effects of psilocybin and might be important for its recently suggested antidepressive effects. However, the effect of psilocybin on emotional processing biases and the specific contribution of 5-HT2A receptors across different emotional domains is unknown.",
      "Methods",
      "In a randomized, double-blind study, 17 healthy human subjects received on 4 separate days placebo, psilocybin (215 μg/kg), the preferential 5-HT2A antagonist ketanserin (50 mg), or psilocybin plus ketanserin. Mood states were assessed by self-report ratings, and behavioral and event-related potential measurements were used to quantify facial emotional recognition and goal-directed behavior toward emotional cues.",
      "Results",
      "Psilocybin enhanced positive mood and attenuated recognition of negative facial expression. Furthermore, psilocybin increased goal-directed behavior toward positive compared with negative cues, facilitated positive but inhibited negative sequential emotional effects, and valence-dependently attenuated the P300 component. Ketanserin alone had no effects but blocked the psilocybin-induced mood enhancement and decreased recognition of negative facial expression.",
      "Conclusions",
      "This study shows that psilocybin shifts the emotional bias across various psychological domains and that activation of 5-HT2A receptors is central in mood regulation and emotional face recognition in healthy subjects. These findings may not only have implications for the pathophysiology of dysfunctional emotional biases but may also provide a framework to delineate the mechanisms underlying psylocybin's putative antidepressant effects."
    ]
  },
  {
    "title": "Psilocybin can occasion mystical-type experiences  having substantial and sustained personal  meaning and spiritual significance",
    "authors": "R. R. Griffiths & W. A. Richards & U. McCann & R. Jesse",
    "paragraphs": [
      "When administered under supportive conditions, psilocybin occasioned experiences similar to spontaneously occurring mystical experiences. The ability to occasion such experiences prospectively will allow rigorous scientific investigations of their causes and consequences."
    ],
    "slug": "psilocybin-can-occasion-mystical-type-experiences-having-substantial-and-sustained-personal-meaning-and-spiritual-significance"
  },
  {
    "title": "REVIEW Psilocybin – Summary of knowledge and new perspectives",
    "authors": "Filip Tylš,Tomáš Páleníček,Jiří Horáček",
    "paragraphs": [
      "This review summarizes all the past and recent knowledge on psilocybin. It briefly deals with its history, discusses the pharmacokinetics and pharmacodynamics, and compares its action in humans and animals. It attempts to describe the mechanism of psychedelic effects and objectify its action using modern imaging and psychometric methods. Finally, it describes its therapeutic and abuse potential."
    ]
  },
  {
    "title": "Report Increased Global Functional Connectivity Correlates with LSD-Induced Ego Dissolution",
    "authors": "Enzo Tagliazucchi,Leor Roseman,Mendel Kaelen ...Robin Carhart-Harris",
    "paragraphs": [
      "Highlights",
      "• High-level cortical regions and the thalamus show increased connectivity under LSD",
      "• The brain’s modular and rich-club organization is altered under LSD",
      "• Increased global connectivity under LSD correlates with ego dissolution scores"
    ]
  },
  {
    "title": "Reports “It's ok — Not everyone can be good at math”: Instructors with an entity theory comfort (and demotivate) students",
    "authors": "Aneeta Rattan,Catherine Good,Carol S. Dweck",
    "paragraphs": [
      "Highlights",
      "► Fixed theory of math ability leads to diagnosing low ability from one test score.",
      "► Fixed theory of math ability also leads to comforting students for low ability.",
      "► Fixed theory of math ability also leads to practices unlikely to promote engagement.",
      "► Comfort feedback leads students to perceive a fixed theory, express low motivation.",
      "► Implications for how teaching behaviors can lock students into low achievement."
    ]
  },
  {
    "title": "Response of cluster headache to psilocybin and LSD",
    "authors": "R Andrew Sewell, John H Halpern, Harrison G Pope Jr",
    "paragraphs": [
      "The authors interviewed 53 cluster headache patients who had used psilocybin or lysergic acid diethylamide (LSD) to treat their condition. Twenty-two of 26 psilocybin users reported that psilocybin aborted attacks; 25 of 48 psilocybin users and 7 of 8 LSD users reported cluster period termination; 18 of 19 psilocybin users and 4 of 5 LSD users reported remission period extension. Research on the effects of psilocybin and LSD on cluster headache may be warranted."
    ],
    "slug": "response-of-cluster-headache-to-psilocybin-and-lsd-"
  },
  {
    "title": "Self-beliefs among students: Grade level and gender differences in self-esteem, self-efficacy and implicit theories of intelligence",
    "authors": "Åge Diseth,Eivind Meland,Hans Johan Breidablik",
    "paragraphs": [
      "Highlights",
      "• Low self-esteem predicts greater cyberbullying victimisation and perpetration.",
      "• Low empathy predicts higher levels of cyberbullying perpetration.",
      "• Self-esteem or empathy based interventions are recommended to address cyberbullying."
    ]
  }
];

export const researchDetails: readonly ResearchDetail[] = [
  {
    "title": "Mystical-type experiences occasioned by psilocybin mediate the attribution of personal meaning and spiritual significance 14 months later",
    "authors": "RR Griffiths, WA Richards, MW Johnson, UD McCann, R Jesse",
    "paragraphs": [
      "During sessions, volunteers were encouraged to close their eyes and direct their attention inward. At the 14-month follow-up, 58% and 67%, respectively, of volunteers rated the psilocybin-occasioned experience as being among the five most personally meaningful and among the five most spiritually significant experiences of their lives; 64% indicated that the experience increased well-being or life satisfaction; 58% met criteria for having had a ‘complete’ mystical experience. Correlation and regression analyses indicated a central role of the mystical experience assessed on the session day in the high ratings of personal meaning and spiritual significance at follow-up. Of the measures of personality, affect, quality of life and spirituality assessed across the study, only a scale measuring mystical experience showed a difference from screening.",
      "When administered under supportive conditions, psilocybin occasioned experiences similar to spontaneously occurring mystical experiences that, at 14-month follow-up, were considered by volunteers to be among the most personally meaningful and spiritually significant of their lives."
    ],
    "slug": "mystical-type-experiences-occasioned-by-psilocybin-mediate-the-attribution-of-personal-meaning-and-spiritual-significance-14-months-later",
    "metadataTitle": "Mystical-type experiences occasioned\nby psilocybin mediate the attribution\nof personal meaning and spiritual\nsignificance 14 months later",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/18593735/"
  },
  {
    "title": "Effects of the 5-HT2A agonist psilocybin on mismatch negativity generation and AX-continuous performance task: implications for the neuropharmacology of cognitive deficits in schizophrenia",
    "authors": "Umbricht D, Vollenweider FX, Schmid L, Grubel C, Skrabo A, Huber T, Koller R",
    "paragraphs": [
      "This placebo-controlled study investigated effects of the 5-HT(2A) receptor agonist psilocybin on the same measures in 18 healthy volunteers. Psilocybin administration induced significant performance deficits in the AX-CPT, but failed to reduce MMN generation significantly.These results indirectly support evidence that deficient MMN generation in schizophrenia may be a relatively distinct manifestation of deficient NMDAR functioning.",
      "In contrast, secondary pharmacological effects shared by NMDAR antagonists and the 5-HT(2A) agonist (ie disruption of glutamatergic neurotransmission) may be the mechanism underlying impairments in AX-CPT performance observed during both psilocybin and ketamine administration. Comparable deficits in schizophrenia may result from independent dysfunctions of 5-HT(2A) and NMDAR-related neurotransmission."
    ],
    "slug": "-effects-of-the-5-ht2a-agonist-psilocybin-on-mismatch-negativity-generation-and-ax-continuous-performance-task:-implications-for-the-neuropharmacology-of-cognitive-deficits-in-schizophrenia-",
    "metadataTitle": "Effects of the 5-HT2A agonist psilocybin on mismatch negativity generation and AX-continuous performance task: implications for the neuropharmacology of cognitive deficits in schizophrenia",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12496954/"
  },
  {
    "title": "Individual Experiences in Four Cancer Patients Following Psilocybin-Assisted Psychotherapy",
    "authors": "Tara C. Malone, Sarah E. Mennenga, Jeffrey Guss, Samantha K. Podrebarac, Lindsey T. Owens, Anthony P. Bossis, Alexander B. Belser, Gabrielle Agin-Liebes, Michael P. Bogenschutz, and Stephen Ross",
    "paragraphs": [
      "Previously published results of this trial demonstrated that, in conjunction with psychotherapy, moderate-dose psilocybin produced rapid, robust, and enduring anxiolytic, and anti-depressant effects. Here, we illustrate unique clinical courses described by four participants using quantitative measures of acute and persisting effects of psilocybin, anxiety, depression, quality of life, and spiritual well-being, as well as qualitative interviews, written narratives, and clinician notes.",
      "Although the content of each psilocybin-assisted experience was unique to each participant, several thematic similarities and differences across the various sessions stood out. These four participants’ personal narratives extended beyond the cancer diagnosis itself, frequently revolving around themes of self-compassion and love, acceptance of death, and memories of past trauma, though the specific details or narrative content differ substantially. The results presented here demonstrate the personalized nature of the subjective experiences elicited through treatment with psilocybin, particularly with respect to the spiritual and/or psychological needs of each patient."
    ],
    "slug": "individual-experiences-in-four-cancer-patients-following-psilocybin-assisted-psychotherapy",
    "metadataTitle": "Individual Experiences in Four Cancer Patients Following Psilocybin-Assisted Psychotherapy",
    "sourceUrl": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5891594/"
  },
  {
    "title": "Renal excretion profiles of psilocin following oral administration of psilocybin: a controlled study in man",
    "authors": "Hasler F, Bourquin D, Brenneisen R, Vollenweider FX",
    "paragraphs": [
      "In a clinical study eight volunteers received psilocybin (PY) in psychoactive oral doses of 212+/-25 microg/kg body weight. To investigate the elimination kinetics of psilocin (PI), the first metabolite of PY, urine was collected for 24 h and PI concentrations were determined by high-performance liquid chromatography with column switching and electrochemical detection (HPLC-ECD). Sample workup included protection of the unstable PI with ascorbic acid, freeze-drying, and extraction with methanol. Peak PI concentrations up to 870 microg/l were measured in urine samples from the 2-4 h collection interval. The PI excretion rate in this period was 55.5+/-33.8 microg/h. The limit of quantitation (10 microg/L) was usually reached 24 h after drug administration.",
      "Within 24 h, 3.4+/-0.9% of the applied dose of PY was excreted as free PI. Addition of beta-glucuronidase to urine samples and incubation for 5 h at 40 degrees C led to twofold higher PI concentrations, although 18+/-7% of the amount of unconjugated PI was decomposed during incubation. We conclude that in humans PI is partially excreted as PI-O-glucuronide and that enzymatic hydrolysis extends the time of detectability for PI in urine samples."
    ],
    "slug": "-renal-excretion-profiles-of-psilocin-following-oral-administration-of-psilocybin:-a-controlled-study-in-man-",
    "metadataTitle": "Renal excretion profiles of psilocin following oral administration of psilocybin: a controlled study in man",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/14615876/"
  },
  {
    "title": "Pilot study of psilocybin treatment for anxiety in patients with advanced-stage cancer",
    "authors": "Grob CS, Danforth AL, Chopra GS, Hagerty M, McKay CR, Halberstadt AL, Greer GR",
    "paragraphs": [
      "Results: Safe physiological and psychological responses were documented during treatment sessions. There were no clinically significant adverse events with psilocybin. The State-Trait Anxiety Inventory trait anxiety subscale demonstrated a significant reduction in anxiety at 1 and 3 months after treatment. The Beck Depression Inventory revealed an improvement of mood that reached significance at 6 months; the Profile of Mood States identified mood improvement after treatment with psilocybin that approached but did not reach significance.",
      "Conclusions: This study established the feasibility and safety of administering moderate doses of psilocybin to patients with advanced-stage cancer and anxiety. Some of the data revealed a positive trend toward improved mood and anxiety. These results support the need for more research in this long-neglected field."
    ],
    "slug": "-pilot-study-of-psilocybin-treatment-for-anxiety-in-patients-with-advanced-stage-cancer-",
    "metadataTitle": "Pilot study of psilocybin treatment for anxiety in patients with advanced-stage cancer",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20819978/"
  },
  {
    "title": "Johns Hopkins Study of Psilocybin in Cancer Patients",
    "authors": "Roland Griffiths PhD, William Richards PhD, Matthew Johnson, Ph.D., Una McCann, M.D.",
    "paragraphs": [
      "Cancer patients often develop chronic, clinically significant symptoms of depression and anxiety. Previous studies suggest that psilocybin may decrease depression and anxiety in cancer patients. The effects of psilocybin were studied in 51 cancer patients with life-threatening diagnoses and symptoms of depression and/or anxiety. This randomized, double-blind, cross-over trial investigated the effects of a very low (placebo-like) dose (1 or 3 mg/70 kg) vs. a high dose (22 or 30 mg/70 kg) of psilocybin administered in counterbalanced sequence with 5 weeks between sessions and a 6-month follow-up. Instructions to participants and staff minimized expectancy effects. Participants, staff, and community observers rated participant moods, attitudes, and behaviors throughout the study. High-dose psilocybin produced large decreases in clinician- and self-rated measures of depressed mood and anxiety, along with increases in quality of life, life meaning, and optimism, and decreases in death anxiety.",
      "At 6-month follow-up, these changes were sustained, with about 80% of participants continuing to show clinically significant decreases in depressed mood and anxiety. Participants attributed improvements in attitudes about life/self, mood, relationships, and spirituality to the high-dose experience, with >80% endorsing moderately or greater increased well-being/life satisfaction. Community observer ratings showed corresponding changes. Mystical-type psilocybin experience on session day mediated the effect of psilocybin dose on therapeutic outcomes."
    ],
    "slug": "-johns-hopkins-study-of-psilocybin-in-cancer-patients-",
    "metadataTitle": "Johns Hopkins Study of Psilocybin in Cancer Patients",
    "sourceUrl": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5367557/"
  },
  {
    "title": "Safety, tolerability, and efficacy of psilocybin in 9 patients with obsessive-compulsive disorder",
    "authors": "Francisco A Moreno, Christopher B Wiegand, E Keolani Taitano, Pedro L Delgado",
    "paragraphs": [
      "Conclusions: In a controlled clinical environment, psilocybin was safely used in subjects with OCD and was associated with acute reductions in core OCD symptoms in several subjects."
    ],
    "slug": "-safety,-tolerability,-and-efficacy-of-psilocybin-in-9-patients-with-obsessive-compulsive-disorder-",
    "metadataTitle": "Safety, tolerability, and efficacy of psilocybin in 9 patients with obsessive-compulsive disorder",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/17196053/"
  },
  {
    "title": "Acute psychological and physiological effects of psilocybin in healthy humans: a double-blind, placebo-controlled dose-effect study",
    "authors": "Hasler F , Grimberg U, Benz MA, Huber T, Vollenweider FX",
    "paragraphs": [
      "Results: PY dose dependently increased scores of all 5D-ASC core dimensions. Only one subject reacted with transient anxiety to HD PY. Compared with PL, MD and HD PY led to a 50% reduction of performance in the FAIR test. \"General inactivation\", \"emotional excitability\", and \"dreaminess\" were the only domains of the AMRS showing increased scores following MD and HD PY. The mean arterial blood pressure (MAP) was moderately elevated only 60 min following administration of HD PY. Neither EKG nor body temperature was affected by any dose of PY. TSH, ACTH, and CORT plasma levels were elevated during peak effects of HD PY, whereas PRL plasma levels were increased following MD and HD PY.",
      "Conclusion: PY affects core dimensions of altered states of consciousness and physiological parameters in a dose-dependent manner. Our study provided no cause for concern that PY is hazardous with respect to somatic health."
    ],
    "slug": "-acute-psychological-and-physiological-effects-of-psilocybin-in-healthy-humans:-a-double-blind,-placebo-controlled-dose-effect-study-",
    "metadataTitle": "Acute psychological and physiological effects of psilocybin in healthy humans: a double-blind, placebo-controlled dose-effect study",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/14615876/"
  },
  {
    "title": "Psilocybin with psychological support for treatment-resistant depression: an open-label feasibility study",
    "authors": "Robin L Carhart-Harris, Mark Bolstridge, James Rucker, Camilla M J Day , David Erritzoe, Mendel Kaelen, Michael Bloomfield, James A Rickard, Ben Forbes, Amanda Feilding, David Taylor, Steve Pilling, Valerie H Curran, David J Nutt",
    "paragraphs": [
      "Findings: Psilocybin's acute psychedelic effects typically became detectable 30-60 min after dosing, peaked 2-3 h after dosing, and subsided to negligible levels at least 6 h after dosing. Mean self-rated intensity (on a 0-1 scale) was 0·51 (SD 0·36) for the low-dose session and 0·75 (SD 0·27) for the high-dose session. Psilocybin was well tolerated by all of the patients, and no serious or unexpected adverse events occurred. The adverse reactions we noted were transient anxiety during drug onset (all patients), transient confusion or thought disorder (nine patients), mild and transient nausea (four patients), and transient headache (four patients). Relative to baseline, depressive symptoms were markedly reduced 1 week (mean QIDS difference -11·8, 95% CI -9·15 to -14·35, p=0·002, Hedges' g=3·1) and 3 months (-9·2, 95% CI -5·69 to -12·71, p=0·003, Hedges' g=2) after high-dose treatment. Marked and sustained improvements in anxiety and anhedonia were also noted.",
      "Interpretation: This study provides preliminary support for the safety and efficacy of psilocybin for treatment-resistant depression and motivates further trials, with more rigorous designs, to better examine the therapeutic potential of this approach."
    ],
    "slug": "-psilocybin-with-psychological-support-for-treatment-resistant-depression:-an-open-label-feasibility-study-",
    "metadataTitle": "Psilocybin with psychological support for treatment-resistant depression: an open-label feasibility study",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/27210031/"
  },
  {
    "title": "Increased activation of indirect semantic associations under psilocybin.",
    "authors": "Manfred Spitzera, Markus Thimm, Leo Hermle, Petra Holzmann, Karl-Artur Kovar, Hans Heimann, Euphrosyne Gouzouli-Mayfrank, Udo Kischka, Frank Schneider",
    "paragraphs": [
      "In conclusion, we have demonstrated the effect of a hallucinogenic agent, known to affect the 5-HT system, on the spread of activation during lexical access. This may serve as an example of how subjective psychopathology, objective psychological mea- surements, and underlying brain physiology (viz., neuromodula- tion) can be linked within a single conceptual framework."
    ],
    "slug": "increased-activation-of-indirect-semantic-associations-under-psilocybin.",
    "metadataTitle": "Increased activation of indirect semantic associations under psilocybin.",
    "sourceUrl": "https://doi.org/10.1016/0006-3223(95)00418-1"
  },
  {
    "title": "Response of cluster headache to psilocybin and LSD",
    "authors": "R Andrew Sewell, John H Halpern, Harrison G Pope Jr",
    "paragraphs": [
      "The authors interviewed 53 cluster headache patients who had used psilocybin or lysergic acid diethylamide (LSD) to treat their condition. Twenty-two of 26 psilocybin users reported that psilocybin aborted attacks; 25 of 48 psilocybin users and 7 of 8 LSD users reported cluster period termination; 18 of 19 psilocybin users and 4 of 5 LSD users reported remission period extension. Research on the effects of psilocybin and LSD on cluster headache may be warranted."
    ],
    "slug": "response-of-cluster-headache-to-psilocybin-and-lsd-",
    "metadataTitle": "Response of cluster headache to psilocybin and LSD",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/16801660/"
  },
  {
    "title": "Psilocybin can occasion mystical-type experiences  having substantial and sustained personal  meaning and spiritual significance",
    "authors": "R. R. Griffiths & W. A. Richards & U. McCann & R. Jesse",
    "paragraphs": [
      "When administered under supportive conditions, psilocybin occasioned experiences similar to spontaneously occurring mystical experiences. The ability to occasion such experiences prospectively will allow rigorous scientific investigations of their causes and consequences."
    ],
    "slug": "psilocybin-can-occasion-mystical-type-experiences-having-substantial-and-sustained-personal-meaning-and-spiritual-significance",
    "metadataTitle": "Psilocybin can occasion mystical-type experiences\nhaving substantial and sustained personal\nmeaning and spiritual significance",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/16826400/"
  }
];

export const researchSlugs = researchDetails.map((detail) => detail.slug);

export function isResearchSlug(slug: string): boolean {
  return researchSlugs.includes(slug);
}

export function getResearchDetail(slug: string): ResearchDetail | undefined {
  return researchDetails.find((detail) => detail.slug === slug);
}
