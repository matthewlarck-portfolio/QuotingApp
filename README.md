# # Quoting App — System Under Test (SaaS Application)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


## Screenshots

### Application Workflow (System Under Test)

#### Quote Creation Flow
![Quote Creation](./screenshots/1.png)

#### Completed Quote with Data Persistence
![Saved Quote](./screenshots/2.png)

---

### System Behavior & Validation

#### Form Validation & Error Handling
![Validation](./screenshots/3.png)

#### Pricing Logic & State Management
![Pricing Logic](./screenshots/4.png)


This project is a real-world B2B SaaS application that serves as a **System Under Test (SUT)** for validating end-to-end workflows, system behavior, and application reliability under realistic conditions.

Originally built for business use, this application is now used to simulate real user workflows and support system-level testing through an external automation framework.

---

## Associated Test Automation Framework

This application is validated by a separate system-level test automation framework:

👉 https://github.com/matthewlarck-portfolio/playwright-quote-automation

The framework performs:

- End-to-end system validation across real user workflows  
- Integration testing between UI, API, and database layers  
- Continuous validation through CI/CD pipelines  

This separation reflects a production-like architecture where the system and its validation framework are maintained independently.

---

## Live Demo

https://designerblinds-c482a.web.app  

A demo account is available on the sign-in page.

---

## System Overview

This application simulates real-world business workflows involving:

- Authentication and session handling  
- Quote creation and user input flows  
- Pricing logic and calculations  
- Form validation and error handling  
- Firestore data persistence and retrieval  

The system is designed to support testing of real user behavior, data integrity, and application reliability.

---

## System Architecture

### Application (System Under Test)
- React frontend  
- Firebase Authentication  
- Firestore database  
- Firebase Hosting  

### Test Framework (External Repository)
- Playwright (TypeScript)  
- CI/CD via GitHub Actions  

The test framework interacts with the deployed application to validate system behavior under real-world conditions.

---

## Engineering Focus

This project emphasizes:

- System-level validation over isolated UI testing  
- Integration testing across frontend, backend, and data layers  
- Debugging and root cause analysis across application components  
- Reliability and consistency of application behavior  

Testing is designed to evaluate how the system behaves as a whole, not just individual components.

---

## Current Coverage (via External Test Framework)

Automated validation currently focuses on:

- Authentication workflows and session management  
- Quote creation and data persistence  
- Required field validation and error handling  
- Pricing logic validation and workflow state transitions  
- Critical-path smoke tests for system stability  

Additional regression and API validation coverage is in progress.

---

## Getting Started

### Prerequisites

- Node.js 20+  
- npm  

---

### Clone Repository

```bash
git clone https://github.com/matthewlarck-portfolio/QuotingApp.git
cd QuotingApp

npm ci
cd frontend
npm ci

cd frontend
npm start
