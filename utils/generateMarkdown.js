// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let badgeURL = '';
//   if (!license) {
//     return '';
//   } else if (license === 'MIT') {
//     badgeURL = 'https://img.shields.io/badge/license-MIT-blue.svg';
//   } else if (license === 'Apache 2.0') {
//     badgeURL = 'https://img.shields.io/badge/license-Apache%202.0-blue.svg';
//   } else if (license === 'GNU GPLv3') {
//     badgeURL = 'https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg';
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let badgeURL = '';
//   if (!license) {
//     return '';
//   } else if (license === 'MIT') {
//     badgeURL = 'https://choosealicense.com/licenses/mit/';
//   } else if (license === 'Apache 2.0') {
//     badgeURL = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
//   } else if (license === 'GNU GPLv3') {
//     badgeURL = 'https://choosealicense.com/licenses/gpl-3.0/';
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// // function renderLicenseSection(license) {
// //   let badgeURL = '';
// //   if (!license) {
// //     return '';
// //   } else if (license === 'MIT') {
// //     badgeURL = 'https://choosealicense.com/licenses/mit/';
// //   } else if (license === 'Apache 2.0') {
// //     badgeURL = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
// //   } else if (license === 'GNU GPLv3') {
// //     badgeURL = 'https://choosealicense.com/licenses/gpl-3.0/';
// //   }
// // }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(answers) {
//   return `# ${answers.title}

//   ## Description
//   ${answers.description}

//   ## Installation
//   ${answers.installation}

//   ## Usage
//   ${answers.usage}

//   ## Contribution
//   ${answers.contribution}

//   ## Tests
//   ${answers.tests}

//   ## License
//   This app is cover under ${answers.license} license.

//   ## Questions
//   GitHub: [${answers.github}](https://github.com/${answers.github})
//   Email: ${answers.email}
// `;
// }

// module.exports = generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeURL = '';
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    badgeURL = 'https://img.shields.io/badge/license-MIT-blue.svg';
  } else if (license === 'Apache 2.0') {
    badgeURL = 'https://img.shields.io/badge/license-Apache%202.0-blue.svg';
  } else if (license === 'GNU GPLv3') {
    badgeURL = 'https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg';
  }
  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badgeURL = '';
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    badgeURL = 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache 2.0') {
    badgeURL = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
  } else if (license === 'GNU GPLv3') {
    badgeURL = 'https://choosealicense.com/licenses/gpl-3.0/';
  }
  return badgeURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badgeURL = '';
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    badgeURL = 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache 2.0') {
    badgeURL = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
  } else if (license === 'GNU GPLv3') {
    badgeURL = 'https://choosealicense.com/licenses/gpl-3.0/';
  }
  return badgeURL;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## License
This app is covered under the ${answers.license} license. [![License](${renderLicenseBadge(answers.license)})](${renderLicenseLink(answers.license)})

## Questions
GitHub: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}`;
}

module.exports = generateMarkdown;