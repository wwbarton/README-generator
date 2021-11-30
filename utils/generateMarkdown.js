function generateMarkdown(data) {
  return `
# Project Title : ${data.title}
https://github.com/${data.username}/${data.title}

# Description
 ${data.description}
# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [data](#data)
# Installation
The following necessary dependencies must be installed in order to run
${data.installation}
# Usage
 In order to use the corresponding app,${data.usage}
# License
![Github license] <img src="https://img.shields.io/badge/license-MIT-blue.svg">
This application is covered by the ${data.license} license. 
# Contributing
 ${data.contributing}
# Tests
 ${data.tests}
# Questions
Contact me here with any questions: ${data.email}

#Find me on GitHub: [${data.username}](https://github.com/${data.username})

 
 `;
}

module.exports = generateMarkdown;
