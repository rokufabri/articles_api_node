import mysql2 from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

const connection = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
});

//Validamos si la conexión fue exitosa
if(connection == true){
    console.log('La conexión fue existoas');
}


export default connection;