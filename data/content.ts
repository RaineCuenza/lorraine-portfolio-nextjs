export const site = {
  name: 'Lorraine Anne O. Cuenza',
  shortName: 'Lorraine Cuenza',
  title: 'Front-End Developer · Student Leader · Creative',
  intro: 'Creating digital experiences, leading meaningful initiatives, and embracing opportunities that inspire growth.',
  location: 'Philippines',
  email: 'cuenzalorraine@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lorrainecuenza',
  github: 'https://github.com/RaineCuenza',
  instagram: 'https://www.instagram.com/l.cuenza',
};

export const projects = [
  {
    title: 'COMPASS',
    subtitle: 'Peer Support Management Platform',
    description: 'A web-based peer support platform designed to help students connect with trained peer volunteers through a structured, thoughtful, and accessible experience.',
    tags: ['Web Application', 'Front-End', 'UI/UX', 'Database'],
    image: '/assets/images/project-compass.svg',
  },
  {
    title: 'Portfolio Projects',
    subtitle: 'Front-End & UI Work',
    description: 'A growing collection of responsive websites, user interfaces, and design-to-code projects built through academic, personal, and project-based work.',
    tags: ['React', 'Next.js', 'TypeScript', 'CSS'],
    image: '/assets/images/project-portfolio.svg',
  },
];

export const skills = {
  'Front-End': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  'Development': ['PHP', 'Laravel', 'MySQL', 'Git', 'GitHub'],
  'Programming': ['C#', 'Java', 'Python', 'Kotlin', 'C++'],
  'Design & Analytics': ['Figma', 'Power BI'],
};

export const journeyCards = [
  {
    eyebrow: 'Leadership',
    title: 'MDO Journey',
    description: 'Leadership, collaboration, planning, and meaningful student experiences through the Miss DWCC Organization.',
    image: '/assets/images/mdo-logo.jpg',
    link: '/leadership#mdo',
  },
  {
    eyebrow: 'Community',
    title: 'SIT Journey',
    description: 'Technology-focused student leadership, teamwork, and memorable activities with the School of Information and Technology.',
    image: '/assets/images/Sit Event.jpg',
    link: '/leadership#sit',
  },
  {
    eyebrow: 'Personal Growth',
    title: 'Miss DWCC 2026',
    description: 'A journey of confidence, preparation, self-expression, and growth as Miss DWCC 2026 1st Runner-Up.',
    image: '/assets/images/missd-logo.jpg',
    link: '/journey#miss-dwcc',
  },
  {
    eyebrow: 'Culture',
    title: 'Buwan ng Wika',
    description: 'A celebration of Filipino culture, creativity, identity, and memorable stage experiences.',
    image: '/assets/images/Buwan_wika.jpg',
    link: '/journey#buwan',
  },
];

export const gallery = [
  { title: 'MDO Moments', category: 'MDO', image: '/assets/images/mdo_leaders.jpg', caption: 'Replace this with a favorite MDO event photo.' },
  { title: 'SIT Activities', category: 'SIT', image: '/assets/images/gallery-2.svg', caption: 'Replace this with an SIT event or officer photo.' },
  { title: 'Miss DWCC', category: 'Miss DWCC', image: '/assets/images/crowned.jpg', caption: 'Replace this with a Miss DWCC journey photo.' },
  { title: 'Buwan ng Wika', category: 'Buwan ng Wika', image: '/assets/images/buwan_crowned.jpg', caption: 'Replace this with a Buwan ng Wika stage photo.' },
  { title: 'Behind the Scenes', category: 'Memories', image: '/assets/images/gallery-5.svg', caption: 'Replace this with a candid behind-the-scenes moment.' },
  { title: 'Event Memories', category: 'Events', image: '/assets/images/gallery-6.svg', caption: 'Replace this with a meaningful event memory.' },
] as const;

export const galleryCategories = ['All', 'MDO', 'SIT', 'Miss DWCC', 'Buwan ng Wika', 'Events', 'Memories'] as const;
