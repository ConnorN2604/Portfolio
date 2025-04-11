import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import from 'react-dom/client'
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using createRoot and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
