// Content for the Research page.
// Anything in [square brackets] is a placeholder: replace it with your own details.
// Items marked DRAFT were written from your CV and notes. Check them for accuracy.

export const researchIntro = {
  statement:
    'My research develops sustainable processes and separation technologies for recovering valuable materials from agricultural biomass. By combining experimental work, process development, and data analysis, I explore resource-efficient ways to turn underused feedstocks into food and materials applications.',
  facts: [
    { label: 'Research Focus', value: 'Sustainable biomass fractionation' },
    { label: 'Core Technique', value: 'Tribo-electrostatic separation (TES)' },
    { label: 'Program', value: 'PhD, Biomedical & Chemical Engineering, Howard University' },
  ],
}

// DRAFT: guiding questions, phrased from the aims in your CV.
export const direction = {
  lead: 'Agricultural residues and underutilized crops hold cellulose, hemicellulose, lignin, and protein, but separating them usually takes water, chemicals, and energy. My work asks whether a dry, charge-based approach can do it more sustainably.',
  questions: [
    'Can tribo-electrostatic separation selectively recover cellulose, hemicellulose, lignin, and protein fractions from agricultural biomass?',
    'How do charge transfer mechanisms control separation efficiency and yield?',
    'How can the process support circular-economy and low-energy processing strategies?',
  ],
}

export const themes = [
  {
    icon: 'sprout',
    title: 'Sustainable Biomass Fractionation',
    body: 'Splitting agricultural feedstocks into their main components so that each can be put to use in food or materials applications. The focus is on underutilized feedstocks that are often treated as waste.',
  },
  {
    icon: 'zap',
    title: 'Tribo-Electrostatic Separation (TES)',
    body: 'A dry separation method. Particles of different composition pick up different electric charge when they come into contact, and an electric field then sorts them. It can reduce the need for water and chemical solvents.',
  },
  {
    icon: 'chart',
    title: 'Charge Transfer & Separation Performance',
    body: 'Measuring how charge builds up on biomass particles and relating it to separation efficiency and yield, so that the process can be understood, tuned, and eventually scaled.',
  },
] as const

export const impact = [
  {
    icon: 'recycle',
    title: 'Circular Economy',
    body: 'Adds value to agricultural residues and underutilized feedstocks instead of discarding them.',
  },
  {
    icon: 'leaf',
    title: 'Lower-Impact Processing',
    body: 'Dry, low-energy separation that can lessen reliance on water and chemical solvents.',
  },
  {
    icon: 'target',
    title: 'Selective Recovery',
    body: 'Targeted recovery of cellulose, hemicellulose, lignin, and protein fractions.',
  },
  {
    icon: 'wheat',
    title: 'Food & Materials Applications',
    body: 'Recovered fractions open routes to food ingredients and sustainable materials.',
  },
] as const

// DRAFT: a generic description of the workflow, based on the aims in your CV.
// Edit the steps so that they match your actual experimental procedure.
export const approach = [
  {
    step: '01',
    title: 'Prepare feedstock',
    body: 'Characterize and prepare agricultural biomass so that runs are consistent and comparable.',
  },
  {
    step: '02',
    title: 'Charge & separate',
    body: 'Contact-charge the particles and separate them in an electric field under controlled conditions.',
  },
  {
    step: '03',
    title: 'Analyze fractions',
    body: 'Characterize the recovered fractions for composition, morphology, and particle charge.',
  },
  {
    step: '04',
    title: 'Interpret & model',
    body: 'Analyze separation efficiency, yield, and charge behavior using statistics and process modeling.',
  },
]

// DRAFT: confirm what each instrument is used for in your work.
export const instruments = [
  {
    name: 'HPLC',
    full: 'High-performance liquid chromatography',
    use: 'Quantitative compositional analysis of recovered fractions.',
  },
  {
    name: 'UV-Vis',
    full: 'Ultraviolet–visible spectroscopy',
    use: 'Spectroscopic quantification of components in samples.',
  },
  {
    name: 'SEM',
    full: 'Scanning electron microscopy',
    use: 'Imaging particle morphology and surface features.',
  },
  {
    name: 'Charge Measurement',
    full: 'Particle charge measurement setup',
    use: 'Measuring the electric charge that particles acquire during contact charging.',
  },
  {
    name: 'Lambda DOSER',
    full: 'Laboratory dosing equipment',
    use: 'Part of the experimental setup for controlled experimental runs.',
  },
]

export const computational = [
  'MATLAB',
  'Python',
  'SPSS',
  'Polymath',
  'Statistical analysis',
  'Process modeling',
  'Data visualization',
  'Experimental design',
]

export type Project = {
  id: string
  status: 'Ongoing' | 'Completed' | 'Future direction'
  title: string
  period?: string
  summary: string
  points: string[]
}

export const projects: Project[] = [
  {
    id: 'tes-fractionation',
    status: 'Ongoing',
    title: 'Tribo-Electrostatic Fractionation of Agricultural Biomass',
    period: '2024–Present',
    summary:
      'My PhD research at Howard University investigates TES for the selective recovery of cellulose, hemicellulose, lignin, and protein fractions from agricultural biomass.',
    points: [
      'Analyzing charge transfer mechanisms, separation efficiency, and yield.',
      'Supporting circular-economy and low-energy processing strategies.',
      'Developing experimental protocols and performing statistical analysis.',
      'Presenting findings through scientific writing and data visualization.',
    ],
  },
  // Add completed projects here, for example your master's research at the University of Ottawa.
  // Copy the block above, set status: 'Completed', and fill in the details.
  // DRAFT: future directions, drawn from the aims in your CV. Edit freely.
  {
    id: 'future-charge',
    status: 'Future direction',
    title: 'Linking Charge Behavior to Feedstock Properties',
    summary:
      'Extending the charge measurements to more feedstocks, to understand how biomass composition shapes charging and separation.',
    points: [],
  },
  {
    id: 'future-modeling',
    status: 'Future direction',
    title: 'Process Modeling & Sustainability Assessment',
    summary:
      'Using process modeling to evaluate how TES-based fractionation compares with conventional routes in energy and resource use.',
    points: [],
  },
]

export const publicationsNote =
  'Publications will be listed here as they become available. A full record of my research activity is in my CV.'

export type Publication = {
  title: string
  authors: string
  venue: string
  year: string
  href?: string
}

// Add entries here and they will appear automatically, newest first.
export const publications: Publication[] = []

export const presentations = [
  {
    title: 'Participant, Annual Research Month Symposium',
    venue: 'Howard University',
  },
]
