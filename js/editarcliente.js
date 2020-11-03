import { validate, showAlert } from './functions.js';
import { getClient, updateClient } from './API.js';
import {
    nombreInput,
    emailInput,
    telefonoInput,
    empresaInput,
    idInput,
    form
} from './references.js';

(() => {

    'use strict';

    const loadClient = async () => {
        const parametersURL = new URLSearchParams( window.location.search );
        const idClient      = parseInt( parametersURL.get( 'id' ) );
        const client        = await getClient( idClient );
        
        showClient( client );

        form.addEventListener( 'submit', validateClient );
    }

    const showClient = ({ nombre, email, telefono, empresa, id }) => {
        nombreInput.value   = nombre;
        emailInput.value    = email;
        telefonoInput.value = telefono;
        empresaInput.value  = empresa;
        idInput.value       = id;
    }

    const validateClient = event => {
        event.preventDefault();

        const client = { 
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value 
        }

        if( validate( client ) ) {
            showAlert( 'Todos los campos son obligatorios' );
            return;
        }

        updateClient( client );
    }


    // EVENTS
    document.addEventListener( 'DOMContentLoaded', loadClient );

})();