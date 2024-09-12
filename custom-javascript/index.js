// index.js

const core = require('@actions/core');

try {
  // Get the name input provided by the workflow
  const name = core.getInput('name');
  
  // Print the greeting
  console.log(`Hello, ${name}!`);
  
  // Set the output for further steps (optional)
  core.setOutput('greeting', `Hello, ${name}!`);
  
} catch (error) {
  // If an error occurs, fail the action
  core.setFailed(error.message);
}
