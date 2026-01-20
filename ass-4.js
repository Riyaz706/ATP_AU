// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. filter() to get only inStock products
const inStockProducts = cart.filter(product => product.inStock);
console.log("In-stock products:", inStockProducts);

// 2. map() to create new array with { name, totalPrice }
const productTotals = inStockProducts.map(product => ({
  name: product.name,
  totalPrice: product.price * product.quantity
}));
console.log("Product totals:", productTotals);

// 3. reduce() to calculate grand total cart value
const grandTotal = productTotals.reduce((sum, product) => sum + product.totalPrice, 0);
console.log("Grand total cart value:", grandTotal);

// 4. find() to get details of "Mouse"
const mouseDetails = cart.find(product => product.name === "Mouse");
console.log("Mouse details:", mouseDetails);

// 5. findIndex() to find position of "Keyboard"
const keyboardIndex = cart.findIndex(product => product.name === "Keyboard");
console.log("Index of Keyboard:", keyboardIndex);



// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];
// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [   
   { id: 1, name: "Ravi", marks: 78 },
   { id: 2, name: "Anjali", marks: 92 },  
   { id: 3, name: "Kiran", marks: 35 },
   { id: 4, name: "Sneha", marks: 88 },
   { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
const passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed students:", passedStudents);   
// 2. map() to add a grade field
const gradedStudents = students.map(student => {
   let grade;
   if (student.marks >= 90) {
       grade = 'A';
   } else if (student.marks >= 75) {
      grade = 'B';  
   } else if (student.marks >= 60) {
      grade = 'C';  
   }
   else {
      grade = 'D';  
   }
   return { ...student, grade };
}
);
console.log("Graded students:", gradedStudents);  
// 3. reduce() to calculate average marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Average marks:", averageMarks);  
// 4. find() the student who scored 92
const student92 = students.find(student => student.marks === 92);
console.log("Student who scored 92:", student92);  
// 5. findIndex() of student "Kiran"
const indexOfKiran = students.findIndex(student => student.name === "Kiran");
console.log("Index of Kiran:", indexOfKiran);



// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


const employees = [ 
   { id: 201, name: "Amit", salary: 45000, department: "IT" },
   { id: 202, name: "Neha", salary: 60000, department: "HR" },
   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];    
// 1. filter() employees from IT department
const itEmployees = employees.filter(employee => employee.department === "IT");
console.log("IT Department Employees:", itEmployees);  
// 2. map() to add netSalary = salary + 10% bonus
const employeesWithNetSalary = employees.map(employee => ({
   ...employee,
   netSalary: employee.salary + (employee.salary * 0.10)
}));
console.log("Employees with Net Salary:", employeesWithNetSalary);  
// 3. reduce() to calculate total salary payout
const totalPayout = employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log("Total Salary Payout:", totalPayout);  
// 4. find() employee with salary 30000
const employee30000 = employees.find(employee => employee.salary === 30000);
console.log("Employee with salary 30000:", employee30000);  
// 5. findIndex() of employee "Neha"
const indexOfNeha = employees.findIndex(employee => employee.name === "Neha");
console.log("Index of Neha:", indexOfNeha);  



// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"

const movies = [  
   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
// 1. filter() only "Sci-Fi" movies 
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

// 2. map() to return: "Inception (8.8)"
const movieTitlesWithRatings = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("Movie Titles with Ratings:", movieTitlesWithRatings);

// 3. reduce() to find average movie rating
const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
const averageRating = totalRating / movies.length;
console.log("Average Movie Rating:", averageRating);

// 4. find() movie "Joker"
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Details of 'Joker':", jokerMovie);

// 5. findIndex() of "Avengers"
const indexOfAvengers = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of 'Avengers':", indexOfAvengers);



// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

const transactions = [  
   { id: 1, type: "credit", amount: 5000 },
   { id: 2, type: "debit", amount: 2000 },
   { id: 3, type: "credit", amount: 10000 },
   { id: 4, type: "debit", amount: 3000 }
];
// 1. filter() all credit transactions
const creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log("Credit Transactions:", creditTransactions);  
// 2. map() to extract only transaction amounts
const transactionAmounts = transactions.map(txn => txn.amount);
console.log("Transaction Amounts:", transactionAmounts);  
// 3. reduce() to calculate final account balance
const finalBalance = transactions.reduce((balance, txn) => {
   return txn.type === "credit" ? balance + txn.amount : balance - txn.amount;
}, 0);
console.log("Final Account Balance:", finalBalance);  
// 4. find() the first debit transaction
const firstDebitTransaction = transactions.find(txn => txn.type === "debit");
console.log("First Debit Transaction:", firstDebitTransaction);  
// 5. findIndex() of transaction with amount 10000
const indexOf10000Amount = transactions.findIndex(txn => txn.amount === 10000);
console.log("Index of Transaction with Amount 10000:", indexOf10000Amount);      