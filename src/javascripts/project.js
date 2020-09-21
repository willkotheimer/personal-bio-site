import projects from './helpers/data/projectsData';

// const backgroundsForCards = ['#94bcc4', '#c36f31', '#dda982', '#b9cb99', '#b7bf5e', '#076e54'];
// printToDom: This function should accept 2 arguments:
// the ID of the element to print it in and a string to print.

const printToDom = (selector, stringToPrint) => {
  const handle = document.querySelector(selector);
  handle.innerHTML = stringToPrint;
};

const createProjectCards = (idString) => {
  $('.inner-project').html('');
  console.warn(projects.getProjects());
  const id = Number(idString.split('-')[1]);
  const myString = `
            <div class='projectCard' style='background-color:#94bcc4'>
            <div class='screenshot project-${id}'></div>
            <div class='title'>${projects.getProjects()[id].title}</div>

            <div class='description'>${projects.getProjects()[id].description}</div>
            <div class='technologiesUsed'>${projects.getProjects()[id].technologiesUsed}</div>
            <div class='url'><a href='${projects.getProjects()[id].url}'>Pet Adoption Site</a></div>
            <div class='githubUrl'><a href='${projects.getProjects()[id].githubUrl}'>https://github.com/willkotheimer/pet-adoption</a></div>
            </div>
            `;
  $('.inner-project').html(myString);
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
        createProjectCards(e.target.id);
      });
  });
};

export default { createProjectCards, addButtons, addEvents };
