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

(() => {
    
    'use strict';

    const validateForm = event => {
        event.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value
        }

        if( validate( cliente ) ) {
            showAlert( 'Todos los campos son obligatorios' );
            return;
        }

        form.reset();
        console.info( 'Agregando...' );
    }

    // Events
    form.addEventListener( 'submit', validateForm );   

})();