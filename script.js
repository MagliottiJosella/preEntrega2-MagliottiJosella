alert(" Bienvenido a nuestro sistema de turnos online");

// DATOS DEL CLIENTE, y validacion

function validarNombre() {
let nombre=prompt("ingrese su nombre").toLowerCase();

if(nombre.trim() === "" || !isNaN(nombre)){
alert("No se ingreso el nombre");
validarNombre();
}
else{
return nombre;
}
}



function validarApellido() {
let apellido=prompt("ingrese su apellido").toLowerCase();

if(apellido.trim() === "" || !isNaN(apellido)){
alert("No se ingreso su apellido");
validarApellido();
} else{
return apellido;

}
}



class Persona{
constructor(Nombre, Apellido){
this.Nombre=Nombre;
this.Apellido=Apellido;
}
}

let Cliente=new Persona(validarNombre(),validarApellido());
console.log(Cliente); // visualizacion de las caracteristicas de cliente, por consola

// DATOS DEL PROFESIONAL

class profesionalEleccion{
constructor(nombreProfesional){
this.nombreProfesional=nombreProfesional;
}
}

let Profesional=new profesionalEleccion(prompt("Hola"+" "+Cliente.Nombre+" "+Cliente.Apellido+" con que profesional desea atenderse? Gonzalo/Milo").toLowerCase());

console.log(Profesional); // visualizacion de las caracteristicas de profesional por consola

//declaracion de arrays con horarios y dias para cada profesional


const horariosGonzaMilo=["10.00","11.00","12.00","15.00","16.00","18.00","19.00"];
const arrayDiasGonzaloMilo=['lunes','martes','miercoles','jueves','viernes','sabado'];

// funciones validacion de dia y de hora

function existe(array, DiaHoraUsuario) {

const existe= array.some(elemento => elemento == DiaHoraUsuario);

    if(existe){
               return true;
              } else {
               return false;
            }
}    
   

function elegirDia(){

let diaUsuario = prompt("Elegi el dia");
let existeElDia = existe(arrayDiasGonzaloMilo, diaUsuario);

   if(existeElDia){
    let diaElegido = arrayDiasGonzaloMilo.filter( dia => dia === diaUsuario);   
    return diaElegido
    } else{
    alert('error ingrese nuevamente');
    elegirDia();
    }
}


function elegirHorario(){

let horarioUsuario = prompt("Elegi el horario");
let exiteElhorario = existe(horariosGonzaMilo, horarioUsuario);

    if(exiteElhorario){
    let horarioElegido = horariosGonzaMilo.filter( hora => hora === horarioUsuario);
    return horarioElegido
    } else{
    alert('error ingrese nuevamente');
    elegirHorario();
}
}


let diaTurno;
let horaTurno;


if (Profesional.nombreProfesional === "gonzalo") {

alert("Los dias disponibles con Gonzalo son :"+" "+ arrayDiasGonzaloMilo.join( "-"));
diaTurno=elegirDia();

alert("Los Horarios disponibles con Gonzalo son :"+" "+ horariosGonzaMilo.join( "-"));
alert(" IMPORTANTE, ingresar la eleccion con el formato hh.mm")
horaTurno=elegirHorario();



}
 else {
alert("Los dias disponibles con MILO son :"+" "+ arrayDiasGonzaloMilo.join( "-"));
 diaTurno=elegirDia();

alert("Los Horarios disponibles con MILO son :"+" "+ horariosGonzaMilo.join( "-"));
alert(" IMPORTANTE, ingresar la eleccion con el formato hh.mm")
horaTurno=elegirHorario();

}


class turno{
constructor(nombreProfesional,dia,hora,clienteNombre,clienteApellido){
this.nombreProfesional=nombreProfesional;
this.dia=dia;
this.hora=hora;
this.clienteNombre=clienteNombre;
this.clienteApellido=clienteApellido;
}
}

const Turno = new turno(Profesional.nombreProfesional,diaTurno,horaTurno,Cliente.Nombre, Cliente.Apellido);
console.log(Turno); // visualizacion del turno por consola


alert("Su turno es el dia"+" "+ diaTurno +" "+" en el horario de las"+" "+horaTurno+"hs"+" con el profesional"+" "+ Profesional.nombreProfesional+"."+"Gracias por contactarnos "+ Cliente.Nombre);
