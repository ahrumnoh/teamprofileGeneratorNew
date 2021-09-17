const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


const fs = require('fs'); 
const inquirer = require('inquirer');


const teamArray = []; 


const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please add the manager of this team', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please Type the manager's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the ID with numbers")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please add an official email of the manager.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNB',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNB } = managerInput; 
        const manager = new Manager (name, id, email, officeNB);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    ==============================================
    🚩 Welcome to employees's section to the team
    ==============================================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'city',
            message: "Please enter which city you live in.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter which city you live in")
                }
            }
        },
        {
            type: 'input',
            name: 'university',
            message: "Please enter the intern's University",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter your university🏫")
                }
            }
        },


        {
            type: 'input',
            name: 'graduationyear',
            message: "Please let us know when you graduated in Year",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please let us know when you graduated in Year")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        
        let { name, id, email, role, github, university,city, graduationyear, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github, city);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, university, graduationyear);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        
        if (err) {
            console.log(err);
            return;
        
        } else {
            console.log(`
        ===================================================
                       🎇✨Congrats!✨🎇
        ===================================================
          
          Your team profile has been successfully created! 

        ===================================================

                              💻
                              
        Please check out the 'index.html' in dist folder
        ===================================================
        
        `)
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });