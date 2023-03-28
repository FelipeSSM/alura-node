//HTTP Puro
// const http = require('http');
// const port = 3000;
//
// const rotas = {
//     '/':'Curso de Node',
//     '/livros':'Entrei na pagina de livros',
//     '/autores':'Listagem de autores',
//     '/editora':'Pag de editora',
//     '/sobre':'info sobre projeto'
// }
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[req.url]);
// })
//
// server.listen(port, () => {
//     console.log(`Servidor escutando em http://localhost:${port}`)
// });
import app from "./src/app.js";
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})