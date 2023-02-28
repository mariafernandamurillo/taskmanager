/*Following the SRP (Single Responsability Principle)
we create the class for manage the tasks in one separate file */

class Task{

    constructor(isImportant, title, description, category, dueDate, priority, color){
        this.isImportant = isImportant;
        this.title = title;
        this.description = description;
        this.category = category;
        this.dueDate = dueDate;
        this.priority = priority;
        this.color = color;

        this.name = "Fernanda";
    }

}