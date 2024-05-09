# Performance Test Template

## Introduction
This repository contains the template for performance testing. It provides a structured approach to conducting performance tests for software applications.

## Getting Started
To begin using this template, follow these steps:

1. Clone the project using `git clone`.
2. Run `npm i` to install dependencies.
3. Run `npm run dev` to start the local development sever.
4. Start coding in `test.tsx` (or any file you want).



================================================================
## Test Description
**Create a todo list application which satisfies the following requirements:**

1. Use **Typescript** - all any type are forbidden, for styling, you can choose between **tailwind** or **scss module**.
2. Ability to **(TOTAL: 40pts)**
     - Create to-dos **(10pts)**
     - Delete to-dos **(10pts)**
     - Check to-dos (switch status between pending and complete). **(10pts)**
     - Each to-do should contain a Label and a Description content. **(10pts)**
3. Ability to filter between/by **(TOTAL: 20pts)**
     - All tasks **(5pts)**
     - Pending tasks, **(5pts)**
     - Completed tasks, **(5pts)**
     - Search text. **(5pts)**
4. Ability to SAVE YOUR DATA PERSIST using local storage. (upon reloading or close the browser, the next time you open it up all data should remain persistent) **(15pts)**
5. Ability to drag and drop to-dos to rearrange the order of tasks. **(20pts)**

**Optional Enhancements:** **(TOTAL: 35pts)**
1. Form validation: Validate the input fields (prevent submission, error message, etc,...). **(5pts)**
2. Add a popup to confirm deletion (use a normal div or more advanced - use React portal).  **(10pts)**
3. Style your app to make it look nice. **(10pts)**
4. Improve code organization **(10pts)**


================================================================

- **MAX POINT: 130**
- **PASS POINT: 75 or above**

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
    // get the drag id
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    // get the drop id
  };

  // This is mandatory for drag and drop to work properly
  // Source: https://developer.mozilla.org/
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    // Add your logic here
  };

  const handleDrop = (e) => {
   // Add swap element logic here
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnterCapture={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      Drag me!
    </div>
  );
};

export default DraggableComponent;
```
# React Portal API in React

## Introduction
This document explains how to use the React portal to create element on a separate layer.
The reason why we should use React Portal is that when we want to escape a component out of its parent nodes
- To the React context, React Portal is still child of it Parent Component (so that props, context, etc,... will works normally)
- To the Dom, the element return by React Portal is on the top level (in this case one level down inside the body, so that it can avoid the css of its parent node like "overflow: hidden")

## Setup
Ensure that you have a React project set up with the necessary dependencies installed.

## Usage

### Basic Example

```jsx
import { createPortal } from 'react-dom';

export default function TestReactPortalComponent() {
  return (
    <div style={{ border: '2px solid black', overflow: "hidden" }}>
      <p>This child is placed in the parent div and will be hidden.</p>
      {createPortal(
        <p>This child is placed in the DOCUMENT BODY and will NOT be hidden.</p>,
        document.body
      )}
    </div>
  );
}


