const generateTeamPage = function (employeeInfoCards) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AHRUM NOh's Profile Management💻</title>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>


<body>
    <body>
        <header>
            <h1>A.NOH TEAM Management💻</h1>           
        </header>



            <main>
               <div class="container">
                   <div class="row justify-content-center" id="team-cards">
                       <!--Team Information sections-->
                       ${employeeInfoCards}     
                   </div>
               </div>
           </main>

</body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>  


`;
}




// to make Manager card😎
const ManagerCard = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow-sm p-1 mb-2 bg-body rounded">
            <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4><span class="material-icons">manager</span>
            </div>

            <div class="card-body">
               <p class="id">ID: ${manager.id}</p>
               <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
               <p class="office">Office Number: ${manager.officeNB}</p>
            </div>
        </div>
    </div>
    `;
}





const EngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow-sm p-1 mb-2 bg-body rounded">
            <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
               <p class="id">ID: ${engineer.id}</p>
               <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
               <p class="github bg-dark">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
               <p class="city">City: <a href="mailto:${engineer.city}">${engineer.city}</a></p>
            </div>
        </div>
    </div>
    `;
}





const InternCard = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow-sm p-1 mb-2 bg-body rounded">
            <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Intern</h4><span class="material-icons">child_care</span>
            </div>

            <div class="card-body">
               <p class="id">ID: ${intern.id}</p>
               <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
               <p class="University">University: ${intern.university}</p>
               <p class="graduationYear bg-dark">Graduation Year: ${intern.graduationyear}</p>
            </div>
        </div>
    </div>
    `;
}



generateHTML = (data) => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        //manager 
        if (role === 'Manager') {
            const managerCard = ManagerCard(employee);

            pageArray.push(managerCard);
        }

        //engineer
        if (role === 'Engineer') {
            const engineerCard = EngineerCard(employee);
        
            pageArray.push(engineerCard);
        }

        //intern

        if (role === 'Intern') {
            const internCard = InternCard(employee);
        
            pageArray.push(internCard);
        }

    }




    const employeeInfoCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeInfoCards);
    return generateTeam;

}





module.exports = generateHTML;