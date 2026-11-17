// Content for the Teaching & Mentorship page.
// Anything wrapped in [square brackets] is a placeholder: replace it with your
// own details. It renders in italics so it is easy to spot before you publish.

export const teachingIntro = {
  statement:
    'Teaching is where my research, my tutoring work, and my interest in engineering education meet. As a Graduate Teaching Assistant at Howard University, I support undergraduate laboratory learning. Through Beta-Learning, I help facilitate tutoring and educational programs. And through faculty preparation training, I am building the pedagogical foundation for a career that integrates research and higher education.',
  highlights: [
    { label: 'Graduate Teaching Assistant', value: 'Howard University' },
    { label: 'Tutoring & Programs', value: 'Beta-Learning' },
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
    period: '[Add start year]–Present',
    summary:
      'Supporting undergraduate laboratory instruction and academic mentorship in engineering.',
    details: [
      '[Add course name(s) and level, e.g. the lab or course you support]',
      '[Add what you do: leading lab sections, grading, office hours, preparing materials]',
      '[Add scale: approximate number of students per section or term]',
      '[Add an outcome or example: a student success, a lab you improved, feedback you received]',
    ],
  },
  {
    id: 'beta-learning',
    role: 'Tutor & Educational Program Facilitator',
    organization: 'Beta-Learning',
    period: '[Add start year]–[Present or end year]',
    summary:
      'Facilitating tutoring and educational programs that expand learning opportunities for students.',
    details: [
      '[Add the subjects or age groups you tutor or teach]',
      '[Add the programs you helped design, run, or lead]',
      '[Add scale: number of learners or sessions]',
      '[Add an outcome or example of impact]',
    ],
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
    title: 'Sample Lesson or Lab Materials',
    description: 'Representative lesson plans, lab handouts, or activities.',
  },
  {
    title: 'Student Feedback Summary',
    description: 'A summary of evaluations and feedback from students.',
  },
]
