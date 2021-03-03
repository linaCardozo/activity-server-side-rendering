const fs = require("fs");
const http = require("http");
const axios = require("axios");

// URL from clients and suppliers
const url1 =
  "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json";
const url2 =
  "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json";

let table = "";

// Getting suppliers page (proveedores.html)
const getSuppliersPage = (callback) => {
  fs.readFile("proveedores.html", (err, data) => {
    if (err) throw err;
    callback(data.toString());
  });
};

// Getting clientes page (clientes.html)
const getClientsPage = (callback) => {
  fs.readFile("clientes.html", (err, data) => {
    if (err) throw err;
    callback(data.toString());
  });
};

// Getting data of suppliers from URL
const getSuppliers = (callback) => {
  axios
    .get(url1)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Getting data of clients from URL
const getClients = (callback) => {
  axios
    .get(url2)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Creating server for building the HTML of clients' and providers' tables
// The server listens on port 8081
http
  .createServer((req, res) => {
    table =
      '<table class="table table-striped"><thead><tr><th>ID</th><th>Nombre Compañía</th><th>Contacto</th></tr></thead><tbody>';

    if (req.url === "/api/clientes") {
      getClientsPage((data) => {
        getClients((cli) => {
          for (let i = 0; i < cli.data.length; i++) {
            table += "<tr><td>" + cli.data[i].idCliente + "</td>";
            table += "<td>" + cli.data[i].NombreCompania + "</td>";
            table += "<td>" + cli.data[i].NombreContacto + "</td>";
            table += "</tr>";
          }
          table += "</tbody></table>";
          res.end(data + table);
        });
      });
    } else if (req.url === "/api/proveedores") {
      getSuppliersPage((data) => {
        getSuppliers((sup) => {
          for (let i = 0; i < sup.data.length; i++) {
            table += "<tr><td>" + sup.data[i].idproveedor + "</td>";
            table += "<td>" + sup.data[i].nombrecompania + "</td>";
            table += "<td>" + sup.data[i].nombrecontacto + "</td>";
            table += "</tr>";
          }
          table += "</tbody></table>";
          res.end(data + table);
        });
      });
    }
  })
  .listen(8081);
