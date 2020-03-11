        // console.log("Olá Mundo!")

// próximo passo: Criar a identidade do projeto. (JSÃNNNNNN (O JSON))
// Observar que foi criado o arquivo packege.jason ()java scriopt object notation que contem informaçõe do projeto
//instalar o framework de node >> express 
//executar o comando: npm install express

let express = require('express')// importa o modulo express
let app = express()
let port = 3000
app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
  })
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
