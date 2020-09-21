import projects from '../helpers/data/projectsData';
import utilities from './utilities';
import bio from './bio';

const createProjectCards = (idString) => {
  $('.inner-project').html('');
  console.warn(projects.getProjects());
  const id = Number(idString.split('-')[1]);
  const myString = `<div class='projectCard' style='background-color:#94bcc4'>
            <div class='screenshot project-${id}'></div>
            <div class='title'>${projects.getProjects()[id].title}</div>
            <div class='description'>${projects.getProjects()[id].description}</div>
            <div class='technologiesUsed'>${projects.getProjects()[id].technologiesUsed}</div>
            <div class='url'><a href='${projects.getProjects()[id].url}'>${projects.getProjects()[id].title} Site</a></div>
            <div class='githubUrl'><a href='${projects.getProjects()[id].githubUrl}'>${projects.getProjects()[id].githubUrl}</a></div>
            </div>
            `;
  $('.inner-project').html(myString);
};

const addButtons = () => {
  let myString = '';
  projects.getProjects().forEach((project, index) => {
    myString += `<div class='project-button' id='add-${index}'>${project.title}</div>`;
  });
  myString += bio.bio();
  utilities.printToDom('.right-names', myString);
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
