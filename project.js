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

let previousDaggableElement;

function onDrop(event) {
    const id = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    draggableElement.style.backgroundColor = "red";
    if (previousDaggableElement && previousDaggableElement != draggableElement) { previousDaggableElement.style.backgroundColor = "grey"; }
    previousDaggableElement = document.getElementById(id);
    event.currentTarget.style.height = "84%";
    event.currentTarget.style.width = "89%";
    event.currentTarget.style.backgroundColor = "rgba(61, 60, 153, 1)";
    event.currentTarget.style.border = "0px";


    console.log(draggableElement);
    dropzone.innerHTML = draggableElement.textContent;

    let description = "";
    switch (id) {
        case "onin":
            description = `<div id="onin">(2016-2017) Onin Group - PHP Developer
            </div><div><ul><li>Frontend coded momentumcapitalfunding.com (Wordpress) and backend coded major release for oninapps.com timekeeping software (PHP), involving end-to-end design to deployment.</li>   
            <li>Worked with internal facing customers such as operations team to define issues with system, and also collaborated to create a way of capturing and testing new environment.</li>  
            </ul> 
            </div>`;
            break;
        case "advance":
            description = `<div id="advance">(2017-2018) Advance Financial -
            Customer Service</div><div<ul><li>Provided customer support and sold benefits.</li>   
            <li>Entered call notes to record conversation history.</li>   
            </ul>
            </div>`;
            break;
        case "view360":
            description = `<div id="view360">(2019-Present) 360 View - Junior
            Quality Assurance</div><div>
            <ul><li>Participates in SDLC: Grooming, Scrum, Retro, and Kickoff. </li>                          
            <li>Implements Manual QA testing for Banking CRM, iOS and Android mobile, and SQL Server Sprocs. </li>  
            <li>Keeps wiki updated with repro.</li>  
            <li>Creates Scenarios in Specflow (Gerkhin) language for automation with Acceptance Criteria.</li>  
            <li>Creates Automated tests with Selenium and C#.</li>  
            </ul>
            </div>`;
            break;
        case "acxiom":
            description = `<div id="acxiom">(2015-2016) Acxiom - Email Developer
            </div><div><ul><li>Worked directly with Sam's Club, CTFS, and Sallie Mae marketing. </li>  
            <li>Provided service to coworkers by helping with email QAs.</li>   
            <li>Prioritized work that including immediate launch and up to five day turnarounds. </li>  
            </div>`;
            break;
        case "jackroe":
            description = `<div id="jackroe">(2018-2019) Jack Roe USA - Tech Support
            and QA</div><div><ul><li>Implemented Manual QA testing for web, desktop, mobile, and command line systems.
            <li> Utilized spec to draw up use cases in excel, copying database data, and reporting findings back to developer. </li>  
            <li>Deployed IOS and Android apps, and set up Google Analytics dashboard.</li>        
            <li>Created Jira Specs including db tables, function, and UI. </li>  
            </div>`;
            break;
        case "nss":
            description = `<div>.Net and React</div>`;
            break;
        case "wku":
            description = `<div id="wku">
            <div>(2010-2014) Western Kentucky University</div>
            <div>Computer Science / Minor in Advertising</div>

        </div><div>Highlights:
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
