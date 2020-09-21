import projects from './helpers/data/projectsData';

const backgroundsForCards = ['#94bcc4', '#c36f31', '#dda982', '#b9cb99', '#b7bf5e', '#076e54'];
// printToDom: This function should accept 2 arguments:
// the ID of the element to print it in and a string to print.

const printToDom = (selector, stringToPrint) => {
  const handle = document.querySelector(selector);
  handle.innerHTML = stringToPrint;
};

const createProjectCards = () => {
  let myString = `<header class='headerspecial'>Some of My Projects:</header>
    <div class='projectsContainer'>`;
  // for (let x = 0; x < projectsForCards.length; x += 1) {
  //   if (projectsForCards[x].available !== true) {
  //     continue;
  //   } else {
  //     myString += `
  //           <div class='projectCard' style='background-color:${backgroundsForCards[x % 6]};'>
  //           <div class='screenshot'><img class='project' src='${projectsForCards[x].screenshot}'/></div>
  //           <div class='title'>${projectsForCards[x].title}</div>

  //           <div class='description'>${projectsForCards[x].description}</div>
  //           <div class='technologiesUsed'>${projectsForCards[x].technologiesUsed}</div>
  //           <div class='url'><a href='${projectsForCards[x].url}'>Pet Adoption Site</a></div>
  //           <div class='githubUrl'><a href='${projectsForCards[x].githubUrl}'>https://github.com/willkotheimer/pet-adoption</a></div>
  //           </div>
  //           `
  //   }
  // }
  // myString += '</div>
};

const addButtons = () => {
  let myString = '';
  projects.getProjects().forEach((project, index) => {
    myString += `<div class='project-button' id='add-${index}'>${project.title}</div>`;
  });
  printToDom('.right-names', myString);
};

const addEvents = () => {
  projects.getProjects().forEach((project, index) => {
    document.querySelector(`#add-${index}`)
      .addEventListener('click', (e) => {
        const id = e.target.id;
        createProjectCards('.inner-project', createProjectCards, id);
      });
  });
};

export default { createProjectCards, addButtons, addEvents };
