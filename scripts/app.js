//The clasess of the Importance Icon
var noImportant = "fa-regular fa-bookmark";
var important = "fa-solid fa-bookmark";

//The classes of the Create Task Button
var showForm = "btn btn-primary";
var hideForm = "btn btn-secondary";

//Flag to follow the status of the icon
var isImportant = false;

//Flaf to follow the visibility of the form
var createTaskFlag = true;

//Find HTML elements
let importanceIcon = $("#importantIcon");
let createTaskButton = $("#btnCreateTask");
let createTaskForm = $("form");

function toggleImportant() {

    if (isImportant) {
        //change to important
        isImportant = false;

        //Change the icon
        importanceIcon.removeClass(important).addClass(noImportant);
    } else {
        //chage to no important.
        isImportant = true;
        //Search for the element everytime we need it, not a good practice. Do all in one line.
        importanceIcon.removeClass(noImportant).addClass(important);
    }
}

function createTask(){
    //console.log("Create a Task");
    if(createTaskFlag){ //If the form is visible
        createTaskFlag = false;

        //Change the button 
        createTaskButton.removeClass(hideForm).addClass(showForm);

        //Hide the form
        createTaskForm.hide();

    }else{
        createTaskFlag = true;

        //Change the button 
        createTaskButton.removeClass(showForm).addClass(hideForm);

        //Show the form
        createTaskForm.show();
    }
}

function init() {
    console.log("Task manager");

    //hook events
    importanceIcon.click(toggleImportant);
    createTaskButton.click(createTask);

    //load data

}

window.onload = init;