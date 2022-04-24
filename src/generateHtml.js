const icons = {
    manager: `<i class="bi bi-people-fill"></i>`,
    intern: `<i class="bi bi-mortarboard-fill"></i>`,
    developer: `<i class="bi bi-keyboard-fill"></i>`
};

generateEmployeeCard = (employee) => {
    const { position, name, id, email } = employee;

    let extraSection;
    switch (position) {
        case 'developer':
            extraSection = `GitHub: <a href="${employee.github}">${employee.github}</a>`;
            break;
        case 'intern':
            extraSection = `School: ${employee.school}`;
            break;
        case 'manager':
            extraSection = `Office Number: ${employee.officeNumber}`;
            break;
    }

    return `
    <div class="card mt-5" style="width: 20rem;">
        <div class="card-header bg-primary my-auto">
            <h4 class="text-light mt-2">
                ${name}
            </h4>
            <h6 class="card-subtitle mb-2 text-light">
                ${icons[position]} ${position.toUpperCase()}
            </h6>
        </div>
    
        <div class="card-body bg-secondary bg-opacity-10">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">${extraSection}</li>
            </ul>
        </div>
    </div>
    `
}

generateHtml = (employeeList) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEAM VIEWER</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>

<body>
    <header class="bg-danger py-4">
    <h1 class="text-white text-center">MY TEAM</h1>
    </header>
    <main class="row justify-content-evenly mx-auto" style="width: 70%;">
        ${employeeList.map(employee => generateEmployeeCard(employee)).join("\n")}
    </main>
</body>

</html>`
}

module.exports = generateHtml;