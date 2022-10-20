const fs = require('fs');
const archivo = './db/data.JSON'

const guardarDB = ( data ) => {

    // JSON.stringify convierte un objeto en su versión string, 
    // necesario para crear un archivo de txt
    fs.writeFileSync(archivo, JSON.stringify( data ));

}

const leerDB = () => {

    if( !fs.existsSync(  archivo )){
        return null
    }

    const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );
    // Este JSON.parse lo que hace es cambiar el string a un objeto
    const data = JSON.parse( info );
    console.log(data)

    return data;
}

module.exports = {
    guardarDB,
    leerDB
}