// IMPORTACIONES
const inquirer = require( 'inquirer' );
require('colors');

//APP

const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desa hacer?',
        choices: [
            {
                value: '1',
                name:`${'1'.green + '.'.red} Crear Lista`
            }, 
            {
                value: '2',
                name:`${'2'.green + '.'.red} Listar tareas`
            }, 
            {
                value: '3',
                name:`${'3'.green + '.'.red} Lista de tareas completadas`
            }, 
            {
                value: '4',
                name:`${'4'.green + '.'.red} Lista de tareas pendientes`
            }, 
            {
                value: '5',
                name:`${'5'.green + '.'.red} Completar tarea(s)`
            }, 
            {
                value: '6',
                name:`${'6'.green + '.'.red} Borrar tareas`
            }, 
            {
                value: '0',
                name:`${'0'.green + '.'.red} Salir de la aplicación`
            }, 
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log(" ================================== ".bgWhite.green);
    console.log(" ==>   Seleccione una opción    <== ".bgWhite.red);
    console.log(" ================================== \n".bgWhite.green);

    const { option } = await inquirer.prompt(preguntas)
    
    return option;

};

const pausa = async() =>{ 

    const menuFooter=[
        {
            type: 'input',
            name: 'footer',
            message: `Presione ${"ENTER".green} para continuar\n`
        }
    ];

    const footer = await inquirer.prompt(menuFooter);
    console.log('\n')
    console.log('\n')
    return footer;
}

const leerInput = async ( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if(value.length === 0){
                    return ' Por favor ingrese un dato '.yellow
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}