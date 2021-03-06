// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![badge](https://img.shields.io/badge/license-${data.licenses}-blue)

  ## ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#description)
  * [Contibuting](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## License
  This application is covered under ${data.license}.

  ## Tests
  ${data.tests}

  ## Questions?
  For any questions please contact me at:<br/>
  GitHub: ${data.question1}<br/>
  Email: ${data.question2}
  `;
}

module.exports = generateMarkdown;
