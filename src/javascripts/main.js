import projects from './helpers/data/projectsData';
import projectsPublish from './project';
import '../styles/main.scss';

const init = () => {
  projectsPublish.addButtons();
  projectsPublish.addEvents();
  projectsPublish.createProjectCards(projects.getProjects());
};

init();
