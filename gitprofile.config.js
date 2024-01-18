// gitprofile.config.js

const config = {
  github: {
    username: 'notslimboy', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 0, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['portfolio-old', 'OpenGl', 'notslimboy'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'raka-arya-pratama',
    instagram: 'notslimboyy',
    website: 'https://notslimboy.github.io/',
    phone: '+6285748981274',
    email: 'raka.arya34@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1WnJ698gANvZjRW4FnxfkQvRhWsztKt3i', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Game Design',
    'Machination',
    'Game Economy',
    'Game Balancing',
    'Sourcetree',
    'Unity',
    'Unreal',
    'Corel',
    'Git',
  ],
  experiences: [
    {
      company: 'Miraimimpi',
      position: 'Game Designer',
      from: 'August 2021',
      to: 'Present',
      companyLink: 'https://www.instagram.com/miraimimpi/',
    },
    {
      company: 'Maulidan Games',
      position: 'Intern Game Programmer',
      from: 'September 2021',
      to: 'Desember 2021',
      companyLink: 'https://maulidangames.com/',
    },
  ],

  /*
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
*/

  education: [
    {
      institution: 'Electronic Engineering Polytechnic Institute of Surabaya',
      degree: 'Bachelor of Computer Science (Game Technology)',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '18 Days of War Mahabarats',
      description:
        'Destroying the opponents tower or base by removing several available units by giving silver as a condition for being able to remove the unit. Players are required to have their strategy in winning the game either in the form of defense or attack. Players are also required to pay attention to each unit issued whether it has been effective or not in defeating the enemy',
      imageUrl: '../public/18-days-of-wars.png',
      link: 'https://18daysofwar.mashida.io/',
    },
    {
      title: 'Kocheng : Battle Of Boings',
      description:
        'A Claw Machine game in a ding-dong arena becomes a battle arena for the Puppets (Boings). Every night the machine changes shape for the boings Slapping and bouncing off each other to best the other boings. KOCHENG : BATTLE OF BOINGS is a Multiplayer PVP game where you shoot to bounce your enemies into the arena around you. Together with Kocheng and other Boings, lets join the bouncing party in the Battle of Boings !',
      imageUrl: '../public/bob.png',
      link: 'https://play.google.com/store/apps/details?id=com.MiraiMimpi.BATTLEOFBOINGS',
    },
    {
      title: 'Flashcard Lumber',
      description:
        'Flashcard Lumber is a memorization game using the Leitner system mechanism, which is a tool for memorizing a topic that has been chosen by the player by using the resources available on the Anki website.',
      imageUrl: '../public/flashcard-wp.png',
      link: 'https://gitlab.com/notslimboy/flashcard',
    },
    {
      title: '3D Science School',
      description:
        '3D Science School is a game that teaches children aged 4–6 years about force, motion, and energy. In this game, there are several mini-games with their own mechanisms. Each mini-game teaches something related to force, motion, and energy.',
      imageUrl: '../public/image 31.png',
      link: 'https://games.legendsoflearning.com/game/science-school/2935?partner=legends-public&media=video',
    },
    {
      title: 'Water Buoyancy Simulation',
      description:
        'A water simulation using a ragdoll and a basic object to test the law of buoyancy on the water surface.',
      imageUrl: '../public/image 27.png',
      link: 'https://gitlab.com/notslimboy/water-bouyancy',
    },
    {
      title: '3D Battleground',
      description:
        '3D Battleground is an online multiplayer game with third-person shooter gameplay that involves all players being able to collect as many coins as possible in order to win the game.',
      imageUrl: '../public/image 27-3.png',
      link: 'https://gitlab.com/notslimboy/3-d-battleground-multiplayer-online-shooting-game',
    },
    {
      title: 'Zombie Land Survivor',
      description:
        'A shooting game that pits players against zombies is called Zombie Land Survival. The player must endure as long as they can.',
      imageUrl: '../public/image 31-1.png',
      link: 'https://notslimboy.itch.io/zombie',
    },
    {
      title: 'Space Cadet',
      description:
        'Space Cadet is a top-down shooter survival game that has a space theme where the player will be faced with several types of enemies. In that game, the player must complete several rounds in order to win the game.',
      imageUrl: '../public/image 27-1.png',
      link: 'https://notslimboy.itch.io/space-cadets',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://notslimboy.github.io/"
      target="_blank"
      rel="noreferrer"
    >NotSlimBoy</a>`,
};

export default config;
