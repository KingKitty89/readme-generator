
function generateMarkdown(data) {
  return `# ${data.title}
  ------
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
 
  ## Contributors
 
 ${data.contributors}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributors](#contributors)

  * [Tests](#tests)

  ## Description
  
  ${data.description}

  ## Installation 

  To install necessary dependencies, run the following command:

  ${data.installation}

  ## Technology Stack

  ${data.technologies}

  ## Usage 

  ${data.usage}

  ## License

  ${data.license}

  ## Questions

  If you have any questions please contact me using the below:

  * Email: ${data.email}
  * GitHub Username: ${data.username}
  * GitHub Profile: ${data.profile}

  ## Tests

`;
}

module.exports = generateMarkdown;
