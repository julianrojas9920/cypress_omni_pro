// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Puedes registrar el error para fines de depuración
    console.log('Uncaught Exception:', err);
  
    // Devuelve false para evitar que Cypress falle el test
    // Cambia la lógica según tus necesidades
    return false; // Ignorar la excepción y continuar con el test
  });
  

// Alternatively you can use CommonJS syntax:
// require('./commands')