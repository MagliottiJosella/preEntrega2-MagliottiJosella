alert(" Bienvenido a nuestro sistema de turnos online");

// ---------------- DATOS CLIENTE--------------------------//

//ingreso y validacion de datos del usuario
   

   //validarnombre
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



  // validar apellido
  
  function validarApellido() {
      let apellido=prompt("ingrese su apellido").toLowerCase();
  
      if(apellido.trim() === "" || !isNaN(apellido)){
          alert("No se ingreso su apellido");
          validarApellido();
      } else{
          return apellido;
          
      }
  }


// creacion objeto persona con los datos ingresados por el cliente.

class Persona{
   constructor(Nombre, Apellido){
      this.Nombre=Nombre;
      this.Apellido=Apellido;
   }
}

let Cliente=new Persona(validarNombre(),validarApellido());

console.log(Cliente);



//-------------------- DATOS DEL PROFESIONAL--------------------//

//Eleccion profesional


class profesionalEleccion{
   constructor(nombreProfesional){
      this.nombreProfesional=nombreProfesional;
   }
}

let Profesional=new profesionalEleccion(prompt("Hola"+" "+Cliente.Nombre+" "+Cliente.Apellido+" con que profesional desea atenderse? Gonzalo/Milo").toLowerCase());

console.log(Profesional);



//Dias disponibles para cada profesional


const arrayDiasGonzalo=['lunes','miercoles','jueves','sabado'];
const arrayDiasMilo=['martes','viernes','sabado'];




let Dia=prompt("ingrese el dia que quiere reservar").toLowerCase();
//Eleccion dia














