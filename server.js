const express = require('express'); //chama o express - que cria o servidor

const app = express(); //instancia o express


// CONFIGURAÇÃO DO SERVIDOR EXPRESS ----------

app.set("view engine", "ejs"); //indica para o express que está utilizando o EJS
app.set('views', './views');
app.use(express.static('./public')); //instancia os arquivos css e js para rodar no servidor criado
app.get("/", function (req, res) {//cria uma rota
    res.render("index")

}) 



// RODAR O SERVIDOR ------------------------------

app.listen(8080); //função para rodar o servidor na porta 8080 (arquivo tem que estar dentro da pasta views)

console.log("Running on port 8080")