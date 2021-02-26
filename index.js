// const fs = require("fs");

// let fileContent = "";

// const getFileContent = (callback) => {
//     fs.readFile("index.js", (err, data) => {
//         if (err) throw err;
//         //fileContent = data.toString();
//         callback(data.toString());
//     });
// };

// //console.log("Data", fileContent);
// //getFileContent((data) => console.log(data)); //Forma 1
// getFileContent(console.log); // Otra forma de hacer lo de arriba

// fs.writeFile("prueba.js", "contenido del archivo", (err)=> {
//     if (err) throw err;
//     console.log("Archivo creado correctamente");
// });

// Escuchar peticiones http

const fs = require("fs");
const http = require("http");

// Aquí el archivo está solo dentro del callback
/* fs.readFile("index.js", (err, data) => {
  console.log(data);
}); */

const getFileContent = (callback) => {
  fs.readFile("index.js", (err, data) => {
    callback(data.toString());
  });
};

http
  .createServer((req, res) => {
    //res.end("Hola mundo");
    getFileContent((data) => {
      res.end(data);
    });
    //console.log("Hola mundo");
    /*Este código permite hacer cosas como buscar
    en una API una URL (ej: /api/albums/100 -> retorne
    el album 100 del recurso albums dentro de api*/
    // const obj = [{name: "ana"}, {name: "maria"}];
    // console.log(req.url);
    /*if ((req.url = "/api/albums")) {
    } else {
    }*/
  })
  .listen(8000);
