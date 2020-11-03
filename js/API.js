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

export const getClient = async id => {

    try {
        const response  = await fetch( `${ url }/${ id }` );
        const client    = await response.json();  

        return client;
    } catch( error ){
        console.error( error );
    }

}

export const updateClient = async client => {

    try {
        const { id } = client;

        await fetch( `${ url }/${ id }`, {
            method: 'PUT',
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