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
