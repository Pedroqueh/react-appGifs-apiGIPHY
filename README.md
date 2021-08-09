# App de gifs creada con react

Este proyecto fue construido en base al curso de programación de Fernando Herrera "React".

## Construido con:

Este proyecto fue construido con distantas funcionalidades que ofrece React y Javascript.

### `Custom Hooks`

### `Fetch hacia una API`

Se utilizo fetch() para conectar a la api de GIPHY, con el fin de buscar gifs según el contenido ingresado.

### `Comunicación entre componentes`

La aplicación contempla la comunicación entre diversos componentes:

AddCategory.js -> recibe una categoría y trabaja con el hook de estado (useState). También se utiliza PropTypes para configurar como obligatorio que se envíe una categoría para funcionar.

GifGrid.js -> Recibe la categoría que se trabajo en el archivo anterior y la muestra en pantalla, utilizando el hook useFetchGifs.

GifGridItem.js -> Crea a partir de la categoría buscada cada elemento que se mostrará en pantalla (trabaja con el title y el url de cada gif)
