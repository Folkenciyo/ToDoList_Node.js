// IMPORTS
require('colors');
const { inquirerMenu ,
        pausa ,
        leerInput } = require('./helpers/inquirer');// const { pausa } = require('./helpers/mensajes');

const { guardarDB,
        leerDB } = require('./helpers/guardarArchivo')

const Tareas = require('./models/tareas')

// APP
console.clear();


const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        // establecer tareas
    }
    await pausa();

    do{
        //imprimir el menu
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                //crear tarea
                const desc = await leerInput('Descripcion: '.green);
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log( tareas.listadoArr );
                break;
            
            case '3':
                console.log('menu3');
                break;
            
            case '4':
                console.log('menu4');
                break;

            case '5':
                console.log('menu5');
                break;

            case '6':
                console.log('menu6');
                break;
        }

        // comentar esta linea para probar el programa  y no se borre DB
        //  guardarDB( tareas.listadoArr );

        console.log('\n')
        console.log('\n')

        await pausa();
    
    }while( opt !== '0' )
    

}

main();