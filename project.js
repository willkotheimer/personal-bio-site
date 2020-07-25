"use strict";

const projects = [
    {
        title: "Pet Adoption",
        screenshot: "",
        description: "This is a project that allowed me to work on some good javascript design patterns.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://gifted-brattain-dcd491.netlify.app", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/willkotheimer/pet-adoption"
    }
];

// printToDom: This function should accept 2 arguments: 
// the ID of the element to print it in and a string to print.

const printToDom = (id, stringToPrint) => {
    let handle = document.getElementById(id);
    handle.innerHTML = stringToPrint;
}
// createProjectCards: This function() should loop 
//through the projects array and build up a 'dom string' 

const createProjectCards = (projectsForCards) => {
    let myString = "";
    for (let x = 0; x < projectsForCards.length; x++) {
        if (projectsForCards[x].available !== true) {
            continue;
        } else {
            myString += `
            
            <div class="title">${projectsForCards[x].title}</div>
            <div class="screenshot">${projectsForCards[x].screenshot}</div>
            <div class="description">${projectsForCards[x].description}</div>
            <div class="technologiesUsed">${projectsForCards[x].technologiesUsed}</div>
            <div class=" url">${projectsForCards[x].url}</div>
            <div class="githubUrl">${projectsForCards[x].githubUrl}</div>
            `
        }
    }
    printToDom('projectsPage', myString);
}

const init1 = (projects) => {
    console.log(projects);
    createProjectCards(projects);
}

init1(projects);