

// 1. Recibe la categoría y hace una petición https (fetch)
export const getGifts = async (category) => {
    // 2. Petición https en postman se configuran los parametros que se necesitan y se genera la url que se usara en la petición https.
    // encodeURI = sirve para reemplazar los espacios por otros simbolos %20
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=10&api_key=hOA4VFJ3PcxH0GpR1XLPszUZVbBU0Gju`;

    // 3. Llamar al endpoint
    const resp = await fetch(url);
    const { data } = await resp.json();

    // 4. Filtrar la info que viene de data a lo que se necesita mostrar .map crea un nuevo arreglo con el resultado de lo solicitado
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
            // images? = el ? asegura que vengan imagenes
        };
    });

    return gifs;
};
