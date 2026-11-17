// Content for the Teaching & Mentorship page.
// Anything wrapped in [square brackets] is a placeholder: replace it with your
// own details. It renders in italics so it is easy to spot before you publish.

export const teachingIntro = {
  statement:
    'Teaching is where my research, my tutoring work, and my interest in engineering education meet. As a Graduate Teaching Assistant at Howard University, I facilitated General Chemistry laboratory instruction for undergraduates. As Co-Founder and Educational Program Lead of Beta-Learning, I develop tutoring, mentorship, and enrichment programs for learners at every level. And through faculty preparation training, I am building the pedagogical foundation for a career that integrates research and higher education.',
  highlights: [
    { label: 'Graduate Teaching Assistant', value: 'Howard University, 2024–2025' },
    { label: 'Co-Founder & Program Lead', value: 'Beta-Learning' },
    { label: 'Faculty Preparation', value: 'Howard University, 2026–Present' },
  ],
}

export type ExperienceEntry = {
  id: string
  role: string
  organization: string
  period: string
  summary: string
  details: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'gta',
    role: 'Graduate Teaching Assistant',
    organization: 'Howard University, Washington, DC',
    period: '2024–2025',
    summary:
      'Facilitated undergraduate General Chemistry laboratory instruction, supporting students in developing experimental skills, scientific reasoning, and a practical understanding of chemical principles.',
    details: [
      'Supported General Chemistry laboratory sections of approximately 20–30 undergraduate students.',
      'Guided laboratory experiments, reinforced safety procedures, and explained chemical concepts and calculations.',
      'Evaluated laboratory assignments and reports, providing feedback on experimental analysis and scientific communication.',
      'Encouraged student engagement, critical thinking, and connections between theoretical concepts and laboratory practice.',
    ],
  },
  {
    id: 'beta-learning',
    role: 'Co-Founder & Educational Program Lead',
    organization: 'Beta-Learning',
    period: '[Start Year]–Present',
    summary:
      'Lead the development and coordination of personalized tutoring, academic mentorship, and educational enrichment programs supporting learners across elementary, secondary, and postsecondary levels.',
    details: [
      'Develop and support STEM, mathematics, literacy, digital skills, and college-readiness programs.',
      'Design instructional activities, individualized learning plans, and structured academic mentorship experiences.',
      'Coordinate tutors and facilitate individual and small-group learning opportunities.',
      'Develop student progress-monitoring and reporting systems to inform instructional planning and continuous improvement.',
    ],
  },
]

export type EvidenceItem = {
  area: string
  title: string
  type: string
  description: string
}

// Planned portfolio entries. Add an `href` (PDF, case study, etc.) to an item
// once its material is ready, and update the card to link to it.
export const evidence: EvidenceItem[] = [
  {
    area: 'Laboratory Instruction',
    title: 'Laboratory Instruction & Student Learning',
    type: 'Teaching artifact / instructional reflection',
    description:
      'A selected laboratory resource or instructional example illustrating my approach to explaining scientific concepts, guiding experimental activities, and supporting students’ understanding of laboratory procedures and data interpretation.',
  },
  {
    area: 'Instructional Design',
    title: 'Instructional Design & Learning Activities',
    type: 'Sample educational activity',
    description:
      'Selected instructional materials from academic enrichment programs, including high school mathematics practice activities, persuasive writing assignments, and structured STEM learning plans.',
  },
  {
    area: 'Academic Mentorship',
    title: 'Personalized Learning & Academic Mentorship',
    type: 'Program framework / learning roadmap',
    description:
      'Examples of structured mentorship and academic support programs designed to help students establish learning goals, strengthen academic skills, and develop greater independence.',
  },
  {
    area: 'Progress Monitoring',
    title: 'Student Progress Monitoring & Program Evaluation',
    type: 'Anonymized reporting framework',
    description:
      'A structured session-reporting and student progress-monitoring system developed to document learning activities, track student engagement, identify areas for improvement, and support instructional decisions.',
  },
]

export const reflections = [
  {
    role: 'Graduate Teaching Assistant',
    organization: 'Howard University',
    text: 'My experience as a Graduate Teaching Assistant strengthened my ability to communicate technical concepts, adapt explanations to students’ needs, and encourage independent scientific reasoning. It also reinforced my interest in creating supportive, engaging learning environments.',
  },
  {
    role: 'Co-Founder & Educational Program Lead',
    organization: 'Beta-Learning',
    text: 'My work through Beta-Learning has broadened my understanding of teaching beyond traditional classroom instruction. It has reinforced the importance of personalized learning, consistent feedback, mentorship, and collaboration in supporting students’ academic and personal development.',
  },
]

export type Principle = {
  title: string
  body: string
}

export const philosophy = {
  lead: 'I teach with the belief that students learn best when they feel supported, challenged, and capable of contributing.',
  principles: [
    {
      title: 'Inclusive and engaging learning environments',
      body: 'I aim to build STEM learning spaces where every student feels welcome to ask questions, make mistakes, and try again. In the laboratory, that means clear expectations, approachable guidance, and room for students to learn from one another.',
    },
    {
      title: 'Confidence and technical understanding',
      body: 'Students build confidence when they understand why a method works, not only how to run it. I try to connect procedures to underlying principles so that students can explain their results and carry their understanding into new problems.',
    },
    {
      title: 'Practical problem-solving rooted in real challenges',
      body: 'My research on sustainable processes and separation technologies shapes how I teach. I like to link course concepts to real engineering problems, so that students see how fundamentals support practical solutions.',
    },
    {
      title: 'Mentorship beyond the classroom',
      body: 'Good teaching continues in office hours, tutoring sessions, and conversations about careers. I see mentorship as helping students develop academic skills and a sense of direction.',
    },
  ] satisfies Principle[],
}

export const portfolioMaterials = [
  {
    title: 'Teaching Statement',
    description: 'A formal statement of teaching philosophy and practice.',
  },
  {
    title: 'Student Feedback Summary',
    description: 'A summary of evaluations and feedback from students.',
  },
]
