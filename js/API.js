const url = `http://localhost:4000/clientes`;

export const addClient = async client => {

    try {
        await fetch( url, {
            method: 'POST',
            body: JSON.stringify( client ),
            headers: {
                'Content-type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch( error ) {
        console.error( error );
    }

}

export const getClients = async () => {
    
    try {
        const response  = await fetch( url );
        const clients   = await response.json();
        
        return clients;
    } catch( error ) {
        console.error( error );
    }

}

export const deleteClient = async idClient => {
    
    try {

        await fetch( `${ url }/${ idClient }`, {
            method: 'DELETE'
        });

    } catch( error ) {
        console.error( error );
    }

}
