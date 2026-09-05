const config = require('./config'); 
const { getUser } = require('./users'); 
const { getProduct } = require('./products'); 
 
function startApplication() { 
    console.log(`Server running on port ${config.port}`); 
 
    const USER2 = getUser(1); 
    const prueba = 500; 
 
    console.log('User:', USER2); 
    console.log("Hola desde la API"); 
    console.log(prueba); 
    console.log("Conexión con el servidor establecida"); 
} 
 
startApplication();