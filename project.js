"use strict";

const projects = [
    {
        title: "Pet Adoption",
        screenshot: "/images/petAdoption.PNG",
        description: "This is a project that allowed me to work on design patterns for javascript event listeners.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://gifted-brattain-dcd491.netlify.app", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/willkotheimer/pet-adoption",
        ,
    {
        title: "Sorting Hate",
        screenshot: "/images/harrypotter.PNG",
        description: "For this group project, I worked on being able to show multiple cards, delete cards, and sort."
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://awesome-pike-bfac13.netlify.app/",
        githubUrl: "https://github.com/willkotheimer/sortingHat"
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
    let myString = `<header class="projects">Some of My Projects:</header>`;
    for (let x = 0; x < projectsForCards.length; x++) {
        if (projectsForCards[x].available !== true) {
            continue;
        } else {
            myString += `
            
            <div class="title">${projectsForCards[x].title}</div>
            <div class="screenshot"><img class='project' src='${projectsForCards[x].screenshot}'/></div>
            <div class="description">${projectsForCards[x].description}</div>
            <div class="technologiesUsed">${projectsForCards[x].technologiesUsed}</div>
            <div class=" url"><a href='${projectsForCards[x].url}'>Pet Adoption Site</a></div>
            <div class="githubUrl"><a href='${projectsForCards[x].githubUrl}'>https://github.com/willkotheimer/pet-adoption</a></div>
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