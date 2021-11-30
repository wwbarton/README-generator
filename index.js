const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const util = requir("util");
// questions to ask the user //
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  },

  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project by asking: 'What was your motivation?', 'Why did you build this project?', 'What problem does it solve?' and 'What did you learn?'",
    name: "Description",
  },
  {
    type: "input",
    message: "What is needed for installation to make this run?",
    name: "Installation",
  },
  {
    type: "input",
    message: "How is this used? Provide instructions",
    name: "Usage",
  },
  {
    type: "list",
    name: "license",
    message: "Please select which license you would like to use.",
    choices: ["APACHE 2.O", "BSD 3", "GVL-GPL 3.0", "MIT", "None"],
  },
  {
    type: "input",
    message: "Are there contributors? If yes, add them.",
    name: "contributors",
  },
  {
    type: "input",
    message: "What is needed to fufil tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "Info for pertaining questions.",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your username for Github?",
    name: "username",
  },
  {
    type: "input",
    message: "what is your email?",
    name: "email",
  },
  
];

// Function to write to my ReadMe.md file. //
// inquirer.prompt(questions).then(function (response) {
//   console.log(response);

  var content = generateMarkdown(response);
  console.log(content);
  fs.writeFile("./ReadMe.md", content, function (err) {
    if (err) throw err;
    console.log("success");
  });
});
