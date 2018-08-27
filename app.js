const argv = require('./config/yargs').argv;
const color = require('colors/safe');


//importamos las funciones del module multiplicar
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //destructuracion

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, color.green(archivo)))
            .catch(e => console.log(e));

        break;

    default:
        console.log('Comando no reconocido');
}



//console.log(process);
//let argv2 = process.argv; //captura los argumentos
//let parametro = argv[2]; //captura la posicion del arreglo
//let base = parametro.split('=')[1] //split convierte de un string a un arreglo

//console.log('Limite', argv.limite);
//console.log(argv);
//console.log(argv2);