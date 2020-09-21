import projects from './helpers/data/projectsData';
import projectsPublish from './project';
import '../styles/main.scss';

const init = () => {
  projectsPublish.createProjectCards(projects);
};

init();
