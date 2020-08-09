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

const backgroundsForCards = ['#94bcc4', '#c36f31', '#dda982', '#b9cb99', '#b7bf5e', '#076e54']
// printToDom: This function should accept 2 arguments: 
// the ID of the element to print it in and a string to print.

const printToDom = (id, stringToPrint) => {
    let handle = document.getElementById(id);
    handle.innerHTML = stringToPrint;
}
// createProjectCards: This function() should loop 
//through the projects array and build up a 'dom string' 

const createProjectCards = (projectsForCards) => {
    let myString = `<header class="headerspecial">Some of My Projects:</header>
    <div class="projectsContainer">`;
    for (let x = 0; x < projectsForCards.length; x++) {
        if (projectsForCards[x].available !== true) {
            continue;
        } else {
            myString += `
            <div class="projectCard" style="background-color:${backgroundsForCards[x % 6]};">
            <div class="screenshot"><img class='project' src='${projectsForCards[x].screenshot}'/></div>
            <div class="title">${projectsForCards[x].title}</div>
            
            <div class="description">${projectsForCards[x].description}</div>
            <div class="technologiesUsed">${projectsForCards[x].technologiesUsed}</div>
            <div class=" url"><a href='${projectsForCards[x].url}'>Pet Adoption Site</a></div>
            <div class="githubUrl"><a href='${projectsForCards[x].githubUrl}'>https://github.com/willkotheimer/pet-adoption</a></div>
            </div>
            `
        }
    }
    myString += "</div>"
    printToDom('projectsPage', myString);
}

function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);

    console.log(event.target.id);
    console.log(event.target);
    event.currentTarget.style.backgroundColor = "#1F1E4D";
    event.currentTarget.myString = event.target.id;
}

function onDragOver(event) {
    event.preventDefault();
    event.currentTarget.style.height = "300px";
    event.currentTarget.style.width = "91%";
    event.currentTarget.style.backgroundColor = "rgba(148, 188, 196, 0.8)";
    event.currentTarget.style.border = "10px solid rgba(148, 188, 196, 0.8)";
}

let previousDaggableElement;

function onDrop(event) {
    const id = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    draggableElement.style.backgroundColor = "slategrey";
    if (previousDaggableElement && previousDaggableElement != draggableElement) { previousDaggableElement.style.backgroundColor = "rgb(0, 22, 40)"; }
    previousDaggableElement = document.getElementById(id);
    event.currentTarget.style.height = "300px";
    event.currentTarget.style.width = "89%";
    event.currentTarget.style.backgroundColor = "rgb(0, 22, 40);";
    event.currentTarget.style.border = "0px";


    console.log(draggableElement);
    dropzone.innerHTML = draggableElement.textContent;

    let description = "";
    switch (id) {
        case "onin":
            description = `<div id="onin-description">(2016-2017) Onin Group - PHP Developer
            </div><div><div>Highlights:</div>
            <div id="containerSurround">
            
            <div id="experience-logo"><img src='images/icons/noun_developer_1018327.png'/></div>
            <div id="experience-description">
                <ul>
                    <li>Frontend coded momentumcapitalfunding.com (Wordpress).
                    <li> Backend coded major release for oninapps.com timekeeping software (PHP), involving computing monthly,
                    weekly, and daily results of reports of each employee, department, branch, and region.</li>
                    <li>Worked with operations team to define issues with system, and collaborated to test new environment.</li>
                </ul>
            </div>
            </div>
        </div></div>`;
            break;
        case "advance":
            description = `<div id="advance-description">(2017-2018) Advance Financial -
            Customer Service</div><div><div>Highlights:</div>
            <div id="containerSurround">
            
            <div id="experience-logo"><img src='images/icons/noun_customer service_847498.png'/></div>
            <div id="experience-description"><ul><li>Provided customer support and sold benefits.</li>   
            <li>Entered call notes to record conversation history.</li>   
            </ul>
            </div></div></div></div>`;
            break;
        case "view360":
            description = `<div id="view360-description">(2019-Present) 360 View - Junior
            Quality Assurance</div><div><div>Highlights:</div>
            <div id="containerSurround">
            
            <div id="experience-logo"><img src='images/icons/noun_Final Approval_995760.png'/></div>
            <div id="experience-description">
            <ul><li>Participates in SDLC: Grooming, Scrum, Retro, and Kickoff. </li>                          
            <li>Implements Manual QA testing for Banking CRM, iOS and Android mobile, and SQL Server Sprocs. </li>  
            <li>Keeps wiki updated with repro.</li>  
            <li>Creates Scenarios in Specflow (Gerkhin) language for automation with Acceptance Criteria.</li>  
            <li>Creates Automated tests with Selenium and C#.</li>  
            </ul>
            </div></div></div></div>`;
            break;
        case "acxiom":
            description = `<div id="acxiom-description">(2015-2016) Acxiom - Email Developer
            </div><div><div>Highlights:</div>
            <div id="containerSurround">
            
            <div id="experience-logo"><img src='images/icons/noun_Email Marketing_3188032.png'/></div>
            <div id="experience-description"><ul><li>Worked directly with Sam's Club, CTFS, and Sallie Mae marketing. </li>  
            <li>Provided service to coworkers by helping with email QAs.</li>   
            <li>Prioritized work that including immediate launch and up to five day turnarounds. </li>  
            </div></div></div></div>`;
            break;
        case "jackroe":
            description = `<div id="jackroe-description">(2018-2019) Jack Roe USA - Tech Support
            and QA</div><div><div>Highlights:</div>
            <div id="containerSurround">
            
            <div id="experience-logo"><img src='images/icons/noun_tech support_368088.png'/></div>
            <div id="experience-description"><ul><li>Implemented Manual QA testing for web, desktop, mobile, and command line systems.
            <li> Utilized spec to draw up use cases in excel, copying database data, and reporting findings back to developer. </li>  
            <li>Deployed IOS and Android apps, and set up Google Analytics dashboard.</li>        
            <li>Created Jira Specs including db tables, function, and UI. </li>  
            </div></div></div></div>`;
            break;
        case "nss":
            description = `<div id="nss-description">
            <div>(2010-2014) Western Kentucky University</div>
            <div>Computer Science / Minor in Advertising</div>

        </div><div><div>Highlights:</div>
        <div id="containerSurround">
            <div id="experience-logo"><img src='images/icons/noun_education_1013174.png'/></div>
            <div id="experience-description">
            <ul>
                <li>.Net and React</li>
                <li>Javascript Single Page Apps</li>
                <li>Teambuilding within SDLC</li>
                <li>Weekly, Midterm and Final Projects</li>
            </ul>
            </div>
            </div>
           </div>
        </div>`;
            break;
        case "wku":
            description = `<div id="wku-description">
            <div>(2010-2014) Western Kentucky University</div>
            <div>Computer Science / Minor in Advertising</div>

        </div><div><div>Highlights:</div>
        <div id="containerSurround">
            
            <div id="experience-logo"><img src='images/icons/noun_education_1013174.png'/></div>
            <div id="experience-description">
            <ul>
                <li>Student Developer: Potter College</li>
                <li>Intern: Imagewest</li>
                <li>Intern: Hitcents.com</li>
                <li>Student Assistant: WKU Networking Department</li>
                <li>Student Developer: WKU Library</li>
            </ul>
            </div>
            </div>
           </div>
        </div>`;
            break;
        default: "";
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
