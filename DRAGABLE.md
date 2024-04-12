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
    e.dataTransfer.setData('text/plain', e.target.id);
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
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    e.target.appendChild(draggedElement);
  };

  return (
    <div
      id="draggable"
      draggable="true"
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
