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

const url1 =
  "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json";
const url2 =
  "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json";

const axios = require("axios");

// Optionally the request above could also be done as
axios
  .get(url1)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

axios
  .get(url2)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const getFileContent = (callback) => {
  fs.readFile("index.html", (err, data) => {
    callback(data.toString());
  });
};

// http
//   .createServer((req, res) => {
//     //res.end("Hola mundo");
//     getFileContent((data) => {
//       res.end(data);
//     });
//     //console.log("Hola mundo");
//     /*Este código permite hacer cosas como buscar
//     en una API una URL (ej: /api/albums/100 -> retorne
//     el album 100 del recurso albums dentro de api*/
//     // const obj = [{name: "ana"}, {name: "maria"}];
//     // console.log(req.url);
//     /*if ((req.url = "/api/albums")) {
//     } else {
//     }*/
//   })
//   .listen(8000);
