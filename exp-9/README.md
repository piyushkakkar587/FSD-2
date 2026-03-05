**Experiment:** **Token Based Authentication using Flask**
**Aim**
To implement authentication using tokens in a Python Flask backend and test the APIs using Postman.

**Description**
This experiment demonstrates different authentication techniques used in web applications. A Flask server is created with APIs that implement Basic Authentication, Simple Token Authentication, and JWT Authentication. These APIs are tested using Postman to verify secure access to protected resources.
**
Technologies Used**

Python
Flask
Flask-JWT-Extended
Postman

**APIs Implemented**
Method	Endpoint	Description
GET	/basic-protected	Access using Basic Authentication
POST	/token-login	Generate simple token
GET	/token-protected	Access using custom token header
POST	/jwt-login	Generate JWT token
GET	/jwt-protected	Access using JWT Bearer token
**How to Run**

Install required libraries:

pip install flask flask-jwt-extended

Run the Flask server:

python app.py

Test the APIs using Postman.

Learning Outcome

Understanding of API authentication methods

Implementation of token-based authentication

Use of JWT for secure API access

Testing APIs using Postman


<img width="1920" height="1080" alt="Screenshot (134)" src="https://github.com/user-attachments/assets/062f77d8-bed7-478e-86ad-e19c23e6cf8d" />

<img width="1920" height="1080" alt="Screenshot (135)" src="https://github.com/user-attachments/assets/ca13e095-234b-44d2-b6dc-46f23a824f00" />

<img width="1920" height="1080" alt="Screenshot (136)" src="https://github.com/user-attachments/assets/765ae3cd-3bc4-40ea-a354-c9f62e7b14b1" />


<img width="1920" height="1080" alt="Screenshot (137)" src="https://github.com/user-attachments/assets/b8894f67-61df-48dd-b77b-fcceb337b382" />

<img width="1920" height="1080" alt="Screenshot (138)" src="https://github.com/user-attachments/assets/0364619d-1cef-45ac-8d1b-ed3b694e96ca" />
