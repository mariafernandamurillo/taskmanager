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
let saveTaskButton = $("#btnSaveTask");

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

function saveTask(){
    //console.log("Save Task");
    let title = $("#taskTitle").val();
    let description = $("#taskDescription").val();
    let dueDate = $("#taskDueDate").val();
    let category = $("#taskCategory").val();
    let color = $("#taskColor").val();
    let priority = $("#taskPriority").val();


    //console.log( title, description,  dueDate, category, color, priority);

    /*Create a new task (object) using the class 
    created in task.js */
    let task = new Task(isImportant, title, description, category, dueDate, priority, color);

    console.log(task);
    
    //Display a task in screen
    displayTask(task);

    clearForm();
}

function clearForm(){
    $("#taskTitle").val('');
    $("#taskDescription").val('');
    $("#taskDueDate").val('');
    $("#taskCategory").val('');
    $("#taskColor").val('');
    $("#taskPriority").val('');
}

function displayTask(task){

    let icon = "";

    if(task.isImportant){
        icon = `<i style="font-size: 20px" class='${important}'></i>`
    }else{
        icon = `<i style="font-size: 20px"  class='${noImportant}'></i>`
    }

    let syntax = `
    <div class="task" style="border: 1px solid ${task.color}">
       
        ${icon}

        <div class="info">
            <h5>${task.title} <i style="color:${task.color}" class="fa-solid fa-tag"></i> <i onclick="deleteTask()" class="fa-solid fa-trash"></i></h5>
            <p>${task.description}</p>
        </div>

        <label class="category"> <span class="bold-text">Due Date:</span> ${task.dueDate}</label> 

        <div class="details">
            <label> <span class="bold-text">Priority:</span> ${task.priority}</label>
            <label> <span class="bold-text">Category:</span> ${task.category}</label>
        </div>
        
    </div>
    
    `;

    $("#pending-tasks").append(syntax);
}

function deleteTask(){
    alert("click");
}

function init() {
    console.log("Task manager");

    //hook events
    importanceIcon.click(toggleImportant);
    createTaskButton.click(createTask);
    saveTaskButton.click(saveTask);

    //load data

}

window.onload = init;