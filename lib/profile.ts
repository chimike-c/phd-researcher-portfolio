export const profile = {
  name: 'Divinegift J. Chimere',
  credentials: 'BEng, MEng',
  roles: ['Engineer', 'Researcher', 'Educator'],
  title: ['PhD Researcher', 'Chemical & Bioprocess Engineering', 'Educator & Emerging Scholar'],
  affiliation: 'PhD Researcher, Howard University',
  department: 'Biomedical & Chemical Engineering',
  email: 'chimikechimere@gmail.com',
  linkedin: 'https://www.linkedin.com/in/divine-chimere-734118143',
  cvUrl: '/Divinegift-Chimere-CV.pdf' as string | null,
}

export const education = [
  {
    degree: 'PhD, Biomedical & Chemical Engineering',
    school: 'Howard University, Washington, DC',
    years: '2024–Present',
    detail: 'GPA 4.0/4.0 · Graduate Research & Teaching Assistant',
  },
  {
    degree: 'Master of Engineering, Chemical Engineering',
    school: 'University of Ottawa, Canada',
    years: '2020–2022',
    detail: 'GPA 3.87/4.0 · Distinction in all graduate courses',
  },
  {
    degree: 'Bachelor of Engineering, Chemical Engineering',
    school: 'Covenant University, Nigeria',
    years: '2013–2018',
    detail: 'GPA 4.47/5.0 · Diploma in Leadership Development',
  },
]

export const developmentPrograms = [
  {
    title: 'College & University Faculty Preparation Certification Program',
    organization: 'Howard University',
    years: 'Jan 2026–Present',
    detail:
      'Formal training in higher-education pedagogy, curriculum design, assessment, inclusive teaching, and academic career preparation.',
  },
]

// Shown together in the About section: honors, training, and affiliations.
export const recognition = [
  {
    group: 'Honors',
    items: [
      {
        title: 'Ernest E. Just–Percy L. Julian Graduate Research Fellowship',
        detail: 'Howard University',
        years: '2024–Present',
      },
    ],
  },
  {
    group: 'Training & Certifications',
    items: [
      ...developmentPrograms.map((d) => ({
        title: d.title,
        detail: d.organization,
        years: d.years,
      })),
      { title: 'Six Sigma Yellow Belt', detail: 'Certification', years: null as string | null },
      {
        title: 'Data Analyst Nanodegree',
        detail: 'ALX–Udacity',
        years: null as string | null,
      },
    ],
  },
  {
    group: 'Professional Affiliations',
    items: [
      {
        title: 'Tau Beta Pi Engineering Honor Society',
        detail: 'Member',
        years: '2026' as string | null,
      },
      {
        title: 'Nigerian Society of Chemical Engineers',
        detail: 'Member',
        years: null as string | null,
      },
    ],
  },
]

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Research', href: '/research' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Service & Leadership', href: '/service' },
  { label: 'CV', href: '/#cv' },
]
