const btnSend = document.getElementById('btnSend')
const name = document.getElementById('name')
const email = document.getElementById('email')
const peticion = document.getElementById('peticion')
const form = document.getElementById('contactForm');
const regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
// const database = firebase.database();
// const rootRef = database.ref('contact');
// if(btnSend){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
//   btnSend.addEventListener('submit', enviarBtn); // Al momento de enviar el formulario, ejecuta la función "contactform"
// }

// $('#btnSend').click(function() {
 
// if (form === null){
  // btnSend.addEventListener('submit' , )
btnSend.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
        'name': name.value,
        'email': email.value,
        'peticion': peticion.value
      }; 
    if ((data !== null ) || (regex.test($ ('#email') .val().trim()) )) {
      swal ( "¡ Mensaje No enviado! ", "Dejastes algun espacio vacio o no escribiste el correo correctamente" )  ;// En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
    }else{savebtnSend(data);}
     // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
    // document.getElementById('contactForm').reset();
    document.getElementById('contactForm').reset();

})
// }
// });
function savebtnSend(data) {
firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
  .then(function(){
    swal ( "¡ Mensaje enviado! " , "Recuerda enviaranos detalladamente tu idea del proyecto" )  ; // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
  })
  .catch(function(){
    alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
  });
};
// }

// if(btnSend){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
//   btnSend.addEventListener('submit', btnSend); // Al momento de enviar el formulario, ejecuta la función "contactform"
// }

// function btnSend(event) {
//   event.preventDefault(); // Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros)
//   const name = document.getElementById('name'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
//   const email = document.getElementById('email');
//   const peticion = document.getElementById("peticion");
//   const data = {
//     'name': name.value,
//     'email': email.value,
//     'peticion': peticion.value
//   }; // Creamos un objecto con todos los elementos de nuestro formulario.
//   savebtnSend(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
//   form.reset(); // borramos todos los campos. 
// }

// function savebtnSend(data) {
// firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
//   .then(function(){
//     alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
//   })
//   .catch(function(){
//     alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
//   });
// };


