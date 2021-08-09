import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        // 1. Estado inicial será un objeto que tendra un arreglo que estara vacio (data)
        data: [],
        loading: true
    });

    useEffect( () => {

        // 1. Petición a las imagenes. Llamar al helper
        getGifts( category )
            .then( imgs => {
                    
                    setState({
                        data: imgs,
                        loading: false
                    });

            })

    }, [ category ]) //Se agrega como segundo argumento la categoria para que se ejecute solo cuando cambie

    return state; // { data:[], loading: true }

} 