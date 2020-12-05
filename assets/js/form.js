const btnSend = document.getElementById('btnSend'); // Obtenemos la referencia al formulario
const name = document.getElementById('name')
const email = document.getElementById('email')
const peticion = document.getElementById('peticion')

const database = firebase.database();
const rootRef = database.ref('contact');

btnSend.addEventListener('click', (e) => {
  e.preventDefault();
  rootRef.child(name.value).set({
    name: name.value,
    email: email.value,
    peticion: peticion.value
  })
  .then(function(){
    swal ( "¡ Mensaje enviado! " , "Recuerda enviaranos detalladamente tu idea del proyecto" )  ; // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
  })
  .catch(function(){
    swal ( "¡ Mensaje No enviado! " )  ;// En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
  });
  

  document.getElementById('contactForm').reset();
})


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


// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();
// const nodemailer = require('nodemailer');

// // Configure the email transport using the default SMTP transport and a GMail account.
// // For Gmail, enable these:
// // 1. https://www.google.com/settings/security/lesssecureapps
// // 2. https://accounts.google.com/DisplayUnlockCaptcha
// // For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// // TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.

// // const gmailEmail = functions.config().gmail.email;
// // const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "recappte@gmail.com",
//     pass: "Bonita2020+",
//   },
// });

// // Your company name to include in the emails
// // TODO: Change this to your app or company name to customize the email sent.
// const APP_NAME = 'DiskCreative';

// [START sendWelcomeEmail]
/**
 * Sends a welcome email to new user.
 */
// // [START onCreateTrigger]
// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
// // [END onCreateTrigger]
//   // [START eventAttributes]
//   const email = user.email; // The email of the user.
//   const displayName = user.displayName; // The display name of the user.
//   // [END eventAttributes]

//   return sendWelcomeEmail(email, displayName);
// });
// [END sendWelcomeEmail]

// [START sendByeEmail]
/**
 * Send an account deleted email confirmation to users who delete their accounts.
 */
// [START onDeleteTrigger]
// exports.sendByeEmail = functions.auth.user().onDelete((user) => {
// // [END onDeleteTrigger]
//   const email = user.email;
//   const displayName = user.displayName;

//   return sendGoodbyeEmail(email, displayName);
// });
// // [END sendByeEmail]

// // Sends a welcome email to the given user.
// async function sendWelcomeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

// //   // The user subscribed to the newsletter.
// //   mailOptions.subject = `Welcome to ${APP_NAME}!`;
// //   mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
// //   await mailTransport.sendMail(mailOptions);
// //   console.log('New welcome email sent to:', email);
// //   return null;
// // }

// exports.welcomeMail = functions.database.document("contact/{id}").onCreate(
//     (snap, context)=>{
//    const email = snap.data().email;
//    const name = snap.data().name;
//    return sendWelcomeEmail(email, name)
   
// });

// function sendWelcomeEmail(email) {
//     return transport.sendMail({
//         from: 'Bliss <Contacto@DiskCretive>',
//         to: email,
//         subject: "§",
//         html: `
//           <h1>Hola ${APP_NAME}</h1>
//           <p>Gracias por contactarnas pronto nos comunicaresmo con usted para Construir tu idea</p>
//           <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" /> 
//           <a href="https://rickandmortyapi.com/api/character/avatar/1.jpeg"> </a>
//         `
//     })
//     .then(r => r)
//     .catch(e => e);
// }