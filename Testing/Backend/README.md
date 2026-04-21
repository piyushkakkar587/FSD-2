# Experiment-20: Implement CI/CD Pipeline for Application Deployment

## Submission Date

22 April 2026

---

## Objective

To implement a CI/CD pipeline for application deployment by integrating Docker and GitHub Actions with the backend testing project.

---

## Tools and Technologies Used

* Docker
* GitHub Actions
* Python (Flask)
* Pytest
* Git and GitHub

---

## Project Structure

```
Testing/
│
├── Backend/
│   ├── app.py
│   ├── run.py
│   ├── requirements.txt
│   ├── Dockerfile
│
└── .github/
    └── workflows/
        └── cd.yml
```

---

## Step 1: Dockerization of Backend

### Create Dockerfile

```
FROM python:3.10

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "run.py"]
```

---

### Build Docker Image

```
docker build -t backend-app .
```

---

### Run Docker Container

```
docker run -d -p 5000:5000 --name backend-container backend-app
```

---

## Step 2: Testing

Run backend tests using:

```
pytest
```

---

## Step 3: CI/CD Pipeline using GitHub Actions

### Workflow File: `.github/workflows/cd.yml`

```
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: Testing/Backend

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Install Dependencies
        run: pip install -r requirements.txt

      - name: Run Tests
        run: pytest

      - name: Build Docker Image
        run: docker build -t backend-app .

      - name: Run Docker Container
        run: docker run -d -p 5000:5000 backend-app
```

---

## Pipeline Workflow

1. Code is pushed to GitHub
2. GitHub Actions workflow is triggered
3. Dependencies are installed
4. Tests are executed using pytest
5. Docker image is built
6. Container is deployed

---

## Output Screenshots (to be attached)

* Docker image created (`docker images`)
* Running container (`docker ps`)
* GitHub Actions workflow execution

---

## Key Features

* Automated testing and deployment
* Containerization using Docker
* Continuous integration using GitHub Actions

---

## Conclusion

This experiment demonstrates the implementation of a CI/CD pipeline using Docker and GitHub Actions. The pipeline automates testing, building, and deployment processes, ensuring efficient and reliable application delivery.

---

## Commands Summary

```
docker build -t backend-app .
docker run -d -p 5000:5000 backend-app
docker ps
docker images
```

---

## Author

Piyush Kakkar
