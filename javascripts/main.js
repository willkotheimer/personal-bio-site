import projects from './helpers/data/projectsData';
import projectsPublish from './project';

const init = (projects) => {
  projectsPublish.createProjectCards(projects);

}

init(projects.getProjects());
