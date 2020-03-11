const titulo = "Generation - NodeJs"


//Maiusculo

function maiusculo(nome){
    return nome.toUpperCase()
}

//minusculo
function minusculo(nome){
   return nome.toLowerCase()
}


// soma de caracteries
function totalLetras(nome){
   var total = nome.length
   return "total de letras é: " + total
}

// para que esas funções fiquem acessiveris para outro código, teremos qe exportar as funções

module.exports = {
    maiusculo,
    minusculo,
    totalLetras,
    titulo
}