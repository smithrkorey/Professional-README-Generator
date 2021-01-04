// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Description]
  * [Installation]
  * [Usage]
  * [Contibuting]
  * [License]
  * [Tests]
  * [Questions]

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Questions?
  For any questions please contact me at:
  GitHub: ${data.question1}
  Email: ${data.question2}
  `;
}

module.exports = generateMarkdown;
