/*
 *   Copyright (c) 2025
 *   All rights reserved.
 */
import { InlineCode } from "@/once-ui/components";
import { display } from "./config";

const person = {
  firstName: "Raka Arya",
  lastName: "Pratama",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Game Designer",
  avatar: "/images/Avatar-Raka-Color.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and game design.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raka-arya-pratama/",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.com/users/352425793227456512",
  },
  {
    name: "Itch.io",
    icon: "itchIO",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:raka.arya34@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Game Designer and Creative</>,
  subline: (
    <>
      I’m Raka, a Game Designer and Creative Designer at{" "}
      <InlineCode>Imaji DigiStudio</InlineCode>, where I craft intuitive
      gameplay and develop creative concepts for brand campaigns—both in and out
      of the game.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://drive.google.com/uc?export=download&id=1h6nYS5cfbTeZOTXUek9LjQPD5smdi2RX",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Game Designer passionate about crafting balanced mechanics,
        fine-tuning in-game economies, and creating fair, intuitive gameplay
        through continuous iteration.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Imaji DigiStudio",
        timeframe: "Jul 2024 – Present",
        role: "Game Designer | Creative",
        achievements: [
          <>
            Created Game Design Documents (GDD), balanced gameplay systems, and
            developed pitch decks for both internal and client-facing game
            projects.
          </>,
          <>
            Designed UI/UX for games and apps, focusing on clarity, engagement,
            and smooth user experience.
          </>,
          <>
            Designed system architecture and conducted testing for game features
            and app functionality to ensure performance and usability.
          </>,
          <>
            Developed creative game concepts and interactive ideas aligned with
            brand campaigns and experiential marketing.
          </>,
          <>
            Ideated and produced Faux OOH concepts in collaboration with brands
            for immersive promotional activations.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Miraimimpi",
        timeframe: "Aug 2021 – Jul 2024",
        role: "Game Designer",
        achievements: [
          <>
            Designed gameplay mechanics, character abilities, and skill sets,
            followed by hands-on playtesting and iteration.
          </>,
          <>
            Balanced core gameplay systems and authored comprehensive Game
            Design Documents (GDD) to guide development.
          </>,
          <>
            Developed in-game economy projections, including currency flow and
            in-app purchase (IAP) structures.
          </>,
          <>
            Built scalable design systems to support feature expansion and
            maintain gameplay consistency.
          </>,
        ],
        images: [],
      },
      {
        company: "Monster Group",
        timeframe: "Feb 2023 – Dec 2023",
        role: "Game Designer",
        achievements: [
          <>
            Refined existing game concepts and authored Game Design Documents
            (GDD) to align with updated vision and mechanics.
          </>,
          <>
            Conducted gameplay balancing to ensure fair and engaging player
            progression.
          </>,
          <>
            Performed internal playtesting to evaluate mechanics, pacing, and
            user feedback for iteration.
          </>,
        ],
        images: [],
      },
      {
        company: "Maulidan Games",
        timeframe: "Sep 2021 – Dec 2021",
        role: "Intern Game Programmer",
        achievements: [
          <>
            Developed educational physics-based games for 4th–6th grade students
            in the U.S. market, covering buoyancy, basic motion, and momentum.
          </>,
          <>
            Designed and implemented multiple core gameplay mechanics tailored
            to learning objectives.
          </>,
          <>
            Refactored existing game codebases for improved readability,
            scalability, and maintainability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Electronic Engineering Polytechnic Institute of Surabaya",
        description: <>Game Techonlogy - Bachelor Degree</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Unity",
        description: (
          <>Able to create a prototype for game mecchanic and in-game engine testing</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Unity-Skill.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
           {
            src: "/images/projects/project-01/Unity2-Skill.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Machination",
        description: (
          <>Machinations is a visual tool for designing and balancing game systems like economy, resources, and mechanics.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Machination-Skill.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },

      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Figma-Skill.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Spreadsheet",
        description: (
          <>Creating formula for balancing and in-game economies projections</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
