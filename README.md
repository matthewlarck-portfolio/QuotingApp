# Quoting App — B2B SaaS Application

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A real-world B2B SaaS quoting application built to support business workflows for generating and managing product quotes.

Originally developed for practical use, this application now serves as a production-like environment for validating complex UI flows, pricing logic, and data persistence.

---

## Live Demo

https://designerblinds-c482a.web.app

A demo account is available on the sign-in page.

---

## Core Features

* User authentication
* Quote creation workflow
* Dynamic product selection
* Pricing logic based on dimensions
* Form validation
* Firestore data persistence
* Quote management and retrieval

---

## Tech Stack

* React
* Firebase Authentication
* Firestore
* Firebase Hosting

---

## Architecture Overview

The application is structured around a multi-step quote creation flow:

* Customer information input
* Product and configuration selection
* Dynamic pricing calculation
* Quote persistence and retrieval

State is managed across multiple components with asynchronous data loading from Firestore.

---

## Getting Started

### Prerequisites

* Node.js 20+
* npm

---

### Clone Repository

```bash
git clone https://github.com/matthewlarck-portfolio/QuotingApp.git
cd QuotingApp
```

---

### Install Dependencies

```bash
cd frontend
npm ci
```

---

### Run Development Server

```bash
npm start
```

The app will be available at:

```bash
http://localhost:3000
```

---

## Deployment

The application is deployed using Firebase Hosting.

CI/CD is handled via GitHub Actions:

* Builds the React application
* Deploys to Firebase on successful build

---

## Testing

End-to-end test automation is maintained in a separate repository:

👉 https://github.com/matthewlarck-portfolio/playwright-quote-automation

This separation reflects a real-world architecture where application code and automation frameworks are managed independently.

---

## Recent Improvements

* Refactored quote page into modular components
* Simplified product and pricing logic
* Removed deprecated features and unused code
* Improved form validation and state handling

---

## Roadmap

* Continue UI and state management improvements
* Enhance quote editing workflows
* Improve performance of dynamic data loading
* Expand feature set for business use cases

---

## Notes

This project reflects a transition from a business-focused application to a structured engineering project, emphasizing maintainability, scalability, and real-world workflows.
