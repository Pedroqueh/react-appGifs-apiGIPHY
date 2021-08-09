import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//rafc

export const GifExpertApp = () => {

    // Crear lista de categorias
    const [categories, setCategories] = useState(['Tokyo Revengers']);

    // Tarea agregar más elementos al arreglo

    // const handleAdd = () => {
    //     //operador spread para agregar un elemento al arreglo
    //     setCategories([...categories, 'Boruto']);
    //     setCategories( cats => [ ..cats, 'Boturo' ] );
    // }

    return (
        <>
            <h2> App Gifs - Api GIPHY</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            {/* Mostrar categorias en lista ordenada */}
            <ol>
                {
                    categories.map( category =>(
                        <GifGrid
                            key = { category }
                            category = { category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
