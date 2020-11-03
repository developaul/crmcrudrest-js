import { form } from './references.js';

export const showAlert = message => {

    const existAlert = document.querySelector( '.bg-red-100' );

    if( !existAlert ) {
        const alert = document.createElement( 'p' );

        alert.classList.add( 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center' );

        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${ message }<span> `;

        form.appendChild( alert );

        setTimeout( () => {
            alert.remove();
        }, 3000 );
    }

}

export const validate = client => !Object.values( client ).every( input => input !== '' );