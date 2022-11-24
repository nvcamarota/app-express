const express = require('express');
const app = express(); //Llama a todos los archivos de Express en una sola variable
const port = 3030; //variable
const path = require('path');

//Creando rutas
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'log-in.html')));
app.get('/registro-usuario', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/detalle-producto', (req, res) => res.sendFile(path.join(__dirname, 'views', 'detalle-producto.html')));
app.get('/carrito-de-compra', (req, res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'views', '404.html')));

app.listen(port, () => console.log(`Server running in port ${port}`)); //Levanta el servidor
