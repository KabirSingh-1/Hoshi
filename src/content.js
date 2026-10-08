// All page copy lives here so it can be edited without touching layout.
export const PHONE = '7779091145'
export const WA_TEXT = "Hi Hoshi, I'd like to know more"

export const AGES = ['6–8', '9–11', '12–14', '15–16']

export const AGE_NOTES = {
  '6–8': 'Short live sessions, lots of hands-on play, a parent nearby.',
  '9–11': 'Daily live lessons, first independent projects, AI under supervision.',
  '12–14': 'Deeper subjects, longer projects, planning toward the Class 10 route.',
  '15–16': 'Exam-route focus alongside a portfolio of real work.',
}

// One example path per interest. Panels follow the kite: Learn, Explore, Create, Apply.
export const INTERESTS = [
  {
    id: 'science',
    name: 'Nature & science',
    colors: ['#1F8A84', '#F2A900', '#C2255C', '#1B2A41'],
    panels: [
      'Fractions and averages from real rainfall data',
      'Field notes and bird counts at Indroda Nature Park',
      'A home weather station from a simple kit',
      'Presents the monsoon report to the family',
    ],
  },
  {
    id: 'robotics',
    name: 'Robots & coding',
    colors: ['#1B2A41', '#E0457B', '#F2A900', '#1F8A84'],
    panels: [
      'Logic, angles and speed, taught through motion',
      'Takes apart an old toy to see how motors work',
      'Codes a small line-following robot',
      'Builds a door alarm for grandma’s room',
    ],
  },
  {
    id: 'stories',
    name: 'Stories & languages',
    colors: ['#C2255C', '#1F8A84', '#1B2A41', '#F2A900'],
    panels: [
      'Grammar and reading in English, Hindi or Gujarati',
      'Interviews an elder about Uttarayan in the old city',
      'Writes and illustrates a short storybook',
      'Reads it aloud at a neighbourhood library',
    ],
  },
  {
    id: 'business',
    name: 'Money & making',
    colors: ['#F2A900', '#1B2A41', '#1F8A84', '#E0457B'],
    panels: [
      'Percentages, profit and loss with real prices',
      'Surveys the local market: who buys what, and why',
      'Designs and prices a product to sell',
      'Runs a stall and keeps honest accounts',
    ],
  },
]

export const PILLARS = [
  { word: 'Learn', line: 'Strong maths, science and languages, at their pace.' },
  { word: 'Explore', line: 'Questions first. Investigate, don’t memorise.' },
  { word: 'Create', line: 'Projects, code and models they can explain.' },
  { word: 'Apply', line: 'Real problems from home and the neighbourhood.' },
]

export const TRUTHS = [
  ['Memorised by Friday,', 'forgotten by Monday.'],
  ['Thirty children,', 'one speed.'],
  ['Thinking, building, using AI:', 'rarely on the timetable.'],
]

export const LEGAL = [
  { q: 'Is it legal?', a: 'Yes. Homeschooling isn’t banned in India, and families don’t have to register.', src: 'HSLDA, 2025' },
  { q: 'Will they get a certificate?', a: 'Yes. Class 10 and 12 boards as a private candidate through NIOS, or Cambridge IGCSE.', src: 'NIOS' },
  { q: 'Can they go back to school?', a: 'Families do. Schools admit with a board or transfer certificate plus their own entry test.' },
  { q: 'College, or abroad?', a: 'Universities look at board results and entrance tests. We plan the route with you.' },
]

export const AI_MONTHS = [
  ['Ask good questions', 'Clear prompts, better answers.'],
  ['Catch the mistake', 'Check, cite, correct.'],
  ['Make with AI', 'Their ideas lead. AI credited.'],
  ['Find the pattern', 'Real data, real charts.'],
  ['Build a small tool', 'A tracker or chatbot for home.'],
  ['Present and defend', 'Explain what AI did, and what they did.'],
]

export const PROJECTS = [
  { title: 'Kite flight lab', age: '10', text: 'Builds three kites, logs how high each flies, and tests AI’s theory on the terrace.', tags: ['Physics', 'Data', 'AI'] },
  { title: 'Gujarati picture book', age: '8', text: 'Writes a story about her grandmother’s village and illustrates it by hand.', tags: ['Language', 'Art', 'AI'] },
  { title: 'Shop helper', age: '13', text: 'A stock tracker and a “do we have…?” chatbot for the family kirana store.', tags: ['Maths', 'Coding', 'AI'] },
  { title: 'Water audit', age: '12', text: 'Measures a week of water use, finds the leak, pitches the fix to the society.', tags: ['Science', 'Civics'] },
]

export const WEEK = {
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  rows: [
    { time: 'Morning', cells: ['Maths live', 'Science live', 'Maths live', 'Language live', 'Science live', 'Project day'] },
    { time: 'Late morning', cells: ['Self-paced', 'Self-paced', 'AI lab', 'Self-paced', 'AI lab', 'Project day'] },
    { time: 'Afternoon', cells: ['Reading', 'Make & build', 'Outdoors', 'Make & build', 'Show & tell', 'Free'] },
  ],
  kinds: {
    live: { label: 'Live with a mentor', color: '#1B2A41' },
    self: { label: 'Self-paced', color: '#A9CDE0' },
    make: { label: 'Projects & AI', color: '#F2A900' },
    out: { label: 'Outdoors & reading', color: '#1F8A84' },
  },
}

export const MENTORS = [
  ['Academic mentor', 'Subjects and the certificate route.'],
  ['Technology & AI mentor', 'The AI lab, builds and safe use.'],
  ['Creative mentor', 'Writing, art and presenting.'],
]

export const FAQ = [
  ['Is homeschooling legal in India?', 'Yes, it is not banned. The Right to Education Act does not define education at home, and families are not currently required to register. We explain the details for your child’s age on the call.'],
  ['Which certificate will my child get?', 'Children can sit board exams as private candidates, most often through NIOS (Class 10 and 12) or Cambridge IGCSE. We help you choose the route and plan for it from the start.'],
  ['Can my child return to CBSE or a regular school later?', 'Yes, families do. Schools set their own entry rules, usually an assessment and a certificate or transfer record, so we keep your child’s records and certificate route ready.'],
  ['Who teaches my child?', 'Hoshi mentors teach live sessions and review every project. You will meet the team, and hear about their background, on your counselling call.'],
  ['How do I see progress?', 'You get a short written update every week and a fuller progress report each term, with samples of your child’s work.'],
  ['What about friends and social life?', 'Children learn in small groups, present to each other, and take part in outings and project days. We also help families connect locally.'],
  ['Is the AI part safe?', 'Children use AI with a mentor, on supervised accounts, and never share personal details. They are taught to question AI, not to copy from it.'],
  ['Is it online or at the centre?', 'Tell us what works for your family on the call and we will explain the options at Sector 16, Gandhinagar.'],
  ['What are the fees?', 'Fees depend on your child’s age and plan. We share them clearly on the counselling call, with no obligation to join.'],
]
