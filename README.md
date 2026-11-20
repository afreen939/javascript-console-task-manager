
# JavaScript Console Task Manager

## Project Overview
The JavaScript Console Task Manager is a console-based application that allows users to manage tasks using JavaScript arrays, objects, and functions.

## Objective
To understand and implement JavaScript functions, array methods, object manipulation, searching, filtering, updating, deleting, and sorting operations.

## Technologies Used
- JavaScript
- Node.js
- Visual Studio Code

## Features and Functions

1. **addTask(title, priority)** – Adds a new task with an ID, title, completion status, and priority.
2. **viewTasks()** – Displays all available tasks.
3. **completeTask(id)** – Marks a task as completed.
4. **deleteTask(id)** – Removes a task using its ID.
5. **viewPendingTasks()** – Displays tasks that are not completed.
6. **viewCompletedTasks()** – Displays completed tasks.
7. **searchTask(keyword)** – Searches tasks by title without case sensitivity.
8. **updateTask(id, newTitle)** – Updates an existing task's title.
9. **countTasks()** – Displays total, completed, and pending task counts.
10. **sortByPriority()** – Sorts tasks by high, medium, and low priority.

## Concepts Covered
- JavaScript Functions
- Arrays and Objects
- Function Parameters
- for...of loops
- forEach and filter concepts
- Array push() method
- Array sort() method
- Strict equality operator
- Conditional statements
- String toLowerCase() method
- String includes() method
- Object properties and property updates

## Final Testing

The project was tested with five sample tasks.

### Testing Operations
- Added 5 tasks.
- Viewed all tasks.
- Completed 2 tasks.
- Viewed completed and pending tasks.
- Searched for a task using a keyword.
- Updated one task title.
- Deleted one task.
- Counted all remaining tasks.
- Sorted tasks by priority.

### Final Output

| Category | Count |
|---|---:|
| Total Tasks | 4 |
| Completed Tasks | 2 |
| Pending Tasks | 2 |

### Priority Order
1. High
2. Medium
3. Low

## Final Reflection

**1. Which function was easiest?**

The addTask() function was easiest because it involved creating an object and adding it to an array.

**2. Which function was hardest?**

The sortByPriority() function was challenging because it required understanding how to compare string priorities using numeric values.

**3. Why did we use objects?**

Objects help store related task information such as ID, title, completion status, and priority in one structure.

**4. Why did we use arrays?**

Arrays allow us to store and manage multiple task objects together.

**5. What is the role of functions in this project?**

Functions divide the application into smaller reusable operations, making the code organized and easier to maintain.

**6. What mistake did you debug?**

I checked the task IDs, array updates, and function outputs during testing to ensure every operation worked correctly.

**7. What new JavaScript concept did you understand better?**

I understood object manipulation, array filtering, sorting, function parameters, and how multiple JavaScript concepts work together in a practical application.

## Project File

- index.js – Contains all 10 functions and final testing code.
- README.md – Contains project documentation and reflection.

## Conclusion

This project helped me understand how JavaScript arrays, objects, and functions can work together to build a practical task management application.
