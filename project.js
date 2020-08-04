"use strict";

const projects = [
    {
        title: "Pet Adoption",
        screenshot: "/images/petAdoption.PNG",
        description: "This is a project that allowed me to work on design patterns for javascript event listeners.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://gifted-brattain-dcd491.netlify.app"
    }
    ,
    {
        title: "Sorting Hat",
        screenshot: "/images/harrypotter.PNG",
        description: "For this group project, I worked on being able to show multiple cards, delete cards, and sort.",
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

function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);

    console.log(event.target.id);
    console.log(event.target);
    event.currentTarget.style.backgroundColor = "grey";
    event.currentTarget.myString = event.target.id;
}

function onDragOver(event) {
    event.preventDefault();
    event.currentTarget.style.height = "86%";
    event.currentTarget.style.width = "91%";
    event.currentTarget.style.backgroundColor = "rgba(148, 147, 213, 0.8)";
    event.currentTarget.style.border = "10px solid rgba(148, 147, 213, 0.8)";
}


function onDrop(event) {
    const id = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    event.currentTarget.style.height = "84%";
    event.currentTarget.style.width = "89%";
    event.currentTarget.style.backgroundColor = "rgba(61, 60, 153, 1)";
    event.currentTarget.style.border = "0px";


    console.log(draggableElement);
    dropzone.innerHTML = draggableElement.textContent;

    let description = "";
    switch (id) {
        case "onin":
            description = `<div>I worked on a major release in PHP.</div>`;
            break;
        case "advance":
            description = `<div>I anwswered phones.</div>`;
            break;
        case "view360":
            description = `<div>Quality Assurance.</div>`;
            break;
        case "acxiom":
            description = `<div>I created HTML Emails</div>`;
            break;
        case "jackroe":
            description = `<div>I worked on stuff for the movies</div>`;
            break;
        case "nss":
            description = `<div>.Net and React</div>`;
            break;
        case "wku":
            description = `<div>Highlights:
            <ul>
                <li>Student Developer: Potter College</li>
                <li>Intern: Imagewest</li>
                <li>Intern: Hitcents.com</li>
                <li>Student Assistant: WKU Networking Department</li>
                <li>Student Developer: WKU Library</li>
            </ul>
        </div>`;
            break;
        default: "djshdjsa";
    }

    let infoArea = document.querySelector('.infoArea')
    infoArea.innerHTML = description;

    event.dataTransfer.clearData();
}


const init1 = (projects) => {
    console.log(projects);
    createProjectCards(projects);
}

init1(projects);
