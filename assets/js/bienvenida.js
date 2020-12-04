/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();
// const nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.

// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "recappte@gmail.com",
    pass: "Bonita2020+",
  },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = 'DiskCreative';

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

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Welcome to ${APP_NAME}!`;
//   mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
//   await mailTransport.sendMail(mailOptions);
//   console.log('New welcome email sent to:', email);
//   return null;
// }

exports.welcomeMail = functions.database.document("contact/{id}").onCreate(
    (snap, context)=>{
   const email = snap.data().email;
   const name = snap.data().name;
   return sendWelcomeEmail(email, name)
   
});

function sendWelcomeEmail(email) {
    return transport.sendMail({
        from: 'Bliss <Contacto@DiskCretive>',
        to: email,
        subject: "§",
        html: `
          <h1>Hola ${APP_NAME}</h1>
          <p>Gracias por contactarnas pronto nos comunicaresmo con usted para Construir tu idea</p>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" /> 
          <a href="https://rickandmortyapi.com/api/character/avatar/1.jpeg"> </a>
        `
    })
    .then(r => r)
    .catch(e => e);
}