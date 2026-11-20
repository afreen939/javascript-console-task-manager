// JavaScript Console Task Manager

let tasks = [];

console.log("Welcome to JavaScript Console Task Manager!");

// Function 1: Add a new task
function addTask(title, priority) {
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false,
        priority: priority
    };

    tasks.push(newTask);
    console.log("Task added successfully:", newTask);
}

// Function 2: View all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available");
    } else {
        console.log("===== ALL TASKS =====");

        for (let task of tasks) {
            console.log("--------------------");
            console.log("ID:", task.id);
            console.log("Title:", task.title);
            console.log("Completed:", task.completed);
            console.log("Priority:", task.priority);
        }
    }
}

// Function 3: Complete a task
function completeTask(id) {
    let taskFound = false;

    for (let task of tasks) {
        if (task.id === id) {
            task.completed = true;
            console.log("Task completed successfully:", task.title);

            taskFound = true;
            break;
        }
    }

    if (!taskFound) {
        console.log("Task not found");
    }
}

// Function 4: Delete a task
function deleteTask(id) {
    const oldLength = tasks.length;

    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    if (tasks.length < oldLength) {
        console.log("Task deleted successfully");
    } else {
        console.log("Task not found");
    }
}

// Function 5: View pending tasks
function viewPendingTasks() {
    const pendingTasks = tasks.filter(function (task) {
        return task.completed === false;
    });

    if (pendingTasks.length === 0) {
        console.log("No pending tasks");
    } else {
        console.log("===== PENDING TASKS =====");

        for (let task of pendingTasks) {
            console.log(task);
        }
    }
}

// Function 6: View completed tasks
function viewCompletedTasks() {
    const completedTasks = tasks.filter(function (task) {
        return task.completed === true;
    });

    if (completedTasks.length === 0) {
        console.log("No completed tasks");
    } else {
        console.log("===== COMPLETED TASKS =====");

        for (let task of completedTasks) {
            console.log(task);
        }
    }
}

// Function 7: Search task
function searchTask(keyword) {
    const searchKeyword = keyword.toLowerCase();

    const matchingTasks = tasks.filter(function (task) {
        return task.title.toLowerCase().includes(searchKeyword);
    });

    if (matchingTasks.length === 0) {
        console.log("No matching task found");
    } else {
        console.log("===== SEARCH RESULTS =====");

        for (let task of matchingTasks) {
            console.log(task);
        }
    }
}

// Function 8: Update task title
function updateTask(id, newTitle) {
    let taskFound = false;

    for (let task of tasks) {
        if (task.id === id) {
            task.title = newTitle;

            console.log("Task updated successfully");

            taskFound = true;
            break;
        }
    }

    if (!taskFound) {
        console.log("Task not found");
    }
}

// Function 9: Count tasks
function countTasks() {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(function (task) {
        return task.completed === true;
    }).length;

    const pendingTasks = tasks.filter(function (task) {
        return task.completed === false;
    }).length;

    console.log("===== TASK SUMMARY =====");
    console.log("Total Tasks:", totalTasks);
    console.log("Completed Tasks:", completedTasks);
    console.log("Pending Tasks:", pendingTasks);
}

// Function 10: Sort tasks by priority
function sortByPriority() {
    const priorityOrder = {
        high: 1,
        medium: 2,
        low: 3
    };

    tasks.sort(function (a, b) {
        return priorityOrder[a.priority.toLowerCase()] -
               priorityOrder[b.priority.toLowerCase()];
    });

    console.log("===== TASKS SORTED BY PRIORITY =====");
    viewTasks();
}

// ===================================
// FINAL TESTING
// ===================================

console.log("\n===== ADDING 5 TASKS =====");

addTask("Learn JavaScript", "high");
addTask("Practice Arrays", "medium");
addTask("Build Portfolio", "low");
addTask("Revise Functions", "high");
addTask("Read Objects", "medium");

console.log("\n===== VIEW ALL TASKS =====");
viewTasks();

console.log("\n===== COMPLETE 2 TASKS =====");
completeTask(1);
completeTask(2);

console.log("\n===== VIEW COMPLETED TASKS =====");
viewCompletedTasks();

console.log("\n===== VIEW PENDING TASKS =====");
viewPendingTasks();

console.log("\n===== SEARCH TASK =====");
searchTask("portfolio");

console.log("\n===== UPDATE TASK =====");
updateTask(3, "Build Task Manager Project");

console.log("\n===== DELETE TASK =====");
deleteTask(5);

console.log("\n===== COUNT TASKS =====");
countTasks();

console.log("\n===== SORT BY PRIORITY =====");
sortByPriority();
