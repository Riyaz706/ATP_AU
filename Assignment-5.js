// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// 1. Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

// 2. Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";
console.log("User with lastLogin:", user);

// 3. Update role from "student" to "admin"
user.role = "admin";
console.log("User with updated role:", user);

// 4. Delete the isActive property
delete user.isActive;
console.log("User without isActive:", user);

// 5. Use Object.keys() to list all remaining fields
const remainingFields = Object.keys(user);
console.log("Remaining fields:", remainingFields);


// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks
const totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
console.log("Total marks:", totalMarks);

// 2. Calculate average marks
const averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average marks:", averageMarks);

// 3. Find the highest scoring subject
const highestSubject = Object.entries(marks).reduce((highest, [subject, mark]) => {
    return mark > highest.mark ? { subject, mark } : highest;
}, { subject: "", mark: -Infinity });
console.log("Highest scoring subject:", highestSubject.subject);

// 4. Add a new subject computer: 90
marks.computer = 90;
console.log("Updated marks:", marks);


// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

// Test data:
// const settings = {
//   theme: "light",
//   notifications: true,
//   autoSave: false,
//   language: "en"
// };


// Tasks :
//     1.Toggle theme between "light" and "dark"
//     2. Turn autoSave to true
//     3. Remove the notifications setting
//     4. Freeze the settings object so it cannot be modified

const settings = {
   theme: "light",
   notifications: true,
   autoSave: false,
   language: "en"
};

// 1. Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";
console.log("Toggled theme:", settings.theme);

// 2. Turn autoSave to true
settings.autoSave = true;
console.log("AutoSave enabled:", settings.autoSave);

// 3. Remove the notifications setting
delete settings.notifications;
console.log("Settings without notifications:", settings);

// 4. Freeze the settings object so it cannot be modified
Object.freeze(settings);
settings.language = "fr"; // This will not have any effect
console.log("Final settings (after freeze):", settings); 
