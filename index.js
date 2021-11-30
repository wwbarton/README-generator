const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generatorMarkdown = require("./utils/generateMarkdown");
// questions to ask the user //

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },

  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project by asking: 'What was your motivation?', 'Why did you build this project?', 'What problem does it solve?' and 'What did you learn?'",
    name: "description",
  },
  {
    type: "input",
    message: "What is needed for installation to make this run?",
    name: "installation",
  },
  {
    type: "input",
    message: "How is this used? Provide instructions",
    name: "usage",
  },
  {
    type: "list",
    name: "license",
    message: "Please select which license you would like to use.",
    choices: ["APACHE 2.O", "BSD 3", "GVL-GPL 3.0", "MIT", "None"],
  },
  {
    type: "input",
    message: "Contribution guidelines? If yes, add them.",
    name: "contributing",
  },
  {
    type: "input",
    message: "What is needed to fufil tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "Info for pertaining questions.",
    name: "Questions",
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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generatorMarkdown(data));
    console.log(data);
  });
}

init();
