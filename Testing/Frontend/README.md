Experiment: Fullstack Testing (Frontend + Backend)

Objective
To perform testing on both frontend and backend components of an application using modern testing tools and integrate them using GitHub Actions for continuous integration.

Tools and Technologies
Frontend: Vite, Vitest, React Testing Library, jsdom
Backend: Python, Pytest
CI/CD: GitHub Actions

Procedure

Frontend Testing
First, install the required dependencies such as vitest, testing library, and jsdom. Configure vite.config.js to enable the testing environment using jsdom. Create a setupTests.js file to include jest-dom for better assertions. Develop a simple login form component and write test cases to verify rendering of fields, validation for password length, and successful form submission. Run the tests using Vitest and ensure all test cases pass.

Backend Testing
Install required Python dependencies from requirements.txt. Write test cases using pytest to validate backend functionality. Execute the tests and verify that all backend test cases pass successfully.

CI/CD Integration
Create a GitHub Actions workflow file. Configure separate jobs for backend and frontend testing. For backend, set up Python, install dependencies, and run pytest. For frontend, set up Node.js, install dependencies using npm ci, and run Vitest tests. Push the code to GitHub and verify that the workflow runs automatically and all tests pass.

Result
All frontend and backend test cases were executed successfully. GitHub Actions workflow also ran successfully, ensuring continuous integration.

Learning Outcomes

Gained understanding of frontend testing using Vitest and React Testing Library

Learned how to write and execute backend test cases using Pytest

Understood how to validate form inputs and handle user interactions in tests

Learned to configure and run tests in a Vite environment

Gained knowledge of integrating frontend and backend testing in a single project

Understood the working of GitHub Actions for CI/CD automation


Learned how to debug errors in testing and CI pipelines

<img width="1920" height="1080" alt="Screenshot (200)" src="https://github.com/user-attachments/assets/5d61f708-2b0d-46a8-9563-7a802562d12e" />
<img width="1920" height="1080" alt="Screenshot (201)" src="https://github.com/user-attachments/assets/922a4d4f-e121-4b59-9f6d-a05ddce62b3f" />
<img width="1920" height="1080" alt="Screenshot (202)" src="https://github.com/user-attachments/assets/0213f66e-afad-4655-9860-648ae35f9025" />




