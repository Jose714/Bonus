let cursos = [
  {
    id: 1,
    nombre: 'Curso de nodejs TDA',
    duracion: 'El curso tiene una duracion de 32 Horas',
    valor: 'Elcurso tiene un valor de 0 pesos'
  },
  {
    id: 2,
    nombre: 'Electronica digital TDA' ,
    duracion: 'El curso tiene una duracion de 38 Horas',
    valor: 'Elcurso tiene un valor de 200000 pesos'
  },
  {
    id: 3,
    nombre: 'Ecuaciones Diferenciales',
    duracion: 'El curso tiene una duracion de 42 Horas',
    valor: 'Elcurso tiene un valor de 100000 pesos'
  }
];

let lista_de_Cursos = (cursos) =>{
  
  for (let i = 0; i < 3; i++) {
    aux=i;
if(aux==0){
  setTimeout(function(){
    console.log(cursos[0]);
  }, 2000 ); 
}else if(aux==1){
  setTimeout(function(){
    console.log(cursos[1]);
  }, 4000 ); 
}else if(aux==2){
  setTimeout(function(){
    console.log(cursos[2]);
  }, 6000 ); 
}
    
  };
};

module.exports = {
  cursos,
  lista_de_Cursos
};