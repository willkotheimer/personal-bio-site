
Personal Site

## Motivation
The motivation behind this is first, to keep my personal projects, and second to allow the
viewer to be able to understand more about me. 

## Build status
MVP complete. Future: I hope to be able to add more projects and update the overall UI to
include some fun onscrolling events, a clickable interface to sort projects by tech used,
and even type: prototype, finished product and pertinent design information.

## Code Style
Vanilla Javascript ES6, Jquery, HTML5, CSS3

## Screenshots

*Banner*
![](https://github.com/willkotheimer/personal-bio-site/blob/master/Personal_top.PNG)

*Draggable section*
![](https://github.com/willkotheimer/personal-bio-site/blob/master/Personal_Middle.PNG)

## URL

[willkotheimer.netlify.app](willkotheimer.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a249229b-ba1b-426b-b26b-f0cf19537e6c/deploy-status)](https://app.netlify.com/sites/willkotheimer/deploys)

## Features
This site features a personal projects, and some drag and drop functionality with the employment section.

## Code Example
```

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

```
## Github owner

[Will Kotheimer](https://github.com/willkotheimer)

