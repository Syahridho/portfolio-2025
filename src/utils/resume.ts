import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiVite,
  SiNextdotjs,
  SiFigma,
  SiGithub,
  SiGit,
  SiVisualstudiocode,
  SiAlpinedotjs,
  SiShadcnui,
  SiPython,
} from "react-icons/si";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaRegEnvelope,
} from "react-icons/fa";

export const socialMedia: any = [
  {
    name: "Email",
    href: "mailto:syahridhosyahputra@gmail.com",
    icon: FaRegEnvelope,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/syahridho/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/Syahridho",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/syahridhoa_/",
    icon: FaInstagram,
  },
  {
    name: "Telegram",
    href: "https://t.me/syahridhoo",
    icon: FaTelegram,
  },
];

export const home = {
  name: "Syahridho Arjuna Syahputra",
  location: "Pekanbaru, Riau, Indonesia",
  role: "Front End Developer",
  description:
    "I am a Frontend Developer with a focus on creating aesthetic and responsive user interfaces. With skills in HTML, CSS, JavaScript,Tailwind, React JS and others, I have developed a variety of projects,ranging from business websites to interactive web applications.",
  cv: "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fcv%2FCVSyahridhoArjunaSyahputra.pdf?alt=media&token=ae16c803-5722-4478-a3b4-a1d933c87cdb",
  tech: {
    iconsUp: [
      { icon: SiHtml5, title: "HTML 5", color: "#E34F26" },
      { icon: SiCss3, title: "CSS 3", color: "#1572B6" },
      { icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
      { icon: SiTailwindcss, title: "Tailwind CSS", color: "#06B6D4" },
      { icon: SiShadcnui, title: "Shadcn UI", color: "#000000" },
      { icon: SiTypescript, title: "TypeScript", color: "#3178C6" },
      { icon: SiReact, title: "React.Js", color: "#61DAFB" },
      { icon: SiNextdotjs, title: "Next.js", color: "#000000" },
      { icon: SiNodedotjs, title: "Node.js", color: "#339933" },
      { icon: SiPython, title: "Python", color: "#4B8BBE" },
    ],

    iconsDown: [
      { icon: SiAlpinedotjs, title: "Alpine.Js", color: "#8BC0D0" },
      { icon: SiPhp, title: "PHP", color: "#777BB4" },
      { icon: SiLaravel, title: "Laravel", color: "#FF2D20" },
      { icon: SiMysql, title: "MySQL", color: "#4479A1" },
      { icon: SiFirebase, title: "Firebase", color: "#FFCA28" },
      { icon: SiVite, title: "Vite", color: "#646CFF" },
      { icon: SiFigma, title: "Figma", color: "#F24E1E" },
      { icon: SiGithub, title: "GitHub", color: "#181717" },
      { icon: SiGit, title: "Git", color: "#F05032" },
      { icon: SiVisualstudiocode, title: "VS Code", color: "#007ACC" },
    ],
  },
  career: [
    {
      title: "Cakaplah.com",
      dates: "November 2024 - Now",
      location: "Indonesia, Riau",
      description: "Internship.",
      image:
        "https://www.cakaplah.com/assets/news/15112017/cakaplah_rgc2z_13388.png",
      links: [],
    },
    {
      title: "Lancang Kuning University",
      dates: "July 2022 - Now",
      location: "Indonesia, Riau",
      description: "Informatics Engineering.",
      image: "https://assets.siakadcloud.com/public/unilak-favicon.png",
      mlh: "",
      links: [],
    },
    {
      title: "Dashnet ISP",
      dates: "November 2021 - Desember 2021",
      location: "Indonesia, Riau",
      description: "Internship.",
      image:
        "https://dash.net.id/wp-content/uploads/2017/10/cropped-dash-32x32.png",
      mlh: "",
      links: [],
    },
    {
      title: "SMK N 5 Pekanbaru",
      dates: "July 2019 - July 2022",
      location: "Indonesia, Riau",
      description: "Computer and network engineering.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0GEkrE04jgi8eHfy8Y21hCwRJEkW0NHN5g&s",
      mlh: "",
      links: [],
    },
  ],
};

export const projects = [
  {
    id: "6OixpwApLocfLAtF6NR7",
    description: "Simple Todo List",
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ftodo.webp?alt=media&token=288c67aa-8b35-4fc4-909b-73a5c72e16e6",
    order: 4,
    date: "18 Jun 2024",
    links: [
      {
        href: "https://todo-next-puce-six.vercel.app/",
        name: "website",
      },
      {
        name: "github",
        href: "https://github.com/Syahridho/todoList-NextJs",
      },
    ],
    title: "Todo List NextJs",
    new: false,
    tech: [
      {
        name: "Next.JS",
        color: "#000000",
        icons: "SiNextdotjs",
      },
      {
        color: "#61DAFB",
        name: "React.JS",
        icons: "SiReact",
      },
      {
        color: "#06B6D4",
        icons: "SiTailwindcss",
        name: "Tailwind CSS",
      },
      {
        color: "#FFCA28",
        name: "Firebase",
        icons: "SiFirebase",
      },
    ],
  },
  {
    id: "8o9si1PIYTzLH3IyQJXM",
    description: "Simple Notes App",
    title: "Notes App",
    order: 5,
    date: "17 Sep 2023",
    tech: [
      {
        name: "React.JS",
        color: "#61DAFB",
        icons: "SiReact",
      },
      {
        name: "Tailwind CSS",
        icons: "SiTailwindcss",
        color: "#06B6D4",
      },
    ],
    links: [
      {
        name: "website",
        href: "https://notes-app-sandy-six.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/Syahridho/Notes-App.git",
      },
    ],
    new: false,
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2FnotesApp.webp?alt=media&token=d56f2367-4df4-416e-9e85-1f08e0119445",
  },
  {
    id: "HF1s03thp7Nh4inFmmzl",
    description: "UI/UX for Bakso Kang Kakang",
    order: 9,
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Fbakso.webp?alt=media&token=cd271425-f5bf-419e-87da-2b16eb21804a",
    title: "UI/UX Bakso",
    new: false,
    tech: [
      {
        color: "#F24E1E",
        icons: "SiFigma",
        name: "Figma",
      },
    ],
    date: "28 Mar 2024",
    links: [
      {
        href: "https://www.figma.com/proto/mxCj4P2vMSSYIX6YJh66wh/submission?node-id=2-2&scaling=scale-down&mode=design&t=7FScRbaCCZbwPQZ2-1",
        name: "website",
      },
    ],
  },
  {
    id: "HQuSXSvfecWmtmhjjAKY",
    tech: [
      {
        icons: "SiReact",
        color: "#61DAFB",
        name: "React.JS",
      },
      {
        icons: "SiTailwindcss",
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
    ],
    title: "App Weather",
    github: [
      {
        title: "Clone Github",
        code: "git clone https://syahridho.github.io",
      },
      {
        title: "Masuk derctory",
        code: "code .",
      },
      {
        title: "run project",
        code: "npm run dev",
      },
      {
        title:
          "Open http://localhost:3000 with your browser to see the result.",
      },
    ],
    links: [
      {
        name: "website",
        href: "https://app-weather-mu.vercel.app/",
      },
      {
        href: "https://github.com/Syahridho/app-weather",
        name: "github",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Fweather.webp?alt=media&token=cf0a74dc-c599-488f-96d3-eb8314aeaa2e",
    new: false,
    date: "11 Aug 2024",
    description: "API key from openweathermap.org",
    order: 3,
  },
  {
    id: "NVLKWKqMM9MUaDzcJRfv",
    links: [
      {
        href: "https://simple-login-pku.vercel.app/",
        name: "website",
      },
      {
        name: "github",
        href: "https://github.com/Syahridho/simple-login.git",
      },
    ],
    tech: [
      {
        name: "React.JS",
        color: "#61DAFB",
        icons: "SiReact",
      },
      {
        name: "Redux",
        color: "#764ABC",
        icons: "SiRedux",
      },
      {
        icons: "SiTailwindcss",
        color: "#06B6D4",
        name: "Tailwind CSS",
      },
    ],
    description: "Sign in & Sign up app",
    order: 6,
    new: false,
    title: "Authentication app",
    date: "15 Nov  2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Flogin.webp?alt=media&token=fc317aa6-9d1f-4780-b75c-a540ffcd83a9",
  },
  {
    id: "Pb9D0g0Hflazf72YDt28",
    new: false,
    title: "Bike Store",
    tech: [
      {
        name: "HTML 5",
        icons: "SiHtml5",
        color: "#E34F26",
      },
      {
        icons: "SiCss3",
        color: "#1572B6",
        name: "CSS 5",
      },
      {
        name: "JavaScript",
        icons: "SiJavascript",
        color: "#F7DF1E",
      },
    ],
    date: "17 Apr 2024",
    description: "Freelancer Project",
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Fbike.webp?alt=media&token=1e1145c3-f922-47f0-995f-6a7e0672d664",
    links: [
      {
        href: "https://divafabiola.github.io/bikeStore/",
        name: "website",
      },
    ],
    order: "8",
  },
  {
    id: "UIHZSNKK6T8MAonncGwW",
    description: "firebase for database",
    order: "1",
    new: false,
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Fcrud-nextJs.webp?alt=media&token=1e0d26ff-b84c-4747-9951-6f6b69383559",
    links: [
      {
        href: "https://crud-next-js-zeta.vercel.app/",
        name: "website",
      },
      {
        name: "github",
        href: "https://github.com/Syahridho/crud-nextJs",
      },
    ],
    tech: [
      {
        icons: "SiNextdotjs",
        color: "#000000",
        name: "Next.Js",
      },
      {
        color: "#61DAFB",
        icons: "SiReact",
        name: "React.Js",
      },
      {
        color: "#06B6D4",
        name: "Tailwind CSS",
        icons: "SiTailwindcss",
      },
      {
        color: "#FFCA28",
        icons: "SiFirebase",
        name: "Firebase",
      },
    ],
    date: "18 Jun 2024",
    title: "CRUD NextJs",
  },
  {
    id: "Zm7rZvhA8MfzLRn7wwWS",
    tech: [
      {
        icons: "SiFigma",
        name: "Figma",
        color: "#F24E1E",
      },
    ],
    new: false,
    title: "UI/UX App Restaurant",
    date: "1 Sep 2023",
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Frestoran.webp?alt=media&token=0e37f543-ebed-4d97-9cb0-6dfbd5d75dc1",
    order: 9,
    description: "Restaurant app to make purchasing easier",
    links: [
      {
        href: "https://www.figma.com/proto/8gQZJVOGyCOwSZR3CwcHpC/Final-UX?type=design&node-id=6-695&t=QoBtfYi6WjybL8nz-1&scaling=min-zoom&page-id=1%3A763&starting-point-node-id=5%3A116&mode=design",
        name: "website",
      },
    ],
  },
  {
    id: "atvz32nUXy5wKMPXI4Rn",
    tech: [
      {
        icons: "SiReact",
        name: "React.JS",
        color: "#61DAFB",
      },
      {
        color: "#764ABC",
        icons: "SiRedux",
        name: "Redux",
      },
      {
        name: "Tailwind CSS",
        icons: "SiTailwindcss",
        color: "#06B6D4",
      },
      {
        color: "#3178C6",
        icons: "SiTypescript",
        name: "TypeScript",
      },
      {
        color: "#FFCA28",
        name: "Firebase",
        icons: "SiFirebase",
      },
    ],
    date: " 4 Apr 2024",
    new: false,
    description: "Discover a variety of classic and latest movies right here",
    links: [
      {
        href: "https://film-six-pi.vercel.app/",
        name: "website",
      },
      {
        name: "github",
        href: "https://github.com/Syahridho/film",
      },
    ],
    order: 2,
    title: "App Film",
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    id: "rXIpsPVxqlLGTK1fu6Bk",
    order: 7,
    date: "28 Nov 2023",
    description: "Simple clinic app",
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Fklinik.webp?alt=media&token=72f31a1d-cdef-4022-8495-536d277d5fea",
    tech: [
      {
        icons: "SiReact",
        color: "#61DAFB",
        name: "React.JS",
      },
      {
        name: "Redux",
        icons: "SiRedux",
        color: "#764ABC",
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
        icons: "SiTailwindcss",
      },
    ],
    title: "Clinik",
    new: false,
    links: [
      {
        href: "https://klinik-sand.vercel.app/",
        name: "website",
      },
      {
        name: "github",
        href: "https://github.com/Syahridho/rumah-sakit.git",
      },
    ],
  },
  {
    id: "su27LyxqryiILTdMgV3V",
    tech: [
      {
        name: "Figma",
        icons: "SiFigma",
        color: "#F24E1E",
      },
    ],
    description: "The look of my classical music app",
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2FuiMusic.webp?alt=media&token=342619cd-e048-4836-9f5e-ede4f602ec1c",
    new: false,
    order: "11",
    links: [
      {
        href: "https://www.figma.com/file/IjAgupx9sfVi0U2zHp0Myo/Untitled?type=design&node-id=0%3A1&mode=design&t=y0Jtr0QkTGakIhAn-1",
        name: "website",
      },
    ],
    title: "UI Music",
    date: "23 Okt 2023",
  },
];

export const detailProject: any = {
  title: "Chat Collect",
  href: "/project/asd",
  dates: "Jan 2024 - Feb 2024",
  active: true,
  description:
    "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  technologies: [
    "Next.js",
    "Typescript",
    "PostgreSQL",
    "Prisma",
    "TailwindCSS",
    "Stripe",
    "Shadcn UI",
    "Magic UI",
  ],
  links: [
    {
      type: "Demo",
      href: "https://www.google.com",
      icon: "",
    },
    {
      type: "Github",
      href: "https://www.github.com",
      icon: "",
    },
  ],
  github: [
    {
      title: "Clone Github",
      code: "git clone https://syahridho.github.io",
    },
    {
      title: "Masuk derctory",
      code: "code .",
    },
    {
      title: "run project",
      code: "npm run dev",
    },
    {
      title: "Open http://localhost:3000 with your browser to see the result.",
    },
  ],
  image:
    "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
};

const url: string =
  "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fcertificates%2Ffrondend%2Fdicoding-belajar-membuat-front-end-web-untuk-pemula.webp?alt=media&token=4d1827af-69d3-4352-b8d7-e28a425b72bf";

export const certificates = {
  main: [
    {
      url: url,
      role: "fronend",
    },
    {
      url: url,
      role: "backend",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "ui/ux",
    },
    {
      url: url,
      role: "ai",
    },
    {
      url: url,
      role: "flutter",
    },
  ],
  all: [
    {
      url: url,
      role: "frondend",
    },
    {
      url: url,
      role: "backend",
    },
    {
      url: url,
      role: "backend",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "devops",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mobile",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "mechine",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
    {
      url: url,
      role: "other",
    },
  ],
};
