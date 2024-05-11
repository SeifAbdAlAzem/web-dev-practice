# React Mini Tasks Repository

Welcome to the React Mini Tasks and Components Repository! This repository contains a collection of mini tasks and reusable components built using React. Whether you're a beginner looking to practice React concepts or a developer seeking ready-to-use components, this repository has something for you.

## Table of Contents

1. [Introduction](#introduction)
2. [Tasks](#tasks)
    - [Expense Tracker](#expense-tracker)
    - [Task Manager](#task-manager)
    - [Showing Alert Message](#showing-alert-message)
    - [Updating State](#updating-state)
3. [Components](#components)
    - [Expandable Text](#expandable-text)
    - [Cart](#cart)
    - [Like Button](#like-button)
    - [Pricing Component](#pricing-component)
4. [How to Use](#how-to-use)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

This repository serves as a resource for developers to explore and practice various React concepts through mini tasks and reusable components. Each task and component is designed to demonstrate specific functionalities or UI elements commonly encountered in web development projects.

Whether you're looking to learn how to handle forms, manage state, create dynamic UI components, or implement routing and navigation in React applications, you'll find practical examples and code snippets to guide you through the process.

Feel free to explore the tasks and components, experiment with the code, and incorporate them into your projects. Contributions, feedback, and suggestions for improvements are always welcome!

## Tasks

### Tasks Navigation

| Task Name   | Task Link                          |
|-------------|------------------------------------|
| Task 1      | [Link](Expense%20Tracker)          |
| Task 2      | [Link](Task%20Manager)             |
| Task 3      | [Link](Showing%20Alert%20Message)  |
| Task 4      | [Link](Updating%20State)           |

### Expense Tracker

The Expense Tracker task allows users to input details of their expenses using a form. It leverages React Hook Forms and Zod for form handling. After submission, the expense is added to a table with its details. Users can delete expenses and filter them. The table dynamically calculates the total price of viewed expenses.

### Task Manager

The Task Manager task consists of three pages using React Router for navigation. The first page displays tasks fetched from a JSON server ***run this command `json-server -w ./data/db.json` to watch the data***. The second page contains a form for adding tasks. The last page, "My Profile," features a Tabs component to switch between "My Tasks" and "My Info."

### Showing Alert Message

This task involves showing an alert message by pressing a button and removing it.

### Updating State

- This task includes three buttons:
- The first button adds one word to a string beside it when clicked.
- The second button adds a new topping to a pizza when clicked.
- The last button increases a counter when clicked.

## Components

### Components Navigation

| Component Name   | Component Link               |
|------------------|------------------------------|
| Component 1      | [Link](Expandable%20Text)    |
| Component 2      | [Link](Cart)                 |
| Component 3      | [Link](Like%20Button)        |
| Component 4      | [Link](Pricing%20Component)  |

### Expandable Text

The Expandable Text component allows users to expand or collapse text content, providing a more user-friendly reading experience.

### Cart

The Cart component features a beautiful UI created using Chakra UI. It contains a form for users to enter their details (name, city, address, country) and displays item details and total price. Users can switch to dark mode for improved visibility.

### Like Button

The Like Button component adds interactivity to your application, allowing users to like or favorite content with a single click.

### Pricing Component

The Pricing Component showcases various pricing plans with detailed features. It's perfect for displaying subscription options or product pricing.

## How to Use

To utilize Components or mini tasks from this repository, follow these steps:

1. **Install Dependencies**: Begin by installing the necessary dependencies. Run the command `npm i` in your terminal to install them automatically.

2. **Run Locally**: Once the dependencies are installed and the API key is set, you can run the project locally. Execute the command `npm run dev` in your terminal to start the development server.

Following these steps will allow you to successfully use Template 1 and explore its functionalities locally on your machine.

## Contributing

Contributions to this repository are welcome! Whether you want to add new tasks, components, or improvements, please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

This repository is licensed under the MIT License. Feel free to use the tasks and components for personal or commercial projects.

Thank you for visiting the React Mini Tasks and Components Repository! Happy coding!
