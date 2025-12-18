# Notes Backend Application (File-Based)
A simple Notes Management backend application built for practice using Node.js, Express.js, and EJS.
This project performs full CRUD operations without using any database. Instead, it uses Node.js File System (fs) module, where each note is stored as a separate .txt file.

# Project Overview
This application allows users to:
Create notes/tasks
View all saved notes
Read note content
Edit note filename
Delete notes

Each note is saved as a .txt file inside a dedicated folder, making this project ideal for understanding backend fundamentals, routing, EJS templating, and file-based data handling.

🛠️ Tech Stack
Node.js – JavaScript runtime
Express.js – Backend framework
EJS – Template engine for UI rendering
File System (fs) – For file-based CRUD operations
HTML & CSS – UI structure and styling

⚙️ Features
Create notes with title and content
Automatically generates .txt files
Displays all notes dynamically
Read note content using EJS
Rename note files
Delete notes permanently
No database required

▶️ How to Run the Project
1. Clone the repository                -->         git clone <your-github-repo-link>
2. Navigate to the project directory   -->         cd project-folder
3. Install dependencies                -->         npm install
4. Start the server                    -->         node app.js
5. Open browser and visit:             -->         http://localhost:3000

📌 Purpose of This Project
This project is built purely for practice to strengthen understanding of:
Backend routing
Server-side rendering using EJS
File-based data handling
Express middleware
CRUD logic without databases

It serves as a foundation before moving to database-driven applications like MongoDB or MySQL.
