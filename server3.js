const express = require("express")
const server3 = express()

app.listen(3000, ()=>{
    console.log("Servidor em execução")
})

//rotas com parâmetros
app.get('/',(req,res)=>{
    res.send('Olá mundo')
})

//rota com 1 parâmetro
app.get('/ola/:nome',(req,res)=>{
    console.log(req.params.nome)
    res.send("Olá"+req.params.nome)
})

//rota com dois parâmetros
app.get("/ola/:nome/:empresa",(req,res)=>{
    res.send('Olá'+req.params.nome+ ' da empresa'+req.params.empresa);
})

//rota com soma de dois parâmetros
app.get('/soma/:a/:b',(req,res)=>{
    res.send('O resultado da soma de:' +req.params.a +' e ' +req.params.b+ ' é :'+(parseInt(req.params.a))+(parseInt(req.params.b)))
})