const {cursos, lista_de_Cursos} = require ('./cursos');
const fs = require('fs');

const express = require('express')
const app = express()

const opciones = {
    id: {
      demand: true,
      alias: 'i'
    },
    nombre: {
      demand: true,
      alias: 'n'
    },
    cedula: {
      demand: true,
      alias: 'c'
    }
  };
  
  let crearArchivo = (nombre_Estudiante, cedula, curso) =>{
    informacion_inscripcion = "El estudiante " + nombre_Estudiante + " con cédula " + cedula + '\n' +
            "se ha matriculado con éxito en el Curso " + curso.nombre + '\n' +
            "Ademas " + curso.duracion + "  y un tambien " + curso.valor;
    fs.writeFile('inscripcion.txt', informacion_inscripcion, (err) =>{
      if (err) throw (err);
      console.log('la inscripcion se ha realizado con exito..se ha creado un archivo.txt.');
    });
  }

  const argv = require('yargs')
            .command('inscribir', 'Cursos Tecnologico de Antioquia', opciones)
            .argv;



            if (argv.nombre) {
                let cursoEncontrado = cursos.find(curso => curso.id == argv.i);
                if (cursoEncontrado) {
                  crearArchivo(argv.n, argv.c, cursoEncontrado);
                } else {
                  console.log('No existe un curso con el id INGRESADO: ' + argv.i);
                }
              } else {
                lista_de_Cursos(cursos);
             
              }

              app.get('/', function (req, res) {
                res.send(informacion_inscripcion)
               
              })
               
              app.listen(3000)