export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export type ProjectItem = {
  name: string;
  summary: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const portfolioData = {
  name: "Zubair Khan",
  role: "Full Stack Software Engineer",
  profileImage: "/images/profile.jpg",
  email: "zubairkhanicp@gmail.com",
  phone: "03045422601",
  location: "Peshawar, Pakistan",
  links: {
    github: "https://github.com/zubair-khan-Eng",
    linkedIn: "https://www.linkedin.com/in/zubair-khan-1a384b2b4/"
  },
  heroTagline:
    "I build performant, scalable web experiences with clean architecture and product-focused engineering.",
  about:
    "Full Stack Software Engineer focused on building reliable web applications with polished UX, maintainable code, and measurable business impact.",
  resumePdfPath: "/resume/zubair-khan-resume.pdf",
  summary:
    "Resume summary will be finalized from your latest resume source. This placeholder will be replaced without changing factual details.",
  skillGroups: [
    { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { title: "Backend", skills: ["Node.js", "Express", "REST APIs", "SQL"] },
    { title: "Tools", skills: ["Git", "GitHub", "Postman", "Vercel"] }
  ] as SkillGroup[],
  experiences: [
    {
      company: "To be updated from resume",
      role: "Experience details pending",
      period: "Please provide final resume",
      location: "TBD",
      points: ["Experience section will be populated from your real resume only."]
    }
  ] as ExperienceItem[],
  projects: [
    {
      name: "GreenCart",
      summary: "An e-commerce web app where users can browse products, add to cart, and place orders.",
      stack: ["Pending"],
      repoUrl: "https://github.com/zubair-khan-Eng"
    },
    {
      name: "Employee Management System 2",
      summary: "A dashboard app to manage employees, attendance, and roles with admin controls.",
      stack: ["Pending"],
      repoUrl: "https://github.com/zubair-khan-Eng"
    }
  ] as ProjectItem[],
  education: [
    {
      institute: "To be updated from resume",
      degree: "Education details pending",
      period: "TBD"
    }
  ],
  certifications: ["Add only if present in resume"]
};
