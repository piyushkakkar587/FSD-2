AIM
To design a responsive and interactive User Interface (UI) using Component Libraries such as Material UI and Bootstrap, and to deploy the web application on Netlify using GitHub as a version control platform.

THEORY
What is a Component Library?
A component library is a collection of pre-built, reusable UI components such as buttons, forms, cards, navigation bars, modals, etc., that help developers build web applications faster and consistently.

Instead of writing everything from scratch in HTML, CSS, and JavaScript, developers can use libraries like:

Material UI (MUI) → For React-based applications

Bootstrap → For responsive web design

Material UI (MUI)
Material UI is a popular React UI framework based on Google’s Material Design principles. It provides:

npm -v
Step: Create React App
Open VS Code terminal and run:
npm create vite@latest my-ui-app
Choose:

Framework → React

Variant → JavaScript

npm install
npm run dev
Step 3: Install Material UI
Run in VS Code terminal:

npm install @mui/material @emotion/react @emotion/styled
Step 4: Create UI Component
Create a file ButtonBasic.jsx and add:

jsx
Copy code
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ButtonBasic() {
  return (
    <>
      <Button variant="contained">Click Me</Button>
      <TextField label="Enter Name" variant="outlined" />
    </>
  );
}
Import it in App.jsx:

jsx
Copy code
import ButtonBasic from "./ButtonBasic";

function App() {
  return (
    <div>
      <h1>Material UI Demo</h1>
      <ButtonBasic />
    </div>
  );
}
npm run dev
Upload to GitHub
Initialize Git
In VS Code terminal:
git init
git add .
git commit -m "Initial UI project"
Create GitHub Repository
Go to: https://github.com
Click New Repository → Name it mui-ui-project

Push Code to GitHub
Run in VS Code:
git remote add origin <your-repo-link>
git branch -M main
git push -u origin main
Your project is now on GitHub. 


Build Project
In VS Code run:

npm run build
This creates a dist folder.
Step 9: Deploy to Netlify
Go to https://www.netlify.com
Click Sign Up with GitHub
Click Add New Site → Import from GitHub
Select your repository
Click Deploy
Netlify will generate a live website link like:

https://your-project-name.netlify.app
Your project is now LIVE on the internet. 

<img width="1920" height="1080" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/01260e9f-3a81-45c0-b7cb-8c650e437e7a" />


LEARNING OUTCOMES
After completing this experiment, the student will be able to:
Understand the concept of UI component libraries.
Design user-friendly interfaces using Material UI and Bootstrap.
Develop React-based UI applications.
