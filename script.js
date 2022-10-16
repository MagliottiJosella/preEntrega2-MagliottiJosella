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
// con funcion filtrer crear una variable a partir del elemento del array que sea igual al dia ingresado. ¿¿¿????? NO ME SALEEEEE


const arrayDiasGonzalo=['lunes','miercoles','jueves','sabado'];
const arrayDiasMilo=['martes','viernes','sabado'];

// con un IF decir en funcion de que profesional se eligio :mostrar los dias y filtrar.

// generar un array con horarios , mostrarlos y que elija 
// generar una variable con ese horario a partir del array horario


// GUARDAR TODA LA INFO EN UN OBJETO TURNO! 


class TURNO{
    constructor(dia, horario){
        this.dia=dia;
        this.horario=horario;
        this.profesional=Profesional;
        this.clientenombre=Cliente.nombre;
        this.clienteapellido=Cliente.apellido;
    }
}



// mostrar en pantalla toda la info del turno


































 

//Eleccion dia*/

//validacion de la existencia del dia

/*if( Profesional.nombreProfesional === "gonzalo" ){
    alert("Los dias disponibles con Gonzalo son :"+
    " "+arrayDiasGonzalo.join( "-"));

    let Dia=prompt("ingrese el dia que quiere reservar").toLowerCase();

    function validaciondia() {

        for (let i = 0; i < arrayDiasGonzalo.length; i++) {
            if (Dia == arrayDiasGonzalo[i] ) {
               let Diavalido =arrayDiasGonzalo[i] ;
               console.log(Diavalido); // para ver si toma bien el dia ( borrar antes de entregar)
               console.log(i); //para corroborar que funciona bien ( borrar antes de entregar)
            } 
            else{

                alert("No esta disponible dicho dia");
             
            }
            
        }         
    }
    
    let diagonza=validaciondia();
    console.log(diagonza)
    

 
}

else{

}*/





















