const backgroundsForCards = ['#94bcc4', '#c36f31', '#dda982', '#b9cb99', '#b7bf5e', '#076e54'];
// printToDom: This function should accept 2 arguments:
// the ID of the element to print it in and a string to print.

const printToDom = (id, stringToPrint) => {
  const handle = document.getElementById(id);
  handle.innerHTML = stringToPrint;
};

const createProjectCards = (projectsForCards) => {
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
  // myString += '</div>'
  printToDom('projectsPage', myString);
};

export default { createProjectCards };
