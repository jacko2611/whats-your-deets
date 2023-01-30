const generateCard = () => {
    `

<div class="col">
    <div class="card .h-100" style="width: 18rem;">
        <div class="card-header bg-info">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle bi ${role}">${role}</h6>
        </div>
        <ul class="list-group p-2">
            <li class="list-group-item">An item</li>
            <li class="list-group-item"><a href = "mailto: ${email}">${email}</a></li>
            <li class="list-group-item">${roleSpecific}</li>
        </ul>
    </div>
</div>
    `
}




const generateHtml = function(data) {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Link to Bootstrap's CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Mate</title>
    </head>
    <body>
        <header>
            <div id="title" class="container-fluid bg-info">
                <h1 class="text-center text-white lh-lg">My Team</h1>
                </div>
        </header>
    
        <main>
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-auto g-4">
                    
                    
                    <!-- forEach loop function to generate cards -->
                
                </div>
            </div>
        </main>
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = generateHtml;
        
