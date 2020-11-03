import { 
    form,
    nombreInput,
    emailInput,
    telefonoInput,
    empresaInput
} from './references.js';

import {
    validate,
    showAlert
} from './functions.js';

import {
    addClient
} from './API.js';

(() => {
    
    'use strict';

    const validateForm = event => {
        event.preventDefault();

        const client = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value
        }

        if( validate( client ) ) {
            showAlert( 'Todos los campos son obligatorios' );
            return;
        }

        form.reset();
        addClient( client );
    }

    // Events
    form.addEventListener( 'submit', validateForm );   

})();