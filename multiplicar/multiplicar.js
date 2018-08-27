// requireds
const fs = require('fs'); //proyecto propio de node
//const fs = require('fs');//express no existe, no es propia es un paqueno no nativo de node
//const fs = require('fs');// archivos que se crean dentro del proyecto ('./fs')
const color = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log(`==================`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${limite}-.txt`);
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}