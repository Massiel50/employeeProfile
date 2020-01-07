
// create a function that holds the html that will output the main body of the html and will take in the data from the other cards
function mainRender(data){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    ${for(card in teamMember){
        

    }}
    ${managerCard(data)}
    ${engineerCard(data)}
    ${internCard(data)}

</body>
</html>
    

`
}
// export mainRender
module.exports = mainRender;