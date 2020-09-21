const projects = [
  {
    title: 'Extraordinary Corduroy',
    github: 'https://github.com/willkotheimer/pants-group-project-e13-mighty-megalodons-team-4',
    screenshot: 'images/extraOrdinary.png',
    description: 'This was a group project in which I worked directly on the reviews page.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://relaxed-archimedes-5176ef.netlify.app'
  },
  {
    title: 'Bear Watcher',
    github: 'https://github.com/willkotheimer/bearwatcher',
    screenshot: 'images/bearWatcherScreenshot.PNG',
    description: 'This app captured the scores of bears catching fish. It enabled me to be able to use functional programming and dom manipulation.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://bearwatcherapp.netlify.app'
  },
  {
    title: 'Tamagotchi',
    github: 'https://github.com/willkotheimer/tamagotchi',
    screenshot: 'images/Tamagotchi.PNG',
    description: 'This project allowed me to recreate a classic 1990s toy with javascript, and manipulate data with functional programming, displaying it with a progress bar in css.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://ecstatic-einstein-3ebafb.netlify.app'
  },
  {
    title: 'Pet Adoption',
    screenshot: 'images/petAdoption.PNG',
    description: 'This is a project that allowed me to work on design patterns for javascript event listeners.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://gifted-brattain-dcd491.netlify.app'
  },
  {
    title: 'Dino Kennel',
    screenshot: 'images/dinoScreenCapture.PNG',
    description: 'For this project, I created three sections of cards sorted by energy level, and on each card, I was able to increase or decrease it.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://dinokennel.netlify.app',
    githubUrl: 'https://github.com/willkotheimer/dino-kennel/tree/development'
  }
];

const getProjects = () => projects;

export default { getProjects };
