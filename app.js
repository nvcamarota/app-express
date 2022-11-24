const express = require('express');
const app = express(); //Llama a todos los archivos de Express en una sola variable
const port = 3030; //variable

app.listen(port, () => console.log(`Server running in port ${port}`)); //Levanta el servidor
