Full Stack Development involves working on both the front end (what the user sees) and the back end (the server and database) of an application.

Front End: React JS is used to build the user interface.
Back End: Node.js and Express.js are used to create the server-side logic.
Database: MongoDB is used as the data storage server.
Languages: The core languages used include HTML, CSS, JavaScript (JS), and Node JS.

Client (Browser): This is where users open or visit applications. The browser reads the HTML, CSS, and JS returned by the server.

Layouts:

Flex: A one-dimensional tool used to arrange items in one direction at a time.

Grid: A two-dimensional tool used to design layouts using both rows and colu

Localhost: This is the domain name of your own machine.

JSON (JavaScript Object Notation): A format used to represent data as an object. It is commonly used to send data from the browser to the back-end server.

SPA (Single Page Application): In an SPA, the browser makes only one request to the server, which returns the HTML, CSS, and JS all at once. After that, JavaScript handles everything without needing further page reloads.

MPA (Multiple Page Application): Here, the browser sends a new request to the server every time the user moves to a different part of the site (like searching for a product on Flipkart), and the server sends back new content each time.


Node Modules: This is a very large folder that stores all the libraries and packages your project needs. It is automatically updated when you run npm install.

gitignore: This is a file that tells Git which files or folders not to upload to GitHub. We use it for files that are too big or not important to share, such as the node_modules folder.

Build Process: Running npm run build creates a new folder called dist. This folder contains the "static" version of your application (minified HTML, CSS, and JS) ready for deployment.

Setting Up a React Server

To start a new project, follow these steps in your terminal:

Create a Workspace: Create a folder on your system and open it in VS Code.

Clone a Repo: Use git clone [link] to copy a repository, then navigate into the folder using the cd command.

Create the App: Run npm create vite@latest [folder-name]. Select "React" as the framework and "JavaScript" as the variant.

Run the Server: Use npm run dev to start the development server.

Common Git Commands

To push your work to GitHub, use these commands in order:

git status: Shows which folders/files have changed.

git add [folder-name]: Stages your changes for upload.

git commit -m "your message": Saves your changes locally with a note.

git push origin [branch-name]: Sends your changes to the online repository.























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
