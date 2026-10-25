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
    detail: 'GPA 4.0/4.0 · Ernest E. Just–Percy L. Julian Graduate Research Fellow',
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

export const honors = [
  {
    kind: 'honor' as const,
    title: 'Ernest E. Just–Percy L. Julian Graduate Research Fellowship',
    organization: 'Howard University',
    years: '2024–Present',
  },
  {
    kind: 'affiliation' as const,
    title: 'Tau Beta Pi Engineering Honor Society',
    organization: 'Member',
    years: '2026',
  },
  {
    kind: 'affiliation' as const,
    title: 'Nigerian Society of Chemical Engineers',
    organization: 'Member',
    years: null,
  },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Service & Leadership', href: '#service' },
  { label: 'Development & Honors', href: '#development' },
  { label: 'CV', href: '#cv' },
]
