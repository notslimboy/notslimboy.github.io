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
    website: 'https://notslimboy.my.id/',
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

/*  certifications: [
    {
      name: 'Mobile Game Creation Training ',
      body: 'Create some game mechanic and documentation',
      year: 'August 2021',
      link: 'https://drive.google.com/file/d/1W76XwFoUEFtdHYhn-t2DXsJf7-WERy75/view',
    },
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },


  ],*/

  education: [
    {
      institution: 'Electronic Engineering Polytechnic Institute of Surabaya',
      degree: 'Bachelor of Computer Science (Game Technology)',
      from: '2018',
      to: '2022',
    },
  ],

  gameDesignDocument: [
    {
      title: 'Car Crash Rumble',
      description:
        'Imagine in a city with a battle of the car every day until the cops are sick of what they are doing, Introducing a group of destruction. Car Heads, this group always fights each other to prove who is the strongest in their group. The cops always chase them when they hold a battle in the middle of the city. Car Heads even mock the cops while they are fighting.',
      imageUrl:
        'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQFQdHFPj3unH_AANKZKblYH7XCcvPDhQWm5K6smKNvhXqul9ecce25A3b18KwO5YIl_5IY1NevSrP_Y3GfrHUHk1z_=s1600',
      link: 'https://docs.google.com/document/d/1EV4_IYBSWkQpo3zcPWvBUxn4pZ-YkrlGZH4EU0e1Ym8/edit?usp=drive_link',
    },

    {
      title: 'Cafe Express Rush',
      description:
        'The player will be a manager at some leftover cafe by the players in the game dads. The player will maintain and develop the leftover cafe from the beginning because the father has to pay the debt and sell all that fancy stuff. All that remains is a cafe, an old coffee machine, and a few tables. In this game, the player will continue their parent\'s legacy.',
      imageUrl:
        'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQFQdHFPj3unH_AANKZKblYH7XCcvPDhQWm5K6smKNvhXqul9ecce25A3b18KwO5YIl_5IY1NevSrP_Y3GfrHUHk1z_=s1600',
      link: 'https://docs.google.com/document/d/1sIxmANlwi5nP8gBvsEIGYj2HIWmt8Cbal4ok7n-QeD4/edit?usp=drive_link',
    },

  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '18 Days of War Mahabarats',
      description:
        'Destroying the opponents tower or base by removing several available units by giving silver as a condition for being able to remove the unit. Players are required to have their strategy in winning the game either in the form of defense or attack. Players are also required to pay attention to each unit issued whether it has been effective or not in defeating the enemy',
      imageUrl:
        'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQgK--XhOaD_ihXrvSqfRdkd-VdlOoTA1mCs979gAVhcNCqZZ-kGnj40tIqIPaRwqWXlbp81lDSwuq5ZwgKogo--ceGtw=s1600',
      link: 'https://18daysofwar.mashida.io/',
    },
    {
      title: 'Kocheng : Battle Of Boings',
      description:
        'A Claw Machine game in a ding-dong arena becomes a battle arena for the Puppets (Boings). Every night the machine changes shape for the boings Slapping and bouncing off each other to best the other boings. KOCHENG : BATTLE OF BOINGS is a Multiplayer PVP game where you shoot to bounce your enemies into the arena around you. Together with Kocheng and other Boings, lets join the bouncing party in the Battle of Boings !',
      imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRv13qxuXsAeKelgrSkMFY89Ttma4O9LtGEtyNimsQmVcUo9LFMwjFovKxShS3Qgyzp_EFC8QArO5zxVMAoNgd5CYsD=s2560",
      link: 'https://play.google.com/store/apps/details?id=com.MiraiMimpi.BATTLEOFBOINGS',
    },
    {
      title: 'Flashcard Lumber',
      description:
        'Flashcard Lumber is a memorization game using the Leitner system mechanism, which is a tool for memorizing a topic that has been chosen by the player by using the resources available on the Anki website.',
      imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQpnjcE31T7bUvmMd0xEyEsoKmFtPLeVMEmyaW2kDmY4YBmXzZRzFiBF0gseTMYC6uKa58EYVTIyti9CIdqsN12wqF81g=s1600",
      link: 'https://gitlab.com/notslimboy/flashcard',
    },
    {
      title: '3D Science School',
      description:
        '3D Science School is a game that teaches children aged 4–6 years about force, motion, and energy. In this game, there are several mini-games with their own mechanisms. Each mini-game teaches something related to force, motion, and energy.',
      imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR4EbYtRuhqU8gBWDtM20LEjJn-DOYaMhaJUgF3NRsVucOmrt_a9dxBBveyvnne5ASq753TPyDcl-MblVN809A-JKv4wA=s1600",
      link: 'https://games.legendsoflearning.com/game/science-school/2935?partner=legends-public&media=video',
    },
    {
      title: 'Water Buoyancy Simulation',
      description:
        'A water simulation using a rag-doll and a basic object to test the law of buoyancy on the water surface.',
      imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTrxerMwAbsDvOhymOIiLkny264j_Fyya56EaHOSivWF_KMP-_HAl4y6OKV-MgX1brCM9VfXT6IRsgDotmFjOeExnbPNw=s1600",
      link: 'https://gitlab.com/notslimboy/water-bouyancy',
    },
    {
      title: '3D Battleground',
      description:
        '3D Battleground is an online multiplayer game with third-person shooter gameplay that involves all players being able to collect as many coins as possible in order to win the game.',
      imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSWvDsYKAvGte1Ke4POvgsrWuIYDU_VtCl4DpD7MjI1DxxbEpT4cqHcAmTn7N9ghWLgAk-4doAXs-7zp_yanjs-EbTC=s2560",
      link: 'https://gitlab.com/notslimboy/3-d-battleground-multiplayer-online-shooting-game',
    },
    {
      title: 'Zombie Land Survivor',
      description:
        'A shooting game that pits players against zombies is called Zombie Land Survival. The player must endure as long as they can.',
      imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR00a2gWyRqooTifkAIM4waUWqpKWl_HThdm_UmKeQHLW1JENjg5DWDeRrPDJvOMVFqRQaU6ktTtIkDUkUpH_ngCiAXUA=s2560",
      link: 'https://notslimboy.itch.io/zombie',
    },
    {
      title: 'Space Cadet',
      description:
        'Space Cadet is a top-down shooter survival game that has a space theme where the player will be faced with several types of enemies. In that game, the player must complete several rounds in order to win the game.',
      imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRM-ULxtX0GZrCEXHg98iQvzyat4OBclbAueXKcQyrpUYEyYDBjAtLXwBbje6OVGHVPmGl6l2tx8eN9f31XMwrWBwJQaw=s1600",
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
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
      class="text-primary"
      target="_blank"
      rel="noreferrer"
    >NotSlimBoy</a>`,
};

export default config;
