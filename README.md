# Performance Test Template

## Introduction
This repository contains the template for performance testing. It provides a structured approach to conducting performance tests for software applications.

## Getting Started
To begin using this template, follow these steps:

1. Clone the project using `git clone`.
2. Run `npm i` to install dependencies.
3. Start coding in `test.tsx` (or any file you want).



================================================================
## Test Description
**Create a todo list application which satisfies the following requirements:**

1. Use typescript, for styling, you can choose between tailwind or scss module.
2. Ability to create, delete, and check to-dos. Each to-do should contain a label and a description content.
3. Ability to filter between all tasks, pending tasks, and completed tasks, and filter by label.
4. Ability to collapse and expand individual tasks, and a button to expand or collapse all tasks.
5. Ability to drag and drop to-dos to rearrange the order of tasks.

**Optional Enhancements:**
1. Form validation: Validate the input fields.
2. Add a popup to confirm deletion (use a normal div or more advanced - use React portal).
3. Style your app to make it look nice.

================================================================


# Draggable API with Event Listeners in React

## Introduction
This document explains how to use the HTML5 Draggable API with event listeners in a React application.

## Setup
Ensure that you have a React project set up with the necessary dependencies installed.

## Usage

### Basic Example

```jsx
import React from 'react';

const DraggableComponent = () => {
  const handleDragStart = (e) => {
    // Add your logic here
  };

  const handleDrag = (e) => {
    // Add your logic here
  };

  const handleDragEnter = (e) => {
    // Add your logic here
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    // Add your logic here
  };

  const handleDragLeave = (e) => {
    // Add your logic here
  };

  const handleDrop = (e) => {
   // Add your logic here
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      Drag me!
    </div>
  );
};

export default DraggableComponent;
