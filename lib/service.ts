// Content for the Service & Leadership page.
// Anything in [square brackets] is a placeholder: replace it with your own details.
// Student, family, and partner names are deliberately left out. Add them only with permission.

export const serviceIntro = {
  statement:
    'I believe engineering and education should reach beyond the lab and the classroom. Through Beta-Learning, mentoring, and community engagement, I work to widen access to quality learning and to support students at every stage, especially those who face barriers to it.',
  facts: [
    { label: 'Co-Founder', value: 'Beta-Learning, 2022–Present' },
    { label: 'Focus', value: 'Access, inclusion & mentorship' },
    { label: 'Alumni Mentor', value: 'University of Ottawa' },
  ],
}

export const betaLearning = {
  name: 'Beta-Learning',
  role: 'Co-Founder & Educational Program Lead',
  period: '2022–Present',
  summary:
    'Beta-Learning is an education and skill-development initiative that makes personalized, practical, and engaging learning accessible to students, families, and educational institutions. It began as a tutoring and academic support initiative and has grown into a broader learning-development organization.',
  vision:
    'An accessible, innovative learning ecosystem that equips people with the knowledge, skills, and confidence to thrive.',
  audiences: [
    'Elementary and middle-school students',
    'High-school students preparing for higher education',
    'College students seeking academic and professional development',
    'Homeschooling families and microschools',
    'Adult learners building digital and professional skills',
  ],
  responsibilities: [
    'Strategic planning and organizational direction',
    'Designing educational programs, objectives, and delivery models',
    'Overseeing operations, scheduling, and service delivery',
    'Recruiting, onboarding, and training tutors',
    'Building partnerships with families and educational organizations',
    'Developing reporting systems and monitoring program quality',
  ],
}

export const access = [
  {
    id: 'low-income',
    icon: 'heart',
    title: 'Students from Low-Income Families',
    summary:
      'Financial barriers should not decide who gets strong academic support. Beta-Learning works to keep personalized tutoring and enrichment within reach of families who might otherwise go without it.',
    points: [
      'Accessible pricing and flexible packages designed to stay affordable.',
      'Group-based programs and cohorts that serve more learners.',
      'Foundational support in mathematics, literacy, and science.',
      'Clear goals and progress reports, so families can see the value of each program.',
    ],
    placeholders: [
      '[Add: how many students or families you have supported, and how access was provided, such as reduced rates or sponsored sessions]',
    ],
  },
  {
    id: 'learning-differences',
    icon: 'puzzle',
    title: 'Students with Learning Disabilities & Neurodivergent Learners',
    summary:
      'Students learn in different ways. Beta-Learning has provided individualized support for neurodivergent learners and continues to build a more structured offering for them.',
    points: [
      'Individualized learning objectives built around each student’s strengths.',
      'Flexible instructional strategies, pacing, and session structure.',
      'Open communication with parents and caregivers.',
      'Tutors matched to a learner’s needs, with continued investment in tutor training and resources.',
    ],
    placeholders: [
      '[Add: how many learners you have supported and the kinds of support provided, without identifying details]',
    ],
  },
] as const

export const delivery = [
  {
    step: '01',
    title: 'Plan',
    body: 'Every program starts with a student profile, an initial assessment, clear learning objectives, and an agreed schedule.',
  },
  {
    step: '02',
    title: 'Teach',
    body: 'Several tutors can work together around one learner’s goals, such as an academic tutor, a STEM or coding tutor, and a mentor.',
  },
  {
    step: '03',
    title: 'Track',
    body: 'Tutors document each session: topics covered, engagement, areas of improvement, and recommended next steps.',
  },
  {
    step: '04',
    title: 'Communicate',
    body: 'Parents and partners receive onboarding, progress reports, and regular check-ins so they stay involved.',
  },
]

export const tracks = [
  {
    title: 'Academic Support & Tutoring',
    body: 'Personalized instruction in mathematics, English and literacy, and science, including group programs in Algebra I and high-school English.',
  },
  {
    title: 'STEM, Coding & Digital Literacy',
    body: 'Hands-on introductions to coding, computational thinking, and technology for elementary and middle-school students.',
  },
  {
    title: 'College & Career Development',
    body: 'Individual mentoring for college students that connects engineering coursework to technical skills, projects, and career exploration.',
  },
  {
    title: 'Mentorship & Student Development',
    body: 'Goal setting, study routines, accountability check-ins, and college-readiness support.',
  },
  {
    title: 'Early Childhood & Foundational Learning',
    body: 'Short, activity-based sessions that build early literacy, numeracy, and curiosity.',
  },
  {
    title: 'Homeschool & Microschool Programs',
    body: 'Recurring enrichment and subject instruction for homeschool families and microschool partners.',
  },
]

// Proposed or early-stage work. Keep these labeled as "in development".
export const inDevelopment = [
  'A structured program for neurodivergent learners',
  'A coding, robotics, and applied STEM academy',
  'A college and career development academy',
  'A digital learning-community platform for schools and families',
]

export const engagement = [
  {
    title: 'Alumni Mentor',
    organization: 'University of Ottawa, Ten-Thousand-Coffees Program',
    body: 'Mentoring students and early-career professionals through one-to-one conversations about study, careers, and transitions.',
  },
  {
    title: 'Volunteer',
    organization: 'University of Ottawa Professional Development Club',
    body: 'Supporting professional development programming for fellow students.',
  },
  {
    title: 'Mentor in the Classroom',
    organization: 'Howard University, General Chemistry',
    body: 'Supporting a diverse group of undergraduates to promote STEM retention and academic success. See Teaching & Mentorship.',
    href: '/teaching',
  },
]

export const principles = [
  {
    title: 'Personalization',
    body: 'Every learner has different needs, interests, and goals.',
  },
  {
    title: 'Accessibility',
    body: 'Opportunity should reach diverse learners and communities.',
  },
  {
    title: 'Accountability',
    body: 'Preparation, communication, and student outcomes are our responsibility.',
  },
  {
    title: 'Collaboration',
    body: 'Tutors, mentors, and families work together toward shared goals.',
  },
]
